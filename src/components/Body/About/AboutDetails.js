import React from 'react';
import { Spring, config } from 'react-spring/renderprops';

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
					<p>
						Michael Weber is an award winning composer, producer, performer and
						teacher from the Chicago, Illinois area. Specializing in writing and
						producing music for media, his work has been used all over the world
						by such companies as Fox Sports, CBS, A&E, MTV, State Farm and
						others.
					</p>
					<p>
						Although most adept at drums and guitar, Michael uses a wide variety
						of instruments in his recordings, such as ukuleles, hand percussion,
						keybords, banjos, accordions, glockenspiels, marimbas and more. He
						also uses a myriad of digital instruments in the computer to create
						larger-than-life orchestras and other-worldly synthesizers.
					</p>
					<p>
						In addition to music production, Michael occasionally performs in
						live bands. He currently plays guitar and sings alongside his wife
						in the indie rock band Native Language, which released their first
						full length album in 2017. Before that he played drums in the punk
						band Oh Me Oh My, and he played drums/percussion/accordion and sang
						backup in the folk band The Lulabelles, which was a Grand Prize
						winner in the 2015 John Lennon Songwriting Contest for their song
						"Between The Cracks".
					</p>
					<p>
						A graduate of Ball State University, Michael currently lives just
						outside of Chicago, IL with his wife Jenni and cat Lucy.
					</p>
				</section>
			)}
		</Spring>
	);
};

export default AboutDetails;
