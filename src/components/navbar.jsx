import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../images/mtl-logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-20 ">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="/" className="flex items-center text-2xl font-bold uppercase">
                City Innovators
              </a>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block ml-10">
              <div className="flex items-baseline space-x-4">
                <a href="/" className="hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md">
                  Home
                </a>
                <a href="/about" className="hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md">
                  About
                </a>
                <a href="/services" className="hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md">
                  Services
                </a>
                <a href="/contact" className="hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md">
                  Contact
                </a>
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="-mr-2 flex md:hidden">
            <button 
              onClick={toggleMenu}
              type="button" 
              className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="/" className="hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md">
              Home
            </a>
            <a href="/about" className="hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md">
              About
            </a>
            <a href="/services" className="hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md">
              Services
            </a>
            <a href="/contact" className="hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md">
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;