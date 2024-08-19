import React from 'react';
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

const ngo = {
  name: "NGO name",
  description: "This is the short example of description",
  causes: [
    "Birthday gifts to orphanage",
    "Donation to old age home",
    "River cleaning for enviornmental benefits "
  ]  
};

export default function NgoCard(props) {
  return (
    <div className="max-w-full  w-full sm:max-w-md md:max-w-lg  backdrop-blur-md mx-auto p-4 mb-6 rounded-lg shadow-2xl bg-gradient-to-br from-white via-white to-indigo-200 text-gray-800">
      <h2 className="text-xl font-semibold mb-2">{ngo.name}</h2>
      <p className="text-sm mb-4">
        {ngo.description}
      </p>

      <hr className="border-gray-300 mb-4" />

      <ul className="list-disc list-inside text-sm mb-4">
        {ngo.causes.map((ele, index) => (
          <li key={index}>{ele}</li>
        ))}
      </ul>

      <div className="flex justify-end mt-6">
        <button
          className="px-6 py-2 rounded-full bg-indigo-600 hover:bg-gray-700 text-white font-semibold transition-colors duration-300 focus:outline-none flex items-center space-x-2"
          onClick={() => console.log('Proceed')}
        >
          <span>Proceed</span>
          <MdOutlineKeyboardDoubleArrowRight size={20}/>
        </button>
      </div>
    </div>
  );
}
