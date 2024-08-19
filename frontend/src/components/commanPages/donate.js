import React from 'react';
import ListBox from '../layout/listBox';
import NgoCard from '../layout/ngoCard';

const cities = [
  { name: 'Ahmedabad' },
  { name: 'Gandhinagar' },
  { name: 'Surat' },
  { name: 'Baroda' },
  { name: 'Rajkot' },
];


const Donate = () => {
  const ngoIDs=[1,2];
  console.log(ngoIDs.length)
  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-start lg:space-x-8 space-y-8 lg:space-y-0 mt-8 lg:mt-16 w-full lg:max-w-7xl mx-auto px-4 lg:px-0">
      <div className="flex flex-col space-y-8 lg:w-1/2 lg:max-w-lg">
        <h1 className="text-4xl md:text-5xl lg:text-6xl text-dark font-extrabold text-center lg:text-left">
          Find NGOs in Your City
        </h1>
        <p className="text-lg md:text-xl text-gray-600 text-center lg:text-left">
          Select your city to discover NGOs and make a difference today.
        </p>
        <div className="space-y-4">
          <ListBox options={cities} />
          <button className="w-full py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg transition-colors duration-300">
            Search
          </button>
        </div>
      </div>
      
      <div className="lg:hidden border-t border-gray-300 w-full"></div>
      
      <div className="hidden lg:block lg:h-96 lg:w-3 lg:border-r lg:border-gray-500"></div>
      <div className="flex flex-col lg:w-3/4 w-full  space-y-6">
      {cities.length>0?ngoIDs.map((ele,key)=>(
        <NgoCard id={ele} key={key} />
      )):<p>Start searching for your city</p>}
      </div>
    </div>
  );
};

export default Donate;
