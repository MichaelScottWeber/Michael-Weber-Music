import React from 'react';

import Colours from "../../../audio/Colours-Run-Together.mp3";
import Dreams from "../../../audio/Dreams-For-Tomorrow.mp3";
import LetsGo from "../../../audio/Let's-Go.mp3";
import Mountain from "../../../audio/Mountain-Shade.mp3";
import Rev from "../../../audio/Rev-Me-Up.mp3";
import Finer from "../../../audio/The-Finer-Things.mp3";
import Gates from "../../../audio/The-Gates-of-Agartha.mp3";

class MusicPlayer extends React.Component {
    state = { 
        selectedTrack: null,
        playerStatus: 'stopped',
    };

    componentDidUpdate(prevProps, prevState) {
        if (this.state.selectedTrack !== prevState.selectedTrack) {
            let track;
            switch(this.state.selectedTrack) {
                case "Colours Run Together":
                    track = Colours
                break;
                case "Let's Go":
                    track = LetsGo
                break;
                case "Dreams For Tomorrow":
                    track = Dreams
                break;
                case "The Gates of Agartha":
                    track = Gates
                break;
                case "Mountain Shade":
                    track = Mountain
                break;
                case "Rev Me Up":
                    track = Rev
                break;
                case "The Finer Things":
                    track = Finer
                break;
                default:
                break;
            }
            if (track) {
                this.player.src = track;
                this.player.play();
                this.setState({ playerStatus: 'playing' });
            }
        }
    }

    render() {
        const songList = [
            {
                id: 1,
                title: "Colours Run Together"
            },
            {
                id: 2,
                title: "Let's Go"
            },
            {
                id: 3,
                title: "The Gates of Agartha"
            },
            {
                id: 4,
                title: "Dreams For Tomorrow"
            },
            {
                id: 5,
                title: "Mountain Shade"
            },
            {
                id: 6,
                title: "Rev Me Up"
            },
            {
                id: 7,
                title: "The Finer Things"
            },
        ].map((item) => {
            return (
                <li
                    key={item.id}
                    onClick={() => this.setState({ selectedTrack: item.title })}
                >
                    {item.title}
                </li>
            );
        });

        return (
            <div>
                <ul>{songList}</ul>
                <audio 
                    ref={(ref) => (
                        this.player = ref
                    )}
                />
            </div>
        )
    }
}

export default MusicPlayer;