import React from 'react';

const MenuButton = ({ onMenuBtnClick }) => {
    return (
        <div 
            className="menu-button"
            onClick={() => onMenuBtnClick()}
        >
            Menu
        </div>
    )
}

export default MenuButton;