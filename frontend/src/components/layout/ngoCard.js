import { useState } from 'react';

export default function NgoCard() {
  const [selected, setSelected] = useState(false);

  const handleSelect = () => {
    setSelected(!selected);
  };

  return (
    <div
      className={`flex items-center max-w-2xl mx-auto rounded-lg shadow-lg p-4 bg-white cursor-pointer transition-all duration-300 ease-in-out 
      ${selected ? 'bg-indigo-50' : ''}`}
      onClick={handleSelect}
    >
      <div className="flex-1 p-4">
        <h2 className="text-2xl font-semibold text-indigo-600">NGO Title</h2>
        <p className="text-gray-500">Location: City, Country</p>
        <p className="mt-2 text-gray-700">
          This is a brief description of the NGO. It explains the mission and work that the NGO is doing in the community.
        </p>
      </div>
      <button
        onClick={handleSelect}
        className={`ml-6 px-6 py-2 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2`}
      >
        {selected ? 'Selected' : 'Select'}
      </button>
    </div>
  );
}
