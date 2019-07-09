import React from 'react';
import crow from '../../images/crow.png';
import './Title.css';

const Title = ({ siteTitle, onSectionClick }) => {
    return (
        <header 
            className="title"
            onClick={() => onSectionClick('home')}
        >
            <img className="logo" src={crow} />
            <h1>{siteTitle}</h1>
        </header>
    )
}

export default Title;