import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../SVG/logo'
import LoginSVG from '../SVG/loginSVG'
import {toast, ToastContainer} from 'react-toastify'
import connectionString from "../connectionString"
import {useLoading} from "../../context/loadingContext"
import useAuth from '../../hooks/useAuth'
import { useNavigate, useLocation } from 'react-router-dom';
import axios from '../../api/axios'
const Login = () => {
  const {startLoading,stopLoading}=useLoading();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const {setAuth}=useAuth();
  const navigate = useNavigate();
  const [form,setForm]=useState({});
  const handleChange=(e)=>{
        setForm((prev)=>({...prev,[e.target.id]:e.target.value}))
  };
  const handleSubmit=async (e)=>{
    e.preventDefault();
    try{
      const result = await axios.post(`${connectionString}signin`, 
      JSON.stringify(form),
      {
        headers: {
          "Content-Type": "application/json"},
          withCredentials: true
        
      });
      
      console.log(result)
      
        const accessToken = result?.data?.accessToken.toString()
        const role=result.data.role;
        const id=result.data.id.toString()
        console.log(role);
        setAuth({accessToken,"role":[role],"user_id":id})
        navigate(from, { replace: true });
      

    }
    catch(e){
        toast.error(e.response.data.message);
        // window.location.reload();
    }
  }
  return (
    <div className="flex  justify-center">
      <div className='place-items-center grid lg:w-4/5 w-full md:w-4/5 grid-cols-1 grid-rows-1 md:grid-cols-2 mt-5 mb-5 lg:grid-cols-2'>

        <div className='blur-xl hidden  md:block lg:block flex-row-reverse items-center justify-center md:blur-0 lg:blur-none'>
          
       <LoginSVG />
        </div>
        <div className="flex justify-center items-center">
          <section className='w-full'>
            <div className="flex flex-col items-center justify-center px-4 py-8 mx-auto  lg:py-0 ">
              {/* <Link to="/" className="flex items-center mb-6 text-3xl font-semibold text-indigo-600 underline">
              <img src="mealMission.svg" className="h-9 w-auto" alt="Cause Connect" />

              </Link> */}
              <div className='flex flex-row mb-4'>
                
              <Link to='/' className='-m-1.5 p-1.5'>
              <Logo/>            
              </Link>
              <Link to='/' className='flex justify-center items-center'>
          <div className="text-2xl mx-2 text-indigo-600 font-bold">Cause Connect</div>
              </Link>
              </div>

              <div className="w-full bg-white rounded-lg shadow drop-shadow-2xl md:mt-0 sm:max-w-md xl:p-0 border-b-4 border-r-4 border-r-indigo-600 border-b-indigo-600 ">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                  <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                    Login to account
                  </h1>

                  <form method='post' className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                  
                    

                    <div>
                      <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Your email</label>
                      <input type="email" name="email" id="email" onChange={handleChange}className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5" placeholder="name@company.com" required />
                    </div>
                    <div>
                      <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Password</label>
                      <input type="password" name="password" id="password" onChange={handleChange} pattern='(?=.*[0-9])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}' placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5" required />
                      <p className='text-sm text-gray-400'>A password should contain atleast a capital letter, digit, special character. minimum length: 8.</p>
                    </div>
                    <button type="submit" className="w-full text-white bg-indigo-500 hover:bg-indigo-700 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Login</button>
                    <p className="text-sm font-light text-gray-500">
                      Don't have an account? <Link to="/register" className="font-medium text-indigo-600 hover:underline">SignUp here</Link>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Login
