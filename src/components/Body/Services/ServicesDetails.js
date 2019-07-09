import React from 'react';
import {Spring, config} from 'react-spring/renderprops';

import './ServicesDetails.css';

const ServicesDetails = ({ onSectionClick }) => {
    return (
        <Spring
            from={{ opacity: 0, transform: 'translate3d(-100%,0,0)' }}
            to={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
            config={ config.stiff }
        >
            {props => (
                <section 
                    style={props}
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
                </section>
            )}
        </Spring>
    )
}

export default ServicesDetails;