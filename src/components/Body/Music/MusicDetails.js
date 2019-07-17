import React from 'react';
import { Transition, animated } from 'react-spring/renderprops';
import MusicPlayer from './MusicPlayer';
import './MusicDetails.css';

class MusicDetails extends React.Component {
	render() {
		return (
			<section className="music-details">
				<MusicPlayer />
			</section>
		);
	}
}

export default MusicDetails;
