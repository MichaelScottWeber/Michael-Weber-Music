import React from 'react';
import {Spring, config} from 'react-spring/renderprops';
import Logo from './Logo';
import Title from './Title';
import MenuButton from './MenuButton';

import './Header.css';

const Header = ({ onSectionClick, onMenuBtnClick, display }) => {
    return (
        <Spring
            from={{ opacity: 0, transform: 'translate3d(0,-50%,0)' }}
            to={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
            config={ config.stiff }
        >
            {props => (
                <header 
                    style={props}
                    className="header"
                >
                    <Logo 
                        onSectionClick={onSectionClick}
                    />
                    <Title 
                        siteTitle='Michael Weber Music'
                        onSectionClick={onSectionClick}
                    />
                    <MenuButton 
                        display={display}
                        onMenuBtnClick={onMenuBtnClick}
                    />
                </header>           
            )}
        </Spring>
    )
}

export default Header;