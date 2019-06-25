import React from 'react';

import './AboutDetails.css';

const AboutDetails = ({ onSectionClick }) => {
    return (
        <div 
            className="about-details" 
            onClick={() => onSectionClick('home')}
        >
            <p>
                Award winning composer, producer and performer from the Chicago, Illinois area. His music has been used all over the world by such companies as Fox Sports, CBS, A&E, State Farm and others.
            </p>
        </div>
    )
}

export default AboutDetails;