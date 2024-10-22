import { toast } from 'react-toastify';
import ConnectionString from '../../connectionString';

const handleSubmit = async (axiosPrivate, form, totalcost, kits, ngoid) => {
    form.totalcost = totalcost;
    form.kits = kits;
    form.ngoid = ngoid;

    try {
        // Create Razorpay order
        const orderResponse = await axiosPrivate.post('/payment/create-order', { amount: totalcost });
        console.log('Order Response:', orderResponse);
        const order_id = orderResponse.data.order_id;

        if (!order_id) {
            throw new Error('Order ID is undefined');
        }

        // Ensure Razorpay is loaded before using it
        if (typeof window.Razorpay === 'undefined') {
            throw new Error('Razorpay SDK not loaded');
        }

        // Create a new promise that will resolve when the payment is completed or canceled
        const paymentResult = await new Promise((resolve, reject) => {
            const options = {
                key: 'rzp_test_m8mkcKrmzK0IXv',  // Replace with your Razorpay key
                amount: totalcost * 100,
                currency: 'INR',
                name: 'Cause Connect',
                description: 'Donation Payment',
                order_id: order_id,
                handler: async (response) => {
                    // Payment is successful
                    form.paymentResponse = response;

                    try {
                        const res = await axiosPrivate.post(`${ConnectionString}donateinfo`, form);
                        toast.success(res.data.message);
                        resolve(response); // Resolve the promise when payment is successful
                    } catch (error) {
                        toast.error(error.response.data.message);
                        reject(error); // Reject the promise if there's an error in the backend call
                    }
                },
                prefill: {
                    name: form.name || '',
                    email: form.email || '',
                    contact: form.phone || '',
                },
                theme: {
                    color: '#3399cc',
                },
                modal: {
                    ondismiss: () => {
                        // Payment window closed by the user
                        toast.error("Payment process was closed or canceled.");
                        reject(new Error("Payment process was closed or canceled.")); // Reject the promise on dismiss
                    }
                }
            };

            const rzp = new window.Razorpay(options);
            rzp.open();
        });
        return paymentResult; // Or handle as necessary

    } catch (error) {
        console.error(error);
        toast.error("Error creating Razorpay order: " + (error.response?.data?.message || error.message));
        return 400; // Or handle the error as needed
    }
}

export default handleSubmit;
