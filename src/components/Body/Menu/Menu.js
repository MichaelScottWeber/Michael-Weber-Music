import React from 'react';

const Menu = ({ onSectionClick }) => {
    return (
        <div>
            <ul>
                <li onClick={() => onSectionClick('home')}>Home</li>
                <li onClick={() => onSectionClick('about')}>About</li>
                <li onClick={() => onSectionClick('music')}>Music</li>
                <li onClick={() => onSectionClick('credits')}>Credits</li>
                <li onClick={() => onSectionClick('services')}>Services</li>
                <li onClick={() => onSectionClick('contact')}>Contact</li>
            </ul>
        </div>
    )
}

export default Menu;