import React from 'react';

import './CreditsDetails.css';

const CreditsDetails = ({ onSectionClick }) => {
    return (
        <div 
            className="credits-details" 
            onClick={() => onSectionClick('home')}
        >
            <p>Credits include (partial list):</p>
            <ul>
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
    )
}

export default CreditsDetails;