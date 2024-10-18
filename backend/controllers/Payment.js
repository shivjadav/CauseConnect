// controllers/Payment.js
const Razorpay = require('razorpay');
const crypto = require('crypto');
const Order = require('../models/Payment');
require('dotenv').config();

// Initialize Razorpay instance with keys
const razorpay = new Razorpay({
    key_id: process.env.RZP_KEY_ID,
    key_secret: process.env.RZP_KEY_SECRET,
});

// Create an order
exports.createOrder = async (req, res) => {
    try {
        const { amount } = req.body;

        // Validate amount
        if (!amount || amount <= 0) {
            return res.status(400).json({ message: 'Invalid amount' });
        }

        const options = {
            amount: amount * 100, // Amount in paise
            currency: 'INR',
            receipt: `receipt_${Math.floor(Math.random() * 10000)}`,
        };

        // Create an order in Razorpay
        const order = await razorpay.orders.create(options);

        // Check if the order was created successfully
        if (!order || !order.id) {
            return res.status(500).json({ message: 'Error creating order' });
        }

        // Save order to database (optional)
        const newOrder = new Order({
            razorpay_order_id: order.id,
            amount: amount,
            status: 'created'
        });
        await newOrder.save();

        res.status(201).json({
            success: true,
            order_id: order.id,
            amount: order.amount,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

// Verify payment signature
exports.verifyPayment = async (req, res) => {
    try {
        const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

        // Generate signature using HMAC
        const hmac = crypto.createHmac('sha256', process.env.RZP_KEY_SECRET);
        hmac.update(razorpay_order_id + "|" + razorpay_payment_id);
        const generated_signature = hmac.digest('hex');

        if (generated_signature !== razorpay_signature) {
            return res.status(400).json({ success: false, message: 'Payment verification failed' });
        }

        // Update order status in the database
        const order = await Order.findOne({ razorpay_order_id });
        if (order) {
            order.razorpay_payment_id = razorpay_payment_id;
            order.status = 'completed';
            await order.save();
        }

        res.status(200).json({ success: true, message: 'Payment verified successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};
