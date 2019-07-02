import React from 'react';
import {Spring, config} from 'react-spring/renderprops';
import MusicPlayer from './MusicPlayer';
import './MusicDetails.css';

class MusicDetails extends React.Component {
    render() {
        return (
            <Spring
                from={{ opacity: 0}}
                to={{ opacity: 1}}
                config={{ duration: 1000 }}
            >
                {props => (
                    <div 
                        className="music-details"
                        style={props}
                    >
                        <MusicPlayer />
                    </div>
                )}
            </Spring>
        )
    }
}

export default MusicDetails;