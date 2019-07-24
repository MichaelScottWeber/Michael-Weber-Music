import React from 'react';
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
