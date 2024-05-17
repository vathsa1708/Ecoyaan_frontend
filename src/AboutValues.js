import React from 'react';
import i9 from './images/i9.png'; 
import i10 from './images/i10.png'; 
import i11 from './images/i11.png'; 
import i12 from './images/i12.png'; 

const AboutValues = () => {
    return (
        <div className="container mx-auto py-16">
            {/* Main Heading */}
            <h2 className="text-4xl font-bold mb-8 text-center">Our Values</h2>

            {/* Values Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Trust */}
                <div className="bg-white rounded-lg flex overflow-hidden">
                    <div className="w-1/3">
                        <img src={i9} alt="Trust" className="object-cover w-full h-auto rounded-l-lg md:rounded-l-none md:rounded-t-lg transition-transform transform hover:scale-110" />
                    </div>
                    <div className="w-2/3 p-6">
                        <h3 className="text-2xl font-bold mb-4">Trust</h3>
                        <p className="text-gray-700 mb-4 text-xl">
                            We value the trust of our community. We strive to be transparent and honest in everything we do, from the content we share today to sourcing our products in the future.
                        </p>
                    </div>
                </div>

                {/* Authenticity */}
                <div className="bg-white rounded-lg flex overflow-hidden">
                    <div className="w-1/3">
                        <img src={i10} alt="Authenticity" className="object-cover w-full h-auto rounded-l-lg md:rounded-l-none md:rounded-t-lg transition-transform transform hover:scale-110" />
                    </div>
                    <div className="w-2/3 p-6">
                        <h3 className="text-2xl font-bold mb-4">Authenticity</h3>
                        <p className="text-gray-700 mb-4 text-xl">
                            We are genuine in our mission to promote sustainability and environmental awareness. An authentic community of eco-conscious people can inspire each other on the journey towards sustainability.
                        </p>
                    </div>
                </div>

                {/* Impact */}
                <div className="bg-white rounded-lg flex overflow-hidden">
                    <div className="w-1/3">
                        <img src={i11} alt="Impact" className="object-cover w-full h-auto rounded-l-lg md:rounded-l-none md:rounded-t-lg transition-transform transform hover:scale-110" />
                    </div>
                    <div className="w-2/3 p-6">
                        <h3 className="text-2xl font-bold mb-4">Impact</h3>
                        <p className="text-gray-700 mb-4 text-xl">
                            We measure our success by our impact on the planet and our community. We aim to empower our sellers and customers to make responsible choices that benefit their well-being and the well-being of others.
                        </p>
                    </div>
                </div>

                {/* Fun & Engaging */}
                <div className="bg-white rounded-lg flex overflow-hidden">
                    <div className="w-1/3">
                        <img src={i12} alt="Fun & Engaging" className="object-cover w-full h-auto rounded-l-lg md:rounded-l-none md:rounded-t-lg transition-transform transform hover:scale-110" />
                    </div>
                    <div className="w-2/3 p-6">
                        <h3 className="text-2xl font-bold mb-4">Fun & Engaging</h3>
                        <p className="text-gray-700 mb-4 text-xl">
                            Moving towards a sustainable lifestyle and the constant news around climate change can be stressful. We aim to inject fun and creativity into everything we do, from designing our products to providing services.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutValues;
