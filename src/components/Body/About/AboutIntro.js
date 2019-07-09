import React from 'react';
import {Spring, config} from 'react-spring/renderprops';

import './AboutIntro.css';

const AboutIntro = ({ onSectionClick }) => {
    return (
        <Spring
            from={{ opacity: 0, transform: 'translate3d(50%,0,0)' }}
            to={{ opacity: 1, transform: 'translate3d(0%,0,0)' }}
            config={ config.stiff }
        >
            {props => (
                <div 
                    style={props}
                    className="about-intro" 
                    onClick={() => onSectionClick('about')}
                >
                    <div className="overlay"></div>
                    <h2>About</h2>
                </div>
            )}
        </Spring>
    )
}

export default AboutIntro;