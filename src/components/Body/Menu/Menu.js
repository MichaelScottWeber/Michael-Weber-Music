import React from 'react';
import {Spring, config} from 'react-spring/renderprops';

import './Menu.css';

const Menu = ({ onSectionClick }) => {
    return (
        <Spring
            from={{ opacity: 0, marginTop: -100 }}
            to={{ opacity: 1, marginTop: 0 }}
            config={ config.stiff }
        >
            {props => (
                <div 
                    style={props}
                    className="menu"
                >
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
            )}
        </Spring>
    )
}

export default Menu;