import React from 'react';

export default function DonationCard() {
  return (
    <div className="max-w-4xl  mx-auto my-4 bg-white rounded-lg shadow-lg flex h-48 md:h-40">
      {/* Left side (gray background) */}
      <div className="w-1/4 border-zinc-400 border-r-2  border-dotted bg-indigo-100 p-4 rounded-l-lg flex flex-col justify-between">
        <div>
          <span className="text-gray-500 block text-xs font-semibold">Amount</span>
          <span className="text-lg font-bold">$1,200</span>
        </div>
        <div>
          <span className="text-gray-500 block text-xs font-semibold">Kits Generated</span>
          <span className="text-lg font-bold">15</span>
        </div>
      </div>

      {/* Right side (white background) */}
      <div className="w-3/4 p-4 bg-gradient-to-br backdrop-blur-md bg-white bg-opacity-15 from-white rounded-r-lg via-white to-indigo-100">
        <div className="flex justify-between items-center mb-2">
          <span className="text-gray-500 text-xs">NGO Name</span>
          <span className="text-gray-500 text-xs">Date: 01/01/2024</span>
        </div>
        <h2 className="text-xl font-bold">Cause Title</h2>
        <p className="text-sm text-gray-700 my-2">Location: New York, USA</p>
        <p className="text-sm mb-5 text-gray-700">Cause Description: Providing education kits to underprivileged children.</p>
      </div>
    </div>
  );
}
