import React from 'react';
import AboutEcoyaan from './AboutEcoyaan'; // Import the AboutEcoyaan component
import Navbar from './Navbar';
import AboutValues from './AboutValues';
import OurStory from './OurStory';
import Team from './Team';
import './styles.css';
import EcoyaanComponent from './EcoyaanComponent';
const About = () => {
    return (
        <div>
            <Navbar/>
            <AboutEcoyaan /> 
            <AboutValues/>
           <OurStory/>
           <Team/>
           <EcoyaanComponent/>
        </div>
    );
}

export default About;
