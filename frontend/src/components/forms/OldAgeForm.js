import React, { useState } from 'react';
import { RxCross1 } from "react-icons/rx";
import handleSubmit from './handleSubmission';
import ThankYouModal from '../layout/thankYouModal';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import { useLoading } from '../../context/loadingContext';
import ModalPortal from '../user/modalPortal';
import TableBreakDown from './tableBreakdown';

const OldAgeForm = (props) => {
    const { startLoading, stopLoading } = useLoading();
    const [isThankYouModal, setIsThankYouModal] = useState(false);
    const axiosPrivate = useAxiosPrivate();
    const [isCalcModalOpen, setIsCalcModalOpen] = useState(false);
    const [form, setForm] = useState({ cause: props.cause, amount: 0 });
    const [checkedItems, setCheckedItems] = useState([]);
    const [costBreakDown, setCostBreakDown] = useState([]);

    const items = [
        { desc: "Medication", cost: 500 },
        { desc: "Clothes", cost: 400 },
        { desc: "Air conditioner", cost: 30000 },
        { desc: "Fan", cost: 700 },
        { desc: "Bedsheets", cost: 200 },
        { desc: "Bed", cost: 1500 },
        { desc: "Basic food (1 time meal)", cost: 100 },
        { desc: "Basic food (2 time meal)", cost: 200 },
    ];

    const handleAmountChange = (e) => {
        setForm((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    }

    const handleChange = (e) => {
        setForm((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    }

    const handleCheck = (item) => {
        setCheckedItems((prev) => {
            const isChecked = prev.some(i => i.desc === item.desc);
            let newCheckedItems;
            if (isChecked) {
                newCheckedItems = prev.filter(i => i.desc !== item.desc);
            } else {
                newCheckedItems = [...prev, item];
            }

            const newCostBreakDown = newCheckedItems.map(item => ({ ...item }));
            setCostBreakDown(newCostBreakDown);

            return newCheckedItems;
        });


    }

    const today = new Date().toISOString().split('T')[0];
    const sixMonthsFromNow = new Date();
    sixMonthsFromNow.setMonth(sixMonthsFromNow.getMonth() + 6);
    const maxDate = sixMonthsFromNow.toISOString().split('T')[0];

    const unitCost = costBreakDown.reduce((total, item) => total + item.cost, 0);
    const validateForm = () => {
        return form.cause && form.date && form.description && form.amount > 0;
    };
    return (
        <ModalPortal>
            <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={props.closeModal}></div>
            <div className="fixed inset-0 flex items-center justify-center z-50">
                <div className="bg-white p-6 rounded-md shadow-lg max-w-lg w-full">
                    <div className="flex flex-row">
                        <span className="text-2xl grow font-bold ">Donation details</span>
                        <div className="flex items-center" onClick={props.closeModal}>
                            <RxCross1 />
                        </div>
                    </div>
                    <form>
                        <div className="mb-2">
                            <label htmlFor="cause" className="block mb-1">Cause</label>
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
                        <div className="mb-2">
                            <label htmlFor="date" className="block mb-1">Date of Donation</label>
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
                        <div className="mb-2">
                            <label htmlFor="description" className="block mb-1">Description</label>
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
                        <div className="mb-2">
                            <label htmlFor="amount" className="block mb-1">Amount</label>
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
                        <div className='mb-2'>
                            <label className='block mb-1'>Items</label>
                            <div className='grid grid-cols-4'>

                                {items.map(item => (
                                    <div key={item.desc}>
                                        <input
                                            type="checkbox"
                                            id={item.desc}
                                            onChange={() => handleCheck(item)}
                                        />
                                        <label htmlFor={item.desc}>{item.desc}</label>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className='mb-4'>
                            <label className='block mb-2'>Per Unit Cost</label>
                            <TableBreakDown costBreakDown={costBreakDown} />
                        </div>
                        <hr className='my-4 ' />
                        <div className="flex justify-between">
                            <div className='font-semibold'>
                                <p>Unit cost: ₹ {unitCost}</p>
                                <p>Total cost: {form.amount - (form.amount % unitCost) | 0}</p>
                                {/* //e.target.value-(e.target.value%costBreakDown[costBreakDown.length-1].cost */}
                                <p>Number of people to be benefited: {Math.floor(((form.amount - (form.amount % unitCost)) | 0) / (costBreakDown.length > 0 ? unitCost : 1))}</p>
                            </div>
                            <button
                                type="submit"
                                onClick={async (e) => {
                                    e.preventDefault();
                                    if (!validateForm()) {
                                        // Do not submit if form is invalid
                                        return;
                                    }
                                    startLoading();
                                    const res = await handleSubmit(
                                        axiosPrivate,
                                        form,
                                        form.amount - (form.amount % unitCost) | 0,
                                        Math.floor(
                                            ((form.amount - (form.amount % unitCost)) | 0) / (costBreakDown.length > 0 ? unitCost : 1)
                                        ),
                                        props.ngoid
                                    );
                                    stopLoading();
                                    if (res == 400) {
                                        return;
                                    }
                                    setIsThankYouModal(true);
                                }}
                                disabled={!validateForm()}
                                className="px-4 py-2 bg-indigo-500 text-white rounded"
                            >
                                Confirm
                            </button>

                        </div>
                    </form>
                </div>
            </div>
            {isThankYouModal && <ThankYouModal closeModal={() => { setIsThankYouModal(false); props.closeModal(); }} />}
            {/* {isCalcModalOpen && <CalculationModal amount={amount} closeModal={() => setIsCalcModalOpen(false)} />} */}
        </ModalPortal>
    )
}

export default OldAgeForm;
