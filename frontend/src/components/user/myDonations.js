import React from 'react';
import DonationCard from '../layout/donationCard';
import { useEffect, useState } from 'react';
import {axiosPrivate} from '../../api/axios'
import ConnectionString from '../../connectionString';
import {toast} from 'react-toastify'
const MyDonations = () => {
  
  const [donations, setdonations] = useState([])
  useEffect(() => {
    fetchMyDonations();
  },[])
  const fetchMyDonations=async()=>{
    try{
      const result=await axiosPrivate.get(`${ConnectionString}donationDetails`);
      // setdonations([{
      //   amount: 400,
      //   kits: 78,
      //   name: "xyz trust",
      //   cause: "this is cause title",
      //   description: 'this is description',
      //   booking_date:new Date(),
      //   city: "Surat"
      // }])
      console.log(result);
      setdonations(result.data);
      // debugger;
      
    }
    catch(error){
      console.log(error)
      toast.error(error.response.data.message);
    }
  }

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-dark text-center mb-6">
        Donations history
      </h1>
      <p className="text-lg md:text-xl text-gray-600 text-center mb-8">
        Here are the details of your previous donations. Thank you for your generosity!
      </p>
      <div className="space-y-6">
        {donations.map((ele,id)=>(<DonationCard key={id} {...ele}/>)) }
      </div>
    </div>
  );
};

export default MyDonations;
