import React, { useState, useEffect } from 'react';
import image1 from './images/i1.png';
import image2 from './images/i2.png';
import image3 from './images/i3.png';

function PaginationPage() {
    const [currentPage, setCurrentPage] = useState(0);
    const images = [
        image3,
        image2,
        image1,
        // Add more image imports as needed
    ];

    useEffect(() => {
        // Automatically transition to the next image every 5 seconds
        const interval = setInterval(() => {
            setCurrentPage((prevPage) => (prevPage === images.length - 1 ? 0 : prevPage + 1));
        }, 5000);

        return () => {
            clearInterval(interval);
        };
    }, [images.length]);

    const changePage = (newPage) => {
        setCurrentPage(newPage);
    };

    return (
        <div className="pagination-page">
         
          
            <div className="image-container mx-auto">
                <img src={images[currentPage]} alt={`${currentPage + 1}`} />
            </div>
            <div className="flex justify-center items-center mt-4 ">
                {images.map((image, index) => (
                    <button
                        key={index}
                        className={`w-4 h-4 rounded-full ${currentPage === index ? 'bg-black' : 'bg-gray-400'} mx-2`}
                        onClick={() => changePage(index)}
                    >
                        {/* Placeholder */}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default PaginationPage;
