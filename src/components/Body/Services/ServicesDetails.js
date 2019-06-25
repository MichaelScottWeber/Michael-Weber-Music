import React from 'react';

import './ServicesDetails.css';

const ServicesDetails = ({ onSectionClick }) => {
    return (
        <div 
            className="services-details" 
            onClick={() => onSectionClick('home')}
        >
            <div>
                <h3>Custom Scoring</h3>
                <p>I'll create original music to accompany your media</p>
            </div>
            <div>
                <h3>Music Licensing</h3>
                <p>License one of my existing pieces of music</p>
            </div>
            <div>
                <h3>Audio Mixing</h3>
                <p>Are you a band or musical artist?  Have me mix your recordings!</p>
            </div>
        </div>
    )
}

export default ServicesDetails;