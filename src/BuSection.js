import React from 'react';
import i6 from './images/i6.png';

const BuSection = () => {
    return (
        <div className="flex flex-col md:flex-row justify-center items-stretch mt-6 md:mt-6 flex-container">
            {/* Left side with text */}
          
            <div className="md:w-1/2 px-20 py-8  mt-2 md:mt-2 flex-col justify-center">
                <h2 className="text-4xl md:text-4xl font-bold mb-4 md:mb-4 heading">
                For businesses that care deeply about sustainability
                </h2>
                <p className="text-lg md:text-xl  mt-4 md:mt-6 text-gray-700 mb-4 md:mb-6 text-content">
                Do you run a business that is committed to sustainability in every aspect of your work?
                </p>
                <p className="text-lg md:text-xl text-gray-700  mt-6 md:mt-6 mb-4 md:mb-6 text-content">
                Do you want to showcase your products to an incredible audience of eco-conscious consumers who care?
                </p>
                <p className="text-lg md:text-xl text-gray-700  mt-6 md:mt-6 mb-4 md:mb-6 text-content">
                If yes, then you are the perfect fit for our platform. Our community appreciates and supports businesses that are transparent, ethical, and innovative in their approach to sustainability. Contact us today:
                </p>
                <div>
            <button className="bg-green-500 hover:bg-green-600 text-md md:text-xl text-white font-bold py-3 px-6 rounded focus:outline-none focus:shadow-outline">
                    Contact Us
                </button>
            </div>
            </div>

            {/* Right side with image */}
            <div className="md:w-1/2 px-6 py-8 flex items-center justify-center">
                <img src={i6} alt="" className="max-w-full h-auto md:max-w-md hover:scale-105 transition-transform duration-300 ease-in-out" />
            </div>
            
           
        </div>
    );
}

export default BuSection;
