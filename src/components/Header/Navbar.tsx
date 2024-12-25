import React, { useState } from 'react';
import zortusLogo from '../../assets/Zortus.svg';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: 'Home', link: "/" },
    { name: 'Explore', link: '#' },
    { name: 'Demos', options: ['Option 1', 'Option 2'] },
    { name: 'Contact', link: '/contact' },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed w-full px-4 lg:px-16 py-4 flex items-center justify-between bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg shadow-lg z-50"
    >
      <div className="flex items-center">
        <motion.img
          whileHover={{ scale: 1.1 }}
          src={zortusLogo}
          alt="Zortus Logo"
          className="h-8 w-auto"
        />
      </div>
      <div className="hidden md:flex space-x-8 text-sm font-plusJakarta font-semibold text-gray-700">
        {menuItems.map((item, index) => (
          <div key={index} className="group relative">
            {item.options ? (
              <>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="hover:text-black transition-colors duration-200"
                >
                  {item.name}
                </motion.button>
                <div className="absolute left-0 hidden group-hover:block w-max mt-2 bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg shadow-lg rounded-md py-2">
                  {item.options.map((option, optionIndex) => (
                    <motion.a
                      key={optionIndex}
                      whileHover={{ backgroundColor: 'rgba(0, 0, 0, 0.1)' }}
                      href="#"
                      className="block px-4 py-2 text-sm hover:text-black transition-colors duration-200"
                    >
                      {option}
                    </motion.a>
                  ))}
                </div>
              </>
            ) : (
              <motion.a
                whileHover={{ scale: 1.05 }}
                href={item.link}
                className="hover:text-black transition-colors duration-200"
              >
                {item.name}
              </motion.a>
            )}
          </div>
        ))}
      </div>
      <div className="flex items-center space-x-4">
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="px-6 py-2 text-sm font-manrope font-bold bg-white bg-opacity-50 text-gray-900 border-2 border-black rounded-full hover:bg-opacity-70 transition-all duration-200"
        >
          Get started
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-black text-white"
        >
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
        </motion.button>
        <button
          className="md:hidden text-gray-700 hover:text-black"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute top-full left-0 right-0 bg-white bg-opacity-90 backdrop-filter backdrop-blur-lg shadow-lg py-4 px-4 md:hidden"
        >
          {menuItems.map((item, index) => (
            <div key={index} className="py-2">
              {item.options ? (
                <details className="group">
                  <summary className="list-none font-semibold cursor-pointer">
                    {item.name}
                  </summary>
                  <div className="mt-2 ml-4 space-y-2">
                    {item.options.map((option, optionIndex) => (
                      <a
                        key={optionIndex}
                        href="#"
                        className="block text-sm hover:text-black transition-colors duration-200"
                      >
                        {option}
                      </a>
                    ))}
                  </div>
                </details>
              ) : (
                <a
                  href={item.link}
                  className="block font-semibold hover:text-black transition-colors duration-200"
                >
                  {item.name}
                </a>
              )}
            </div>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;