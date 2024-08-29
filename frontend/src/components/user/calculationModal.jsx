import ModalPortal from './modalPortal';
import React from 'react';

const CalculationModal = ({ amount, closeModal }) => {
    console.log("calculation modal")
    const kitCost = 100; // Assuming 1 kit costs 100 units of currency
    const kits = Math.floor(amount / kitCost);

    return (
        <ModalPortal>
            {/* Full-screen overlay */}
            <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={closeModal}></div>

            {/* Modal content */}
            <div className="fixed inset-0 flex items-center justify-center z-50">
                <div className="bg-white p-6 rounded-md shadow-lg max-w-sm w-full">
                    <h2 className="text-xl font-semibold mb-4">Confirm Donation</h2>
                    <p>You can donate <strong>{kits}</strong> kits with the amount entered.</p>
                    <div className="mt-6 flex justify-end">
                        <button className="mr-2 px-4 py-2 bg-gray-300 rounded" onClick={closeModal}>
                            Back
                        </button>
                        <button
                            disabled={kits <= 0}
                            className={`px-4 py-2 rounded text-white ${kits <= 0 ? 'bg-gray-400 cursor-not-allowed' : 'bg-indigo-500'}`}
                        >
                            Confirm
                        </button>
                    </div>
                </div>
            </div>
        </ModalPortal>
    );
};
export default CalculationModal