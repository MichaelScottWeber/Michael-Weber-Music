import React from 'react';
import Header from './Header/Header';
import AboutIntro from './Body/About/AboutIntro';
import AboutDetails from './Body/About/AboutDetails';
import Menu from './Body/Menu/Menu';
import MusicIntro from './Body/Music/MusicIntro';
import MusicDetails from './Body/Music/MusicDetails';
import CreditsIntro from './Body/Credits/CreditsIntro';
import CreditsDetails from './Body/Credits/CreditsDetails';
import ServicesIntro from './Body/Services/ServicesIntro';
import ServicesDetails from './Body/Services/ServicesDetails';
import ContactIntro from './Body/Contact/ContactIntro';
import ContactDetails from './Body/Contact/ContactDetails';

import './App.css';

class App extends React.Component {
    state = { display: 'home' }

    onSectionClick = (section) => {
        this.setState({ display: section })
    }

    onMenuBtnClick = () => {
        if (this.state.display === 'menu') {
            this.setState({ display: 'home' })
        } else {
            this.setState({ display: 'menu' })
        }
    }

    render() {
        return (
            <div className="app">
                <div className="header">
                    <Header 
                        display={this.state.display}
                        onSectionClick={this.onSectionClick}
                        onMenuBtnClick={this.onMenuBtnClick}
                    />
                </div>
                <div className="about">
                    {this.state.display === 'about' 
                        ? <AboutDetails 
                            onSectionClick={this.onSectionClick}
                        /> 
                        : (this.state.display === 'menu' 
                            ? <Menu 
                                onSectionClick={this.onSectionClick}
                            /> 
                            : <AboutIntro 
                                onSectionClick={this.onSectionClick}
                            />
                        )
                    }
                </div>
                <div className="music">
                    {this.state.display === 'music' 
                        ? <MusicDetails 
                            onSectionClick={this.onSectionClick}
                        /> 
                        : <MusicIntro 
                            onSectionClick={this.onSectionClick}
                        />
                    }
                </div>
                <div className="credits">
                    {this.state.display === 'credits' 
                        ? <CreditsDetails 
                            onSectionClick={this.onSectionClick}
                        /> 
                        : <CreditsIntro 
                            onSectionClick={this.onSectionClick}
                        />
                    }
                </div>
                <div className="services">
                    {this.state.display === 'services'
                        ? <ServicesDetails 
                            onSectionClick={this.onSectionClick}
                        />
                        : <ServicesIntro 
                            onSectionClick={this.onSectionClick}
                        />
                    }
                </div>
                <div className="contact">
                    {this.state.display === 'contact' 
                        ? <ContactDetails 
                            onSectionClick={this.onSectionClick}
                        /> 
                        : <ContactIntro 
                            onSectionClick={this.onSectionClick}
                        />
                    }
                </div>
            </div>
        )
    }
}

export default App;