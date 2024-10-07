import React from 'react';
import { RxCross1 } from "react-icons/rx";
import ModalPortal from '../user/modalPortal';  // Assuming you already have a ModalPortal for handling modals

const ThankYouModal = ({ closeModal }) => {
    return (
        <ModalPortal>
          
            <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={closeModal}></div>
            <div className="fixed inset-0 flex bg-gray-50 shadow-2xl items-center justify-center z-50">
                <div className="bg-white p-6 rounded-md shadow-lg max-w-lg w-full">
                    <div className="flex flex-row justify-between items-center">
                        <span className="text-2xl grow font-bold mb-4">Thank You!</span>
                        <div className="flex items-center cursor-pointer" onClick={closeModal}>
                            <RxCross1 />
                        </div>
                    </div>
                    <div className="mb-4">
                        <p className="text-lg font-semibold">Your contribution means a lot to us!</p>
                        <p className="mt-2">Thank you for your generous donation. You are making a real difference, and your support will help improve the lives of many in need.</p>
                        <p className="mt-2">We truly appreciate your kindness and commitment to this cause.</p>
                    </div>
                </div>
            </div>
        </ModalPortal>
    );
};

export default ThankYouModal;
