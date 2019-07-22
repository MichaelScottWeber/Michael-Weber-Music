import React from 'react';
import { Spring, config } from 'react-spring/renderprops';
import ImageGallery from './ImageGallery';

import './CreditsDetails.css';

const CreditsDetails = ({ onSectionClick }) => {
	const creditsList = [
		{
			id: 1,
			credit: 'Intervention',
		},
		{
			id: 2,
			credit: 'NFL Football',
		},
		{
			id: 3,
			credit: 'Catfish: The TV Show',
		},
		{
			id: 4,
			credit: '2016 Summer Olympic Games',
		},
		{
			id: 5,
			credit: 'The Daily Show with Trevor Noah',
		},
		{
			id: 6,
			credit: 'I (almost) Got Away With It',
		},
		{
			id: 7,
			credit: 'NHL Hockey',
		},
		{
			id: 8,
			credit: 'Roadtrip Nation',
		},
	].map(item => {
		return (
			<li className="credit" key={item.id}>
				<div className="bullet" />
				{item.credit}
			</li>
		);
	});
	return (
		<Spring
			from={{ opacity: 0, transform: 'translate3d(100%,0,0)' }}
			to={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
			config={config.stiff}
		>
			{props => (
				<section
					style={props}
					className="credits-details"
					onClick={() => onSectionClick('home')}
				>
					<div className="credits-container">
						<div>
							<h3 className="credits-title">Credits include (partial list):</h3>
							<ul className="credits-list">{creditsList}</ul>
						</div>
						<ImageGallery className="gallery" />
					</div>
				</section>
			)}
		</Spring>
	);
};

export default CreditsDetails;
