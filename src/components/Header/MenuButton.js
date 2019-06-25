import React from 'react';

const MenuButton = ({ onMenuBtnClick }) => {
    return (
        <div onClick={() => onMenuBtnClick()}>
            Button
        </div>
    )
}

export default MenuButton;