import React,{ useState } from 'react';
import ListBox from '../layout/listBox';
import NgoCard from '../ngo/ngoCard';
import axios from 'axios';
import useAxiosPrivate from '../../hooks/useAxiosPrivate'
import ConnectionString from '../../connectionString' 
import { useNavigate, useLocation } from "react-router-dom";
const cities = [
  { name: 'Ahmedabad' },
  { name: 'Gandhinagar' },
  { name: 'Surat' },
  { name: 'Baroda' },
  { name: 'Rajkot' },
];


const Donate = () => {
  const navigate=useNavigate();
  const axiosPrivate=useAxiosPrivate();
  const location=useLocation();
  const [ngos, setngos] = useState([]);
  const [selected,setSelected]=useState(cities[0]);
  const controller = new AbortController();
  const searchNGO=async ()=>{
      console.log(selected.name);
      try{
        const res=await axiosPrivate.get(`${ConnectionString}fetchNgo/${selected.name}`,{
           signal: controller.signal
       });
       console.log(res.data);
       setngos(res.data);
      }catch(error){
        console.error(error);
        navigate('/Login', { state: { from: location }, replace: true });
      }
      
  }
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
          <ListBox options={cities} selected={selected} setSelected={setSelected}/>
          <button className="w-full py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg transition-colors duration-300"
          onClick={searchNGO}
          >
            Search
          </button>
        </div>
      </div>
      
      <div className="lg:hidden border-t border-gray-300 w-full"></div>
      
      <div className="hidden lg:block lg:h-96 lg:w-3 lg:border-r lg:border-gray-500"></div>
      <div className="flex flex-col lg:w-3/4 w-full  space-y-6">
      {ngos.length>0?ngos.map((ele)=>(
        <NgoCard name={ele.name} description={ele.description}
        causes={ele.causes} city={ele.city} id={ele._id}  key={ele._id}  />
      )):(<div className='text-center text-gray-600 text-lg'>
      Start searching by selecting city
      </div>)}
      
      </div>
    </div>
  );
};

export default Donate;
