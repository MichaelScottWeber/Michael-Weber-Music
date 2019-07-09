import React from 'react';
import {Spring, config} from 'react-spring/renderprops';
import ImageGallery from './ImageGallery';

import './CreditsDetails.css';

const CreditsDetails = ({ onSectionClick }) => {
    return (
        <Spring
            from={{ opacity: 0, transform: 'translate3d(100%,0,0)' }}
            to={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
            config={ config.stiff }
        >
            {props => (
                <section 
                    style={props}
                    className="credits-details" 
                    onClick={() => onSectionClick('home')}
                >
                    <div>
                        <h3>Credits include (partial list):</h3>
                        <ul className="credits-list">
                            <li>Intervention</li>
                            <li>NFL Football</li>
                            <li>Catfish: The TV Show</li>
                            <li>2016 Summer Olympic Games</li>
                            <li>The Daily Show with Trevor Noah</li>
                            <li>I (almost) Got Away With It</li>
                            <li>NHL Hockey</li>
                            <li>Roadtrip Nation</li>
                        </ul>
                    </div>
                    <ImageGallery />
                </section>
            )}
        </Spring>
    )
}

export default CreditsDetails;