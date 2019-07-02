import React from 'react';
import './Menu.css';

const Menu = ({ onSectionClick }) => {
    return (
        <div className="menu">
            <ul className="menu-list">
                <li 
                    className="menu-item"
                    onClick={() => onSectionClick('home')}
                >
                    Home
                </li>
                <li 
                    className="menu-item"
                    onClick={() => onSectionClick('about')}
                >
                    About
                </li>
                <li 
                    className="menu-item"
                    onClick={() => onSectionClick('music')}
                >
                    Music
                </li>
                <li 
                    className="menu-item"
                    onClick={() => onSectionClick('credits')}
                >
                    Credits
                </li>
                <li 
                    className="menu-item"
                    onClick={() => onSectionClick('services')}
                >
                    Services
                </li>
                <li 
                    className="menu-item"
                    onClick={() => onSectionClick('contact')}
                >
                    Contact
                </li>
            </ul>
        </div>
    )
}

export default Menu;