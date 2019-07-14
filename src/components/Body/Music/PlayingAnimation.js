import React from 'react';
import {Spring} from 'react-spring/renderprops'
import './PlayingAnimation.css';

const PlayingAnimation = ({ selectedTrack, itemTitle }) => {
    return (
        <Spring
        from={{ opacity: 0 }}
            to={{ opacity: selectedTrack === itemTitle ? 1 : 0 }}
        >
            {props => (
                <div 
                    style={props}
                    className="playing-animation"
                >
                    <div className="waves wave1"></div>
                    <div className="waves wave2"></div>
                    <div className="waves wave3"></div>
                    <div className="waves wave4"></div>
                    <div className="waves wave5"></div>
                </div>
            )}
        </Spring>
    )
}

export default PlayingAnimation;