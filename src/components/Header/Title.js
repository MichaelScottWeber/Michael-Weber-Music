import React from 'react';
import './Title.css';

const Title = ({ siteTitle, onSectionClick }) => {
    return (
        <h1
            className="title"
            onClick={() => onSectionClick('home')}
        >
            {siteTitle}
        </h1>
    )
}

export default Title;