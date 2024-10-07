import React from 'react'
import { useState } from 'react'
import RegisterSVG from '../SVG/registerSVG'
import connectionString from '../connectionString'
import { useNavigate } from 'react-router-dom'
import axios from "axios"
import { toast } from 'react-toastify'
import Logo from '../SVG/logo'
import { Link } from 'react-router-dom'
import { useLoading } from '../../context/loadingContext'

const Register = () => {
  const [form, setForm] = useState({});
  console.log("helo")
  const { startLoading, stopLoading } = useLoading();
  const navigate = useNavigate();
  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.id]: e.target.value }))
  }
  const verifyPan=async (num)=>{
    console.log(num);
    const url = 'https://aadhaar-number-verification-api-using-pan-number.p.rapidapi.com/api/validation/pan_to_aadhaar';
    const options = {
      method: 'POST',
      headers: {
        'x-rapidapi-key': 'a8394a4ddfmsh3cd105b0f8e26dep1b7124jsnc5b52a76abf8',
        'x-rapidapi-host': 'aadhaar-number-verification-api-using-pan-number.p.rapidapi.com',
        'Content-Type': 'application/json'
      },
      body: {
        pan: num,
        consent: 'y',
        consent_text: 'I hear by declare my consent agreement for fetching my information via AITAN Labs API'
      }
    };
    
    try {
      const response = await fetch(url, options);
      const result = await response.text();
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    startLoading();
    
    const isVerified= await verifyPan(form.pan);
    if(isVerified!=="success") {
      toast.error("Your pan was not verified");
      stopLoading();
      
      return;
    }

    console.log(form);

    const result = await fetch(`${connectionString}register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });
    const data = await result.json();
    console.log(data);
    if (data.success === false) {
      toast.error("There is some error")
      const result = await axios.post(`${connectionString}signin`,
        JSON.stringify(form),
        {
          headers: {
            "Content-Type": "application/json",
            withCredentials: true
          }
        });
      console.log(result);
      if (result.success === false) {
        alert("error!")
      }
      stopLoading();
      navigate("/Login");
    }


  }
  return (
    <div className="flex justify-center">
      <div className='grid lg:w-4/5 w-full md:w-4/5 grid-cols-1 grid-rows-1 md:grid-cols-2  mb-5 lg:grid-cols-2'>
        <div className="flex justify-center items-center">

          <section className='w-full'>
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto  lg:py-0 ">
              <div className='flex flex-row mb-4'>

                <Link to='/' className='-m-1.5 p-1.5'>
                  <Logo />
                </Link>
                <Link to='/' className='flex justify-center items-center'>
                  <div className="text-4xl mx-2 text-indigo-600 font-bold">Cause Connect</div>
                </Link>
              </div>
              <div className="w-full bg-white rounded-lg shadow drop-shadow-2xl md:mt-0 sm:max-w-md xl:p-0 border-b-4 border-l-4 border-l-indigo-600 border-b-indigo-600">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                  <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                    Create an account
                  </h1>
                  <form method='post' className="space-y-2 md:space-y-4 " action="#" onSubmit={handleSubmit}>

                    <div>
                      <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900" >Your email</label>
                      <div className='flex space-x-1'>
                        <input type="email" name="email" id="email" onChange={handleChange} className="bg-gray-50 border border-gray-300 w-full text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block p-2.5" placeholder="name@company.com" required />

                      </div>
                    </div>

                    <div>
                      <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Your name</label>
                      <input type="text" name="name" id="name" onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5" placeholder="name" required />
                    </div>
                    <div>
                      <label htmlFor="address" className="block mb-2 text-sm font-medium text-gray-900">Address</label>
                      <input type="text" name="address" id="address" onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5" placeholder="address" required />
                    </div>
                    <div className='flex gap-2 flex-row'>
                      <div className='w-1/2 '>
                        <label htmlFor="number" className="block mb-2 text-sm font-medium  text-gray-900">Contact number</label>
                        <input type="number" pattern='[0-9]{10}' name="phone" id="phoneno" onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5" placeholder="7887878418" required />
                      </div>
                      <div className='w-1/2'>
                        <label htmlFor="age" className="block mb-2 text-sm font-medium text-gray-900">Your DOB</label>
                        <input type="date" name="age" id="dob" onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5" placeholder="e.g. 45" min={15} max={110} required />
                      </div>
                    </div>
                    <div className='flex gap-2 flex-row'>

                      <div className='w-1/2'>
                        <label htmlFor="city" className="block mb-2 text-sm font-medium text-gray-900">Your city</label>
                        <input type="text" name="city" id="city" onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5" placeholder="e.g. Mumbai" required />
                      </div>
                      <div className='w-1/2'>
                        <label htmlFor="pincode" className="block mb-2 text-sm font-medium text-gray-900">Pincode</label>
                        <input type="number" name="pincode" id="pincode" onChange={handleChange} pattern='[1-9]{1}[0-9]{5}' className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5" placeholder="e.g.400001" required />
                      </div>
                    </div>

                    {/* <label className='block mb-2 text-sm font-medium text-gray-900'>Your role</label> */}
                    <div>
                      <label htmlFor="pan" className="block mb-2 text-sm font-medium text-gray-900">Verify Pan-card</label>
                      <input type="text" onChange={handleChange} pattern='[A-Z0-9]{10}' name="pan" id="pan" placeholder="ATPPE04857E" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5" required />
                    </div>
                    <div>
                      <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Password</label>
                      <input type="password" onChange={handleChange} pattern='(?=.*[0-9])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}' name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5" required />
                      <p className='text-sm text-gray-400'>A password should contain atleast a capital letter, digit, special character. minimum length: 8.</p>
                    </div>
                    <div>
                      <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-gray-900">Confirm password</label>
                      <input type="password" onChange={handleChange} name="confirm-password" id="confirm-password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5" required />
                    </div>



                    <button type="submit" className="w-full text-white bg-indigo-500 hover:bg-indigo-700 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Create an account</button>
                    <p className="text-sm font-light text-gray-500">
                      Already have an account? <Link to="/Login" className="font-medium text-indigo-600 hover:underline">Login here</Link>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className='blur-xl invisible flex md:visible lg:visible flex-row-reverse items-center justify-center md:blur-0 lg:blur-none'>
          <RegisterSVG />
          <div />
        </div>
      </div>
    </div>
  )
}

export default Register;