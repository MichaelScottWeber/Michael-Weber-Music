import React from 'react';

import './CreditsIntro.css';

const CreditsIntro = ({ onSectionClick }) => {
    return (
        <div 
            className="credits-intro" 
            onClick={() => onSectionClick('credits')}
        >
            <h2>Credits</h2>
        </div>
    )
}

export default CreditsIntro;