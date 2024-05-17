import React from 'react';
import Navbar from './Navbar';
import PaginationPage from './PaginationPage';
import SustainabilitySection from './SustainabilitySection';
import EcoSection from './EcoSection';
import BuSection from './BuSection';
import EcoyaanComponent from './EcoyaanComponent';

const Home = () => {
    return (
        <div>
            <Navbar />
            <PaginationPage />
            <SustainabilitySection />
            <EcoSection />
            <BuSection />
            <EcoyaanComponent />
            {/* Add any other content for the Home page */}
        </div>
    );
}

export default Home;
