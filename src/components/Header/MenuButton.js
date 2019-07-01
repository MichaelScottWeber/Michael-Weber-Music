import React from 'react';

const MenuButton = ({ onMenuBtnClick }) => {
    return (
        <div 
            className="menu-button"
            onClick={() => onMenuBtnClick()}
        >
            Button
        </div>
    )
}

export default MenuButton;