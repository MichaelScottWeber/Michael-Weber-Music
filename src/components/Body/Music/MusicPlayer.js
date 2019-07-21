import React from 'react';
import { Spring, config } from 'react-spring/renderprops';
import PlayingAnimation from './PlayingAnimation';
import Colours from '../../../audio/Colours-Run-Together.mp3';
import Dreams from '../../../audio/Dreams-For-Tomorrow.mp3';
import LetsGo from "../../../audio/Let's-Go.mp3";
import Mountain from '../../../audio/Mountain-Shade.mp3';
import Rev from '../../../audio/Rev-Me-Up.mp3';
import Finer from '../../../audio/The-Finer-Things.mp3';
import Gates from '../../../audio/The-Gates-of-Agartha.mp3';
import './MusicPlayer.css';

class MusicPlayer extends React.Component {
	state = {
		selectedTrack: null,
		// playerStatus: 'stopped',
	};

	componentDidUpdate(prevProps, prevState) {
		if (this.state.selectedTrack !== prevState.selectedTrack) {
			let track;
			switch (this.state.selectedTrack) {
				case 'Colours Run Together':
					track = Colours;
					break;
				case "Let's Go":
					track = LetsGo;
					break;
				case 'Dreams For Tomorrow':
					track = Dreams;
					break;
				case 'The Gates of Agartha':
					track = Gates;
					break;
				case 'Mountain Shade':
					track = Mountain;
					break;
				case 'Rev Me Up':
					track = Rev;
					break;
				case 'The Finer Things':
					track = Finer;
					break;
				default:
					break;
			}
			if (track) {
				this.player.src = track;
				this.player.play();
				// this.setState({ playerStatus: 'playing' });
			}
		}
	}

	render() {
		const songList = [
			{
				id: 1,
				title: 'Colours Run Together',
				genre: 'cinemtaic folk',
			},
			{
				id: 2,
				title: "Let's Go",
				genre: 'pop rock',
			},
			{
				id: 3,
				title: 'The Gates of Agartha',
				genre: 'hybrid orchestral',
			},
			{
				id: 4,
				title: 'Dreams For Tomorrow',
				genre: 'post rock',
			},
			{
				id: 5,
				title: 'Mountain Shade',
				genre: 'indie folk',
			},
			{
				id: 6,
				title: 'Rev Me Up',
				genre: 'garage rock',
			},
			{
				id: 7,
				title: 'The Finer Things',
				genre: 'quirky orchestral',
			},
		].map(item => {
			return (
				<li
					onClick={() => this.setState({ selectedTrack: item.title })}
					key={item.id}
					className={
						item.title === this.state.selectedTrack
							? 'song-item selected'
							: 'song-item not-selected'
					}
				>
					<div className="song-text">
						<p className="song-title">{item.title}</p>
						<p className="song-genre">{item.genre}</p>
					</div>
					<div
						className={
							item.title === this.state.selectedTrack
								? 'line-visible'
								: 'line-hidden'
						}
					/>
					<PlayingAnimation
						selectedTrack={this.state.selectedTrack}
						itemTitle={item.title}
					/>
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
					<div style={props} className="music-player">
						<h3 className="music-player-title">
							Click on a song title to listen
						</h3>
						<ul className="song-group">{songList}</ul>
						<audio ref={ref => (this.player = ref)} />
					</div>
				)}
			</Spring>
		);
	}
}

export default MusicPlayer;
