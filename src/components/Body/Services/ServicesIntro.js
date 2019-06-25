import React from 'react';

import './ServicesIntro.css';

const ServicesIntro = ({ onSectionClick }) => {
    return (
        <div className="services-intro" onClick={() => onSectionClick('services')}>
            <h2>Services</h2>
        </div>
    )
}

export default ServicesIntro;