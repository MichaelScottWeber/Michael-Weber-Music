import React from 'react';
import {Spring, config} from 'react-spring/renderprops';
import Title from './Title';
import MenuButton from './MenuButton';

import './Header.css';

const Header = ({ onSectionClick, onMenuBtnClick }) => {
    return (
        <Spring
            from={{ opacity: 0, transform: 'translate3d(0,-50%,0)' }}
            to={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
            config={ config.stiff }
        >
            {props => (
                <div 
                    style={props}
                    className="header"
                >
                    <Title 
                        siteTitle='Michael Weber Music'
                        onSectionClick={onSectionClick}
                    />
                    <MenuButton 
                        onMenuBtnClick={onMenuBtnClick}
                    />
                </div>           
            )}
        </Spring>
    )
}

export default Header;