import React from 'react';

import './MusicIntro.css';

const MusicIntro = ({ onSectionClick }) => {
    return (
        <div 
            className="music-intro" 
            onClick={() => onSectionClick('music')}
        >
            <h2>Music</h2>
        </div>
    )
}

export default MusicIntro;