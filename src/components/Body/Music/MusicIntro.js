import React from 'react';
import {Spring, config} from 'react-spring/renderprops';

import './MusicIntro.css';

const MusicIntro = ({ onSectionClick }) => {
    return (
        <Spring
            from={{ opacity: 0, transform: 'translate3d(-100%,0,0)' }}
            to={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
            config={ config.stiff }
        >
            {props => (
                <div 
                    style={props}
                    className="music-intro" 
                    onClick={() => onSectionClick('music')}
                >
                    <div className="overlay"></div>
                    <h2>Music</h2>
                </div>
            )}
        </Spring>
    )
}

export default MusicIntro;