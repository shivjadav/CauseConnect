import React from 'react';
import ModalPortal from '../user/modalPortal';
import { RxCross1 } from "react-icons/rx";

const NgoInfo = ({ setisInfoModalOpen, ngo }) => {
  return (
    <ModalPortal>
      {/* Full-screen overlay */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-40"
        onClick={setisInfoModalOpen}
      ></div>

      {/* Modal content */}
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full relative">
          {/* Close button */}
          <button onClick={setisInfoModalOpen} className="absolute top-4 right-4">
            <RxCross1 size={24} className="text-gray-500 hover:text-gray-700" />
          </button>

          {/* NGO Title and City */}
          <div className="mb-4">
            <h2 className="text-3xl font-bold text-gray-900">{ngo.name}</h2>
            <p className="text-sm text-gray-500 mt-1">{ngo.city}</p>
          </div>

          {/* Description */}
          <p className="text-gray-700 mb-6 leading-relaxed">{ngo.detail}</p>

          {/* Divider */}
          <hr className="border-gray-300 mb-6" />

          {/* Causes */}
      
        </div>
      </div>
    </ModalPortal>
  );
};

export default NgoInfo;
