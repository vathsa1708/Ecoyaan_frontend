import React from 'react';
import i8 from './images/i8.png';

const AboutEcoyaan = () => {
    return (
        <div className="flex flex-col md:flex-row justify-center items-center md:items-start bg-blue-50 px-8 py-8 md:py-16">
            {/* Text Container */}
            <div className="w-full md:w-1/2 px-4 md:px-8 py-8 md:py-16">
                <h2 className="text-4xl font-bold mb-6">About Ecoyaan</h2>
                <p className="text-gray-700 mb-6 text-xl md:text-xl">
                    At Ecoyaan, we are more than just a platform. Our goal is to build a community of eco-conscious people who share a common vision and passion for a more sustainable world.
                    We recognize that sustainability is a journey (as the Sanskrit word “yaan” suggests). To keep you motivated on this journey, on our platform and our social media pages, you can find:
                </p>
                <ul className="list-disc pl-8 mb-6 text-lg md:text-xl">
                    <li>Tips and tricks to adopt a more eco-friendly and low-waste lifestyle</li>
                    <li>Videos, posts, and quizzes on climate change and sustainability</li>
                    <li>Events and pledges that invite you to adopt a more sustainable lifestyle</li>
                </ul>
            </div>

            {/* Image Container */}
            <div className="w-full md:w-1/2 flex justify-center items-center px-4 md:px-8 py-8 md:py-16">
                <img src={i8} alt="Ecoyaan" className="max-w-full max-h-full md:max-w-lg md:max-h-lg" />
            </div>
        </div>
    );
}

export default AboutEcoyaan;
