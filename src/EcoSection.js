import React from 'react';
import i5 from './images/i5.png';

const EcoSection = () => {
    return (
        <div className="flex flex-col md:flex-row justify-center items-stretch mt-6 md:mt-6 flex-container">
            {/* Left side with text */}
            <div className="md:w-1/2 px-20 py-8  mt-2 md:mt-2 flex-col justify-center">
                <h2 className="text-4xl md:text-4xl font-bold mb-4 md:mb-4 heading">
                Carefully curated Eco-friendly products
                </h2>
                <p className="text-lg md:text-xl  mt-4 md:mt-6 text-gray-700 mb-4 md:mb-6 text-content">
                We believe that every purchase you make can have a positive impact on the planet and the future.
                </p>
                <p className="text-lg md:text-xl text-gray-700  mt-6 md:mt-6 mb-4 md:mb-6 text-content">
                Soon, we will be connecting you with eco-friendly and sustainable products that are carefully selected based on their environmental and social benefits.
                </p>
            </div>

            {/* Right side with image */}
            <div className="md:w-1/2 px-6 py-8 flex items-center justify-center">
                <img src={i5} alt="" className="max-w-full h-auto md:max-w-md hover:scale-105 transition-transform duration-300 ease-in-out" />
            </div>
        </div>
    );
}

export default EcoSection;
