import React from 'react';
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import DonationFormModal from '../user/donationFormModal'
import { useState } from 'react';
import { FaCircleInfo } from "react-icons/fa6";
import NgoInfo from './ngoInfo';
import {useNavigate} from 'react-router-dom'

export default function NgoCard(props) {
  const navigate=useNavigate();
  const navigateToForms=()=>{
    navigate(`/forms/${props.id}`,{
      state:{
        name: props.name,
        description: props.description,
        city: props.city
      }
    })
  }
  // const [isFormModalOpen, setIsFormModalOpen] = useState(false);
  const [isInfoModalOpen, setisInfoModalOpen] = useState(false);
  return (
    <div data-aos="fade-left" className="max-w-full bg-white  w-full sm:max-w-md md:max-w-lg mx-auto p-4 mb-6 rounded-lg shadow-2xl  text-gray-800">
      <div className="text-xl flex gap-2 flex-row items-center py-2 font-bold mb-2">{props.name}
          <FaCircleInfo onClick={()=>{setisInfoModalOpen(true)}} className='text-gray-600' size={15} />
      </div>
      <p className="text-sm mb-4">
        {props.description}
      </p>

      <hr className="border-gray-300 mb-4" />


      <div className="flex justify-end mt-6">
        <button
          className="px-6 py-2 rounded-full bg-indigo-600 hover:bg-gray-700 text-white font-semibold transition-colors duration-300 focus:outline-none flex items-center space-x-2"
          onClick={navigateToForms}
        >
          <span>Proceed</span>
          <MdOutlineKeyboardDoubleArrowRight size={20}/>
        </button>
        {/* {isFormModalOpen && <DonationFormModal closeModal={() => setIsFormModalOpen(false)} />} */}
          {isInfoModalOpen && <NgoInfo ngo={props} setisInfoModalOpen={()=>setisInfoModalOpen(false)}/>}
      </div>
    </div>
  );
}
