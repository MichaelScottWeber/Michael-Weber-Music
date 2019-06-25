import React from 'react';

import './AboutIntro.css';

const AboutIntro = ({ onSectionClick }) => {
    return (
        <div 
            className="about-intro" 
            onClick={() => onSectionClick('about')}
        >
            <h2>About</h2>
        </div>
    )
}

export default AboutIntro;