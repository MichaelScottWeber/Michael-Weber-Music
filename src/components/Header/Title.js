import React from 'react';

const Title = ({ siteTitle, onSectionClick }) => {
    return (
        <div 
            className="title"
            onClick={() => onSectionClick('home')}
        >
            <h1>{siteTitle}</h1>
        </div>
    )
}

export default Title;