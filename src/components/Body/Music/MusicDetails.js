import React from 'react';
import MusicPlayer from './MusicPlayer';

class MusicDetails extends React.Component {
    render() {
        return (
            <div className="music-details">
                <MusicPlayer />
            </div>
        )
    }
}

export default MusicDetails;