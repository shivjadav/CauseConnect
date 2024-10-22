import React, { useState } from 'react'
import { RxCross1 } from "react-icons/rx";
import handleSubmit from './handleSubmission';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import { useLoading } from '../../context/loadingContext'
import ModalPortal from '../user/modalPortal'
import TableBreakDown from './tableBreakdown';
import ThankYouModal from '../layout/thankYouModal';
const PlantationForm = (props) => {
    // const [amount, setAmount] = useState('');
    const [isThankYouModal, setIsThankYouModal] = useState(false);

    // const [event, setEvent] = useState('')
    const { startLoading, stopLoading } = useLoading();
    const axiosPrivate = useAxiosPrivate();

    const costBreakDown = [{
        desc: "Plant Cost",
        cost: 250
    },
    {
        desc: "Labour Cost",
        cost: 50
    }, {
        desc: "Total",
        cost: 300
    }
    ]
    const validateForm = () => {
        return form.cause && form.date && form.description && form.amount > 0;
    };
    
    const [isCalcModalOpen, setIsCalcModalOpen] = useState(false);
    const [form, setform] = useState({
        cause: props.cause,
    })
    const [totalcost, settotalcost] = useState(0);
    const handleAmountChange = (e) => {

        setform((prev) => ({ ...prev, [e.target.id]: e.target.value }))
        settotalcost(e.target.value - (e.target.value % costBreakDown[costBreakDown.length - 1].cost))
    }
    const handleChange = (e) => {
        setform((prev) => ({ ...prev, [e.target.id]: e.target.value }))
    }
    const openCalcModal = () => setIsCalcModalOpen(true);
    const today = new Date().toISOString().split('T')[0];
    const sixMonthsFromNow = new Date();
    sixMonthsFromNow.setMonth(sixMonthsFromNow.getMonth() + 6);
    const maxDate = sixMonthsFromNow.toISOString().split('T')[0];

    return (
        <ModalPortal>
            {/* Full-screen overlay */}
            <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={props.closeModal}></div>

            {/* Modal content */}
            <div className="fixed inset-0 flex items-center justify-center z-50">
                <div className="bg-white p-6 rounded-md shadow-lg max-w-lg w-full">
                    <div className="flex flex-row">
                        <span className="text-2xl grow font-bold mb-4">Donation details</span>
                        <div className="flex items-center" onClick={props.closeModal}>
                            <RxCross1 />
                        </div>

                    </div>
                    <form>
                        <div className="mb-4">
                            <label htmlFor="cause" className="block mb-2">Cause</label>
                            <input
                                type="text"
                                id="cause"
                                placeholder={form.cause}
                                value={form.cause}
                                onChange={handleChange}
                                className="w-full p-2 border rounded"
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="date" className="block mb-2">Date of Donation</label>

                            <input
                                type="date"
                                id="date"
                                className="w-full p-2 border rounded"
                                min={today}
                                max={maxDate}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="description" className="block mb-2">Description</label>
                            <input
                                type="text"
                                id="description"
                                placeholder="Description"
                                value={form.description}
                                onChange={handleChange}
                                className="w-full p-2 border rounded"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="amount" className="block mb-2">Amount</label>
                            <input
                                type="number"
                                id="amount"
                                placeholder="Amount"
                                value={form.amount}
                                onChange={handleAmountChange}
                                className="w-full p-2 border rounded"
                                required
                            />
                        </div>
                        <div className='mb-4'>
                            <label className='block mb-2'>Per Unit Cost</label>
                            <TableBreakDown costBreakDown={costBreakDown} />
                        </div>
                        <hr className='my-4 ' />
                        <div className="flex justify-between">
                            <div className='font-semibold'>
                                <p>Total cost: ₹ {totalcost}</p>
                                <p>Number of units: {Math.floor(totalcost / costBreakDown[costBreakDown.length - 1].cost)}</p>

                            </div>
                            <button type="button"
                                onClick={async (e) => {
                                    e.preventDefault();
                                    startLoading();
                                    const res=await handleSubmit(axiosPrivate, form, totalcost, Math.floor(totalcost / costBreakDown[costBreakDown.length - 1].cost), props.ngoid);
                                    stopLoading();
                                    if(res===400)
                                    {
                                        return;
                                    }
                                    setIsThankYouModal(true)
                                }}

                                disabled={!validateForm()}
                                className="px-4 py-2 bg-indigo-500 text-white rounded" >
                                Confirm
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            {isThankYouModal && <ThankYouModal closeModal={() => {setIsThankYouModal(false); props.closeModal();}} />}
            {/* {isCalcModalOpen && <CalculationModal amount={amount} closeModal={() => setIsCalcModalOpen(false)} />} */}
        </ModalPortal>
    )
}

export default PlantationForm
