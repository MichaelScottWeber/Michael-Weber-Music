import React from 'react';
import AandE from '../../../images/a&e.jpg';
import FOX from '../../../images/fox-sports.jpg';
import NBC from '../../../images/nbc.jpg';
import MTV from '../../../images/mtv.jpg';
import Comedy from '../../../images/comedy-central.jpg';
import PBS from '../../../images/pbs.jpg';
import ID from '../../../images/id.jpg';
import './ImageGallery.css';

const imageList = [AandE, FOX, NBC, MTV, Comedy, PBS, ID];

class ImageGallery extends React.Component {
	state = { image: 0 };

	imageCycle = () => {
		if (this.state.image < imageList.length - 1) {
			this.setState({ image: this.state.image + 1 });
		} else {
			this.setState({ image: 0 });
		}
		console.log(this.state.image);
	};

	componentDidMount() {
		this.timer = setInterval(() => this.imageCycle(), 3000);
	}

	componentWillUnmount() {
		clearInterval(this.timer);
	}

	render() {
		return (
			<div className="image-gallery">
				<img
					className="credits-image"
					src={imageList[this.state.image]}
					alt="credits"
				/>
			</div>
		);
	}
}

export default ImageGallery;
