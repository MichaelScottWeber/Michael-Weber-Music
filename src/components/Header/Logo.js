import React from 'react';
import crow from '../../images/crow.png';
import './Logo.css';

const Logo = ({ onSectionClick }) => {
	return (
		<img className="logo" onClick={onSectionClick} src={crow} alt="logo" />
	);
};

export default Logo;
