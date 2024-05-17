import React from 'react';
import i4 from './images/i4.png';

const SustainabilitySection = () => {
    return (
        <div className="flex flex-col md:flex-row justify-center items-stretch mt-6 md:mt-6 flex-container">
            {/* Left side with text */}
            <div className="md:w-1/2 px-20 py-8  mt-2 md:mt-2 flex-col justify-center">
                <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-4 heading">
                    Join our community in creating a more sustainable future for everyone
                </h2>
                <p className="text-lg md:text-xl  mt-4 md:mt-6 text-gray-700 mb-4 md:mb-6 text-content">
                    At Ecoyaan, we are more than just a platform. Our vision is to build an eco-conscious community for people and products.
                </p>
                <p className="text-lg md:text-xl text-gray-700  mt-6 md:mt-6 mb-4 md:mb-6 text-content">
                    Consider us your partner for all things sustainable. To keep you motivated on the journey, we will provide you with engaging information about climate change, the latest updates on climate policies and lifestyle tips that you can adopt to reduce your impact on the environment.
                </p>
            </div>

            {/* Right side with image */}
            <div className="md:w-1/2 px-6 py-8 flex items-center justify-center">
                <img src={i4} alt="" className="max-w h-auto md:max-w-xl transform hover:scale-110 transition duration-300" />
            </div>
        </div>
    );
}

export default SustainabilitySection;
