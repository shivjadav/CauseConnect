import React from 'react';
import Footer1 from '../SVG/footer1';
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";

// You need to install font-awesome: npm install @fortawesome/fontawesome-free
const Footer = () => {
  return (
    <div className='relative'>
      <Footer1 />

      <div className="relative w-full bg-indigo-600/95 text-white">
        <div className="max-w-7xl mx-auto px-4 py-8 lg:flex lg:justify-between lg:items-center">
          {/* Left Side: About CauseConnect */}
          <div className="mb-6 lg:mb-0 mr-4">
            <h2 className="text-xl font-bold">About CauseConnect</h2>
            <p className="mt-2 text-sm ">
              CauseConnect is a platform that bridges the gap between donors and various causes in need. 
              We aim to empower communities by connecting them with donors who can make a lasting impact 
              on initiatives like education, environmental conservation, and health.
            </p>
          </div>

          {/* Social Media Icons */}
          
          {/* Contact Information */}
          <div className="text-center lg:text-left">
            <p className="text-lg font-bold">Contact us: info@causeconnect.com</p>
            <p className="text-lg">Phone: +123 456 7890</p>
          <div className="flex space-x-6 mb-6 mr-4 lg:mb-0">
            <a href="https://linkedin.com" target='_blank' className="text-white text-2xl" aria-label="LinkedIn">
              <i className="fab fa-linkedin"><CiLinkedin/></i>
            </a>
            <a href="https://facebook.com" target='_blank' className="text-white text-2xl" aria-label="Facebook">
              <i className="fab fa-facebook"><CiFacebook/></i>
            </a>
            <a href="https://twitter.com" target='_blank' className="text-white text-2xl" aria-label="Twitter">
              <i className="fab fa-twitter"><CiTwitter/></i>
            </a>
            <a href="https://instagram.com" target='_blank' className="text-white text-2xl" aria-label="Instagram">
              <i className="fab fa-instagram"><CiInstagram/></i>
            </a>
          </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="relative pt-6 pb-6 text-center border-t border-white/20">
          <p className="text-lg font-bold">© 2024 CauseConnect. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
