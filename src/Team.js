import React from 'react';

// Import images
import i15 from './images/i15.png';
import i16 from './images/i16.png';
import i17 from './images/i17.png';
import i18 from './images/i18.png';
import i19 from './images/i19.png';
import i20 from './images/i20.png';


const TeamMember = ({ name, role, description, link, image }) => {
    return (
        <div className="bg-white rounded-lg p-6 mb-6 md:w-full lg:w-full flex flex-col items-center text-center">
            <img src={image} alt={name} className="w-32 h-32 rounded-full mb-4 transition-transform transform hover:scale-110 hover:-translate" />
            <h3 className="text-xl font-bold mb-2">{name}</h3>
            <p className="text-gray-700 mb-2">{role}</p>
            <p className="text-gray-700 mb-4">{description}</p>
            <a href={link} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">Check out their business</a>
        </div>
    );
}

const Team = () => {
    return (
        <div className="container mx-auto py-16">
            <h2 className="text-4xl font-bold mb-8 text-center">Meet the Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* First Row */}
                <TeamMember
                    name="Shruthi"
                    role="SOCIAL MEDIA"
                    description="Shruthi is in charge of our Instagram. She is a practicing Vegan and cares deeply about sustainability."
                    link="about-us-social-media-team"
                    image={i15}
                />
                <TeamMember
                    name="Urmil"
                    role="SOCIAL MEDIA"
                    description="Urmil creates engaging content for us. She runs her own sustainable apparel store with her sister and advocates for slow fashion."
                    link="about-us-social-media-team"
                    image={i16}
                />
                <TeamMember
                    name="Divya"
                    role="UX DESIGN"
                    description="Divya creates user-friendly and engaging interfaces for our platform."
                    link="about-us-product-team"
                    image={i17}
                />
                {/* Second Row */}
                <TeamMember
                    name="Prashanith"
                    role="ENGINEERING"
                    description="Prashanith is our front-end engineer, who brings the UX designs to life."
                    link="about-us-product-team"
                    image={i18}
                />
                <TeamMember
                    name="Sai Abhilash"
                    role="ENGINEERING"
                    description="Sai Abhilash is our back-end engineer, who manages and optimizes the infrastructure and logic of our platform."
                    link="about-us-product-team"
                    image={i19}
                />
                <TeamMember
                    name="???"
                    role="TEAM ECOYAAN"
                    description="This spot awaits you.
                    Check out our open positions"
                    link="about-us-social-media-team"
                    image={i20}
                />
            </div>
        </div>
    );
}

export default Team;
