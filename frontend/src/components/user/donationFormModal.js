import React, { useState } from "react";
import CalculationModal from "./calculationModal";
import ModalPortal from './modalPortal';
import { ImCross } from "react-icons/im";
import { RxCross1 } from "react-icons/rx";

import ListBox from "../layout/listBox";

const causes = [
    { name: "Birthday gifts to orphanage" },
    { name: "Donation to old age home" },
    { name: "River cleaning for enviornmental benefits." },

];
const DonationFormModal = ({ closeModal }) => {
    console.log("donation form modal");
    const [amount, setAmount] = useState('');
    const [event, setEvent] = useState('')
    const [isCalcModalOpen, setIsCalcModalOpen] = useState(false);

    const openCalcModal = () => setIsCalcModalOpen(true);
    const today = new Date().toISOString().split('T')[0];
    const sixMonthsFromNow = new Date();
    sixMonthsFromNow.setMonth(sixMonthsFromNow.getMonth() + 6);
    const maxDate = sixMonthsFromNow.toISOString().split('T')[0];

    return (
        <ModalPortal>
            {/* Full-screen overlay */}
            <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={closeModal}></div>

            {/* Modal content */}
            <div className="fixed inset-0 flex items-center justify-center z-50">
                <div className="bg-white p-6 rounded-md shadow-lg max-w-sm w-full">
                    <div className="flex flex-row">
                        <span className="text-xl grow font-semibold mb-4">Donation details</span>
                        <div onClick={closeModal} className="flex items-center">
                            <RxCross1 />
                        </div>

                    </div>
                    <form>
                        <div className="flex flex-row gap-2 mb-6 ">
                            <div className="w-1/2 pr-3 h-auto">

                                <label htmlFor="event" className="block mb-2">Event</label>
                                <input type="text" id="event" value={event}
                                    onChange={(e) => setEvent(e.target.value)}
                                    required
                                    className="w-full   border rounded h-3/4"
                                    placeholder="Event name"
                                ></input>
                            </div>
                            <div className="w-1/2">

                                <label htmlFor="donationType" className="block mb-2">Donation type</label>
                                <select id="donationType" className="p-1 h-3/4  w-full border rounded">
                                    <option value={"food_packet"}>Food packet</option>
                                    <option value={"clothes"}>Clothes</option>
                                    <option value={"river_cleaning"}>River cleaning</option>
                                    <option value={"medicines"}>Medicines</option>
                                </select>
                            </div>
                            {/* <ListBox id="cause" options={causes}/> */}
                        </div>
                        <div className="mb-4">
                            <label htmlFor="cause" className="block mb-2">Cause</label>
                            <select id="cause" className="w-full p-2 border rounded">
                                {causes.map((ele, key) => (<option value={ele.name} key={key}>{ele.name}</option>))}

                            </select>
                            {/* <ListBox id="cause" options={causes}/> */}
                        </div>
                        <div className="mb-4">
                            <label htmlFor="date" className="block mb-2">Date of Donation</label>

                            <input
                                type="date"
                                id="date"
                                className="w-full p-2 border rounded"
                                min={today}
                                max={maxDate}
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="amount" className="block mb-2">Amount</label>
                            <input
                                type="number"
                                id="amount"
                                placeholder="Amount"
                                value={amount}
                                onChange={(e) => setAmount(e.target.value)}
                                className="w-full p-2 border rounded"
                                required
                            />
                        </div>
                        <div className="flex justify-end">

                            <button type="button" className="px-4 py-2 bg-indigo-500 text-white rounded" onClick={openCalcModal}>
                                Next
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            {isCalcModalOpen && <CalculationModal amount={amount} closeModal={() => setIsCalcModalOpen(false)} />}
        </ModalPortal>
    );
};
export default DonationFormModal