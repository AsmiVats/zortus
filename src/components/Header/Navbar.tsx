import React from 'react';
import zortusLogo from '../../assets/Zortus.svg';



const Navbar: React.FC = () => {
  return (
    <nav className="w-full px-8 lg:px-16 py-4 flex items-center justify-between bg-white shadow-md">
      <div className="flex items-center">
      <img src={zortusLogo} alt="Zortus Logo" className="h-8 w-auto" />
      </div>
      <div className="hidden md:flex space-x-8 text-sm font-plusJakarta font-semibold text-gray-700">
        <div className="group relative">
          <button className="hover:text-black">Service</button>

          <div className="absolute left-0 hidden group-hover:block w-max mt-2 bg-white shadow-lg rounded-md py-2">
            <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100">
              Option 1
            </a>
            <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100">
              Option 2
            </a>
          </div>
        </div>
        <a href="#" className="hover:text-black">Explore</a>
        <div className="group relative">
          <button className="hover:text-black">Demos</button>

          <div className="absolute left-0 hidden group-hover:block w-max mt-2 bg-white shadow-lg rounded-md py-2">
            <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100">
              Option 1
            </a>
            <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100">
              Option 2
            </a>
          </div>
        </div>
        <a href="/contact" className="hover:text-black">Contact</a>
      </div>
      <div className="flex items-center space-x-4">
        <button className="px-8 py-4 text-sm font-manrope font-bold bg-white text-gray-900 border-2 border-black rounded-full hover:bg-gray-100">
          Get started
        </button>
        <button className="w-10 h-10 flex items-center justify-center rounded-full bg-black text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V4a2 2 0 10-4 0v1.341C7.67 7.165 6 9.388 6 12v2.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
