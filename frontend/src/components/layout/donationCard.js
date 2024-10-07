import React from 'react';

export default function DonationCard(props) {
  const formatDate = (date) => {
    const day = String(date.getDate()).padStart(2, '0'); // Get day and pad with leading zero
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Get month (0-based) and pad
    const year = date.getFullYear(); // Get full year
  
    return `${day}/${month}/${year}`;
  };
  
  const currentDate = new Date(props.booking_date);
  const formattedDate = formatDate(currentDate);
  
  return (
    <div data-aos="fade-right" className="max-w-4xl  mx-auto my-4 bg-white rounded-lg shadow-lg flex h-48 md:h-40">
      {/* Left side (gray background) */}
      <div className="w-1/4 border-zinc-400 border-r-2  border-dotted bg-indigo-100 p-4 rounded-l-lg flex flex-col justify-between">
        <div>
          <span className="text-gray-500 block text-lg font-semibold">Amount</span>
          <span className="text-xl font-bold">{props.amount} rs.</span>
        </div>
        <div>
          <span className="text-gray-500 block text-lg font-semibold">Kits Generated</span>
          <span className="text-xl font-bold">{props.kits}</span>
        </div>
      </div>

      {/* Right side (white background) */}
      <div className="w-3/4 p-4 bg-gradient-to-br backdrop-blur-md bg-white bg-opacity-15 from-white rounded-r-lg via-white to-white">
        <div className="flex justify-between items-center mb-2">
          <span className="text-gray-500 text-xs">{props.name}</span>
          <span className="text-gray-500 text-xs">Date: {formattedDate}</span>
        </div>
        <h2 className="text-xl font-bold">{props.cause}</h2>
        <p className="text-sm text-gray-700 my-2">Location: {props.ngoid.city}</p>
        <p className="text-sm mb-5 text-gray-700">{props.description}</p>
      </div>
    </div>
  );
}
