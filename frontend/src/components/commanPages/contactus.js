import { useState } from 'react';
import ContactusSVG from '../SVG/contactusSVG';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify'
import ConnectionString from '../../connectionString';
import { useLoading } from '../../context/loadingContext'
export default function ContactUs() {
  const { startLoading,stopLoading, isLoading } = useLoading();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    age: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    startLoading();
    // Handle form submission logic here
    console.log(formData);
    axios.post(`${ConnectionString}postFeedback`, formData)
      .then((res) => {

        toast.success(res.data.msg);
        stopLoading();
      })
      .catch((err) => {
        toast.error(err.response.data.msg);
        stopLoading();
      })
      
      
      // Reset the form after submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        age: '',
        message: ''
      });
    };

  return (
    <div className="mx-auto grid md:grid-cols-2 grid-cols-1 max-w-screen px-4 sm:px-8 py-16">
      <div data-aos="fade-right" className="w-full bg-white rounded-lg shadow drop-shadow-2xl md:mt-0 sm:max-w-md xl:p-0 border-b-2 border-l-2 border-l-indigo-600 border-b-indigo-600 mx-auto">
        <div className="p-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
            Contact us
          </h1>

          <form
            method='post'
            className="space-y-4 md:space-y-6"
            action="#"
            onSubmit={handleSubmit}
          >
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Your email</label>
              <div className='flex space-x-1'>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 w-full text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block p-2.5"
                  placeholder="name@company.com"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div>
              <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Your name</label>
              <input
                type="text"
                name="name"
                id="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5"
                placeholder="name"
                required
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className='flex gap-2 flex-row'>
              <div className='w-1/2'>
                <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900">Contact number</label>
                <input
                  type="number"
                  pattern='[0-9]{10}'
                  name="phone"
                  id="phone"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5"
                  placeholder="7887878418"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <div className='w-1/2'>
                <label htmlFor="age" className="block mb-2 text-sm font-medium text-gray-900">Your age</label>
                <input
                  type="number"
                  name="age"
                  id="age"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5"
                  placeholder="e.g. 45"
                  min={15}
                  max={110}
                  required
                  value={formData.age}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 ">Your message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                placeholder="Leave a comment..."
                required
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full text-white bg-indigo-500 hover:bg-indigo-700 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <div data-aos="fade-left"  className='flex items-center justify-center mt-10 md:mt-0'>
        <ContactusSVG />
      </div>
    </div>
  );
}
