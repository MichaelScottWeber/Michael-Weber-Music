import React from 'react';
import './MenuButton.css';

const MenuButton = ({ onMenuBtnClick, display }) => {
    return (
        <div 
            className={
                display === 'menu'
                ? "rotate menu-button"
                : "menu-button"
            }
            onClick={() => onMenuBtnClick()}
        >
            <svg xmlns="http://www.w3.org/2000/svg"   viewBox="0 0 24 24" fill="#d93jhr" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-menu"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
        </div>
    )
}

export default MenuButton;