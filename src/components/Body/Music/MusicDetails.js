import React from 'react';

import WavesurferComponent from './WavesurferComponent'

class MusicDetails extends React.Component {
    render() {
        return (
            <div className="music-details">
                <WavesurferComponent />
            </div>
        )
    }
}

export default MusicDetails;