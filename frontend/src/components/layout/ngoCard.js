import React from 'react';
const ngo={
  // id: id will go here
  name: "NGO name",
  description: "This is the short example of description",
  causes: [
    "Birthday gifts to orphan",
    "Donation to old age home",
    "asldfj alsdkf jasdf  sdf"
  ]  
}
export default function NgoCard() {
  return (
    <div className="max-w-4xl  backdrop-blur-md mx-auto p-4 mb-6 rounded-lg shadow-2xl bg-gradient-to-br from-white via-white to-indigo-200  text-gray-800">
      {/* <div className=" p-6 rounded-lg shadow-inner backdrop-blur-md"> */}
        <h2 className="text-xl font-semibold mb-2">{ngo.name}</h2>
        <p className="text-sm mb-4">
          {ngo.description}
        </p>

        <hr className="border-gray-300 mb-4" />

        <ul className="list-disc list-inside text-sm mb-4">
          {ngo.causes.map((ele)=>(<li>{ele}</li>))}
        </ul>
        <div className="flex justify-end mt-6">
          <button
            className="px-6 py-2 rounded-full bg-indigo-600 hover:bg-gray-700 text-white font-semibold transition-colors duration-300 focus:outline-none"
            onClick={() => console.log('Proceed')}
          >
            Proceed
          </button>
        {/* </div> */}
      </div>
    </div>
  );
}
