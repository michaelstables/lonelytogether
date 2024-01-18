import React from 'react';
import bannerImage from '../assets/banner.jpg'; // Ensure the path to the image is correct

const Banner = () => {
    return (
        <div>
            <img src={bannerImage} alt="Banner" style={{ maxHeight: '250px', width: '100%', padding: 0, margin: 0 }} />
        </div>
    );
};

export default Banner;
