import React from 'react';
import { Spring, config } from 'react-spring/renderprops';
import profile from '../../../images/profile-pic.jpg';

import './AboutDetails.css';

const AboutDetails = ({ onSectionClick }) => {
	return (
		<Spring
			from={{ opacity: 0, transform: 'translate3d(-50%,0,0)' }}
			to={{ opacity: 1, transform: 'translate3d(0%,0,0)' }}
			config={config.stiff}
		>
			{props => (
				<section
					style={props}
					className="about-details"
					onClick={() => onSectionClick('home')}
				>
					<img className="profile-pic" src={profile} />
					<p>
						Award winning composer, producer and performer from the Chicago,
						Illinois area. His music has been used all over the world by such
						companies as Fox Sports, CBS, A&E, State Farm and others.
					</p>
				</section>
			)}
		</Spring>
	);
};

export default AboutDetails;
