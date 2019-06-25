import React from 'react';

const Title = ({ siteTitle, onSectionClick }) => {
    return (
        <div onClick={() => onSectionClick('home')}>
            <h1>{siteTitle}</h1>
        </div>
    )
}

export default Title;