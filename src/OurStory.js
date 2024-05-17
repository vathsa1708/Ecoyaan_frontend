import React from 'react';
import i13 from './images/i13.png';
import i14 from './images/i14.png';

const OurStory = () => {
    return (
        <div className="bg-blue-50">
            <div className="container mx-auto py-16">
                {/* Main Heading */}
                <h2 className="text-4xl font-bold mb-8">Our Story</h2>

                {/* Content */}
                <div className="flex flex-col md:flex-row items-start justify-between">
                    {/* Images */}
                    <div className="w-1/5 md:pr-8">
                        <img src={i13} alt="Founder 1" className="object-cover w-1/2 h-auto rounded-lg px-2 mb-4 max-h-full transition-transform transform hover:scale-110 hover:-translate" />
                        <img src={i14} alt="Founder 2" className="object-cover w-1/2 h-auto rounded-lg px-2 max-h-full transition-transform transform hover:scale-110 hover:-translate" />
                    </div>

                    {/* Text */}
                    <div className="w-4/5 md:pl-8 text-xl">
                        <p className="text-gray-700 mb-8">
                            We started Ecoyaan after watching an episode of “Our Planet II”, where we saw the devastating impact of plastic pollution and climate change on the albatross birds. That moment ignited our mission.
                        </p>
                        <p className="text-gray-700 mb-4">
                            Our research suggests that many Indians understand global warming, yet access to sustainable practices and products remains limited. We also noticed that there is a lack of support for eco-friendly businesses.
                        </p>
                        <p className="text-gray-700 mb-4">
                            We created Ecoyaan to connect consumers, businesses, and sustainability experts. We want to make it easy and convenient for people to access eco-friendly products and services, learn and share best practices, and support sustainability initiatives.
                        </p>
                        <p className="text-gray-700 mb-4">
                            As founders, we are not perfect, but we are passionate. We believe that every small step matters. Join us and be a part of the Ecoyaan community — together, we’ll make a difference.
                        </p>
                        {/* Founders LinkedIn */}
                        <div className="text-gray-700 mt-8">
                            <p>Connect with the founders on LinkedIn here: 
                                <a href="https://www.linkedin.com/in/abhishek-rao" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer"> Abhishek Rao</a>
                                <span> | </span>
                                <a href="https://www.linkedin.com/in/sarwan-singh" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">Sarwan Singh</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OurStory;
