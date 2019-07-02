import React from 'react';
import './PlayingAnimation.css';

const PlayingAnimation = ({ selectedTrack, itemTitle }) => {
    if (selectedTrack === itemTitle) {
        return (
            <div className="playing-animation">
                <div className="waves wave1"></div>
                <div className="waves wave2"></div>
                <div className="waves wave3"></div>
                <div className="waves wave4"></div>
                <div className="waves wave5"></div>
            </div>
        )
    } else {
        return <div></div>
    }
}

export default PlayingAnimation;