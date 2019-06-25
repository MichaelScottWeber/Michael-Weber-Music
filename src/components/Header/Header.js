import React from 'react';

import Title from './Title';
import MenuButton from './MenuButton';

import './Header.css';

const Header = ({ onSectionClick, onMenuBtnClick }) => {
    return (
        <div className="header">
            <Title 
                siteTitle='Michael Weber Music'
                onSectionClick={onSectionClick}
            />
            <MenuButton 
                onMenuBtnClick={onMenuBtnClick}
            />
        </div>
    )
}

export default Header;