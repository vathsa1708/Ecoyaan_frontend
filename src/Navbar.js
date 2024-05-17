import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-white shadow-md">
            <div className="container mx-auto px-6 py-6 md:pr-8 flex justify-between items-center">
                <div className="flex items-center">
                    {/* Mobile Menu Button */}
                    <button className="md:hidden text-gray-600 focus:outline-none" onClick={toggleMenu}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                    {/* Logo */}
                    <Link to="/" className="text-2xl md:text-4xl font-bold text-green-600 transform hover:scale-110 transition duration-300 cursor-pointer">
                        Ecoyaan
                    </Link>
                </div>
                {/* Desktop Menu */}
                <ul className="hidden md:flex items-center space-x-6">
                    <li>
                        <Link to="/home" className="text-lg md:text-xl font-bold text-gray-800 hover:text-gray-600">Home</Link>
                    </li>
                    <li>
                        <Link to="/about" className="text-lg md:text-xl font-bold text-gray-800 hover:text-gray-600">About Us</Link>
                    </li>
                    <li>
                        <a href="#sell" className="text-lg md:text-xl font-bold text-gray-800 hover:text-gray-600">Sell on Ecoyaan</a>
                    </li>
                    <li>
                        <a href="#careers" className="text-lg md:text-xl font-bold text-gray-800 hover:text-gray-600">Careers</a>
                    </li>
                </ul>
            </div>
            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white shadow-md fixed top-0 left-0 h-full w-56 z-50">
                    <ul className="flex flex-col items-start justify-start h-full">
                        <li className="py-4 px-6 text-lg md:text-xl font-bold hover:text-gray-800">
                            <Link to="/home" className="text-gray-800" onClick={toggleMenu}>Home</Link>
                        </li>
                        <li className="py-4 px-6 text-lg md:text-xl font-bold hover:text-gray-800">
                            <Link to="/about" className="text-gray-800" onClick={toggleMenu}>About Us</Link>
                        </li>
                        <li className="py-4 px-6 text-lg md:text-xl font-bold hover:text-gray-800">
                            <a href="#sell" className="text-gray-800" onClick={toggleMenu}>Sell on Ecoyaan</a>
                        </li>
                        <li className="py-4 px-6 text-lg md:text-xl font-bold hover:text-gray-800">
                            <a href="#careers" className="text-gray-800" onClick={toggleMenu}>Careers</a>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
}

export default Navbar;
