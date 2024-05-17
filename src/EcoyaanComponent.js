import React from 'react';
import { FaArrowUp, FaInstagram, FaLinkedin, FaFacebook } from 'react-icons/fa';

const EcoyaanComponent = () => {
    // Function to handle smooth scroll to the top
    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <div>
            {/* Back to Top Button at the top of the component */}
            <div className="bg-gray-200 flex justify-center items-center">
                <button 
                    onClick={handleScrollToTop} 
                    className="bg-transparent text-black px-4 py-2 rounded-md hover:bg-transparent focus:outline-none flex items-center"
                >
                    <FaArrowUp className="mr-2" />
                    <p className="text-2xl">Back to Top</p>
                </button>
            </div>

            {/* Main Section */}
            <div className="bg-gray-200 py-16">
                <div className="container mx-auto flex flex-wrap justify-between">
                    {/* Company Section */}
                    <div className="w-full md:w-auto md:flex-grow md:mr-4 mb-6 md:mb-0">
                        <h3 className="text-2xl font-bold mb-4">Company</h3>
                        <ul className="space-y-2">
                            <li>
                                <button className="text-gray-600 hover:text-gray-900 focus:outline-none">
                                    About Us
                                </button>
                            </li>
                            <li>
                                <button className="text-gray-600 hover:text-gray-900 focus:outline-none">
                                    Sell on Ecoyaan
                                </button>
                            </li>
                            <li>
                                <button className="text-gray-600 hover:text-gray-900 focus:outline-none">
                                    Careers
                                </button>
                            </li>
                        </ul>
                    </div>

                    {/* Links Section */}
                    <div className="w-full md:w-auto md:flex-grow md:mr-4 mb-6 md:mb-0">
                        <h3 className="text-2xl font-bold mb-4">Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <button className="text-gray-600 hover:text-gray-900 focus:outline-none">
                                    Privacy Policy
                                </button>
                            </li>
                            <li>
                                <button className="text-gray-600 hover:text-gray-900 focus:outline-none">
                                    Terms of Use
                                </button>
                            </li>
                        </ul>
                    </div>

                    {/* Follow Us Section */}
                    <div className="w-full md:w-auto md:flex-grow md:mr-4 mb-6 md:mb-0">
                        <h3 className="text-2xl font-bold mb-4">Follow Us</h3>
                        <div className="flex items-center space-x-4">
                            <a href="https://www.instagram.com/ecoyaan/" target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-900 focus:outline-none">
                                <FaInstagram className="text-3xl transition-transform transform hover:scale-110" />
                            </a>
                            <a href="https://www.linkedin.com/company/ecoyaan/" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900 focus:outline-none">
                                <FaLinkedin className="text-3xl transition-transform transform hover:scale-110" />
                            </a>
                            <a href="https://www.facebook.com/Ecoyaan/" target="_blank" rel="noopener noreferrer" className="text-blue-800 hover:text-blue-900 focus:outline-none">
                                <FaFacebook className="text-3xl transition-transform transform hover:scale-110" />
                            </a>
                        </div>
                    </div>

                    {/* Subscribe Section */}
                    <div className="w-full md:w-auto md:flex-grow bg-gray-200 py-2 px-4 mt-6 md:mt-0">
                        <h2 className="text-xl text-gray-900 mb-2">Subscribe to receive updates on blogs, future launches and more!</h2>
                        <input 
                            type="email" 
                            className="bg-white border-gray-300 rounded-md p-2 w-full md:w-3/4 focus:outline-none focus:border-gray-500" 
                            placeholder="Your Email Address" 
                        />
                        <button 
                            type="submit" 
                            className="bg-green-500 text-white px-3 py-3 rounded-md mt-2 w-full md:w-3/4 hover:bg-green-600 focus:outline-none focus:bg-green-600"
                        >
                            Subscribe
                        </button>
                    </div>

                    {/* Horizontal Line */}
                    <hr className="w-full border-gray-400 my-6" />
                </div>
            </div>

            {/* Registered Address Section */}
            <div className="bg-gray-200 py-16">
                <div className="container mx-auto flex flex-wrap justify-between">
                    {/* Company Section */}
                    <div className="w-full md:w-auto md:flex-grow md:mr-4 mb-10 md:mb-0">
                        <h3 className="text-2xl font-bold mb-4">Registered Address:</h3>
                        <ul className="space-y-2">
                            <li>
                                <button className="text-gray-600 hover:text-gray-900 focus:outline-none">
                                    1-N-12T-781/1
                                </button>
                            </li>
                            <li>
                                <button className="text-gray-600 hover:text-gray-900 focus:outline-none">
                                    Sri Krishna Vilasa,
                                </button>
                            </li>
                            <li>
                                <button className="text-gray-600 hover:text-gray-900 focus:outline-none">
                                    Urvastores,
                                </button>
                            </li>
                            <li>
                                <button className="text-gray-600 hover:text-gray-900 focus:outline-none">
                                    Ashoknagar(MR),
                                </button>
                            </li>
                            <li>
                                <button className="text-gray-600 hover:text-gray-900 focus:outline-none">
                                    Mangalore,
                                </button>
                            </li>
                            <li>
                                <button className="text-gray-600 hover:text-gray-900 focus:outline-none">
                                    Dakshina Kannada- 575006,
                                </button>
                            </li>
                            <li>
                                <button className="text-gray-600 hover:text-gray-900 focus:outline-none">
                                    Karnataka, India
                                </button>
                            </li>
                        </ul>
                    </div>

                    {/* Legal Business Name Section */}
                    <div className="w-full md:w-auto md:flex-grow md:mr-4 mb-10 md:mb-0">
                        <h3 className="text-2xl font-bold mb-4">Legal Business Name:</h3>
                        <ul className="space-y-2">
                            <li>
                                <button className="text-gray-600 hover:text-gray-900 focus:outline-none">
                                    Kindkarma
                                    E-Retail Private Limited
                                </button>
                            </li>
                            <li>
                                <button className="text-gray-600 hover:text-gray-900 focus:outline-none">
                                    CIN: U47912KA2023PTC182592
                                </button>
                            </li>
                            <li>
                                <button className="text-gray-600 hover:text-gray-900 focus:outline-none">
                                    Telephone: +91 9980490777
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EcoyaanComponent;
