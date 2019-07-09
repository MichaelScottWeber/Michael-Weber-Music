import React from 'react';
import {Spring, config} from 'react-spring/renderprops';

import './ContactIntro.css';

const ContactIntro = ({ onSectionClick }) => {
    return (
        <Spring
            from={{ opacity: 0, transform: 'translate3d(0,-50%,0)' }}
            to={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
            config={ config.stiff }
        >
            {props => (
                <div 
                    style={props}
                    className="contact-intro" 
                    onClick={() => onSectionClick('contact')}
                >
                    <div className="overlay"></div>
                    <h2>Contact</h2>
                </div>
            )}
        </Spring>
    )
}

export default ContactIntro;