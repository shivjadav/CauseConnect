import React from 'react';
import DonationCard from '../layout/donationCard';

const MyDonations = () => {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-dark text-center mb-6">
        Donations history
      </h1>
      <p className="text-lg md:text-xl text-gray-600 text-center mb-8">
        Here are the details of your previous donations. Thank you for your generosity!
      </p>
      <div className="space-y-6">
          <DonationCard />
      </div>
    </div>
  );
};

export default MyDonations;
