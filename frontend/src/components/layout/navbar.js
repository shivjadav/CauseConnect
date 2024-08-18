import { useState } from 'react';
import { Dialog, DialogPanel } from '@headlessui/react';
import { IoMenu } from "react-icons/io5";
import { FaX } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const navigation = [
  { name: 'Donate', href: '/donate' },
  { name: 'My donations', href: '/my-donations' },
  {name: 'Learn more', href:'/learn-more'},
  {name: 'Contact us', href:'/contact-us'}
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky min-w-screen w-full inset-x-0 top-0 z-50">
      <nav aria-label="Global" className="flex items-center justify-between shadow-sm px-8 py-4 backdrop-blur-lg bg-white/0 lg:px-8">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img
              alt=""
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              className="h-8 w-auto"
            />
          </a>
          <div className="text-2xl mx-2 text-indigo-600 font-bold">Cause Connect</div>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <IoMenu aria-hidden="true" className="text-dark h-6 w-6" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <div className="group relative" key={item.name}>
              <Link to={item.href} className=" font-semibold leading-6 text-gray-900">
                {item.name}
              </Link>
              <span className="absolute bottom-0 left-0 w-0 h-1 mt-2 bg-indigo-600 transition-all duration-300 ease-in-out group-hover:w-full"></span>
            </div>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link to="/login" className=" font-semibold leading-6 text-gray-900">
            Log in <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-50 bg-gray-800 bg-opacity-50 transition-opacity duration-300 ease-in-out" />
        <DialogPanel className={`fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 transition-transform transform ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} duration-300 ease-in-out`}>
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                alt=""
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                className="h-8 w-auto"
              />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <FaX aria-hidden="true" className="h-6 w-6 text-dark rotate-180 transition-transform duration-300 ease-in-out" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-indigo-50"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="group relative py-6">
                <Link to="/login" className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                  Log in
                </Link>
                <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 transition-all duration-300 ease-in-out group-hover:w-full'></span>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
};

export default Navbar;
