import React from 'react';

import './ContactIntro.css';

const ContactIntro = ({ onSectionClick }) => {
    return (
        <div 
            className="contact-intro" 
            onClick={() => onSectionClick('contact')}
        >
            <h2>Contact</h2>
        </div>
    )
}

export default ContactIntro;