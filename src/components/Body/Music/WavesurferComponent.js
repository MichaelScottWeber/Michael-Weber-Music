/* eslint-disable */
require ('wavesurfer.js');

import React from 'react';
import Wavesurfer from 'react-wavesurfer';

class WavesurferComponent extends React.Component {
    state = {
        playing: false,
        pos: 0,
    }

    handleTogglePlay = () => {
        this.setState({ playing: !this.state.playing });
    }

    handlePosChange = (e) => {
        this.setState({ pos: e.originArgs[0] });
    }

    render() {
        return (
            <div>
                <Wavesurfer 
                    audioFile={'./The-Gates-of-Agartha.mp3'}
                    pos={this.state.pos}
                    onPosChange={this.jandlePosChange}
                    playing={this.state.playing}
                />
            </div>
        )
    }
}

export default WavesurferComponent;