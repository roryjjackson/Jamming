import React from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import PlayList from '../PlayList/PlayList';
import Spotify from '../../util/Spotify';
import Header from '../Header/Header';
import Information from '../Information/Information';
// import emailjs from 'emailjs-com';
import Rsvp from '../RSVP/Rsvp';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchResults: [],
      playlistName: 'My Playlist',
      playlistTracks: []
    }

    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
  }

  addTrack(track) {
    let tracks = this.state.playlistTracks;
    if (tracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    }

    tracks.push(track);
    this.setState({playlistTracks: tracks})
  }

  removeTrack(track) {
    let tracks = this.state.playlistTracks;
    tracks = tracks.filter(currentTrack => currentTrack.id !== track.id)

    this.setState({playlistTracks: tracks})
  }

  updatePlaylistName(name) {
    this.setState({playlistName: name })
  }

  savePlaylist() {
    // alert("this method is linked to the button correctly")
    const trackUris = this.state.playlistTracks.map(track => track.uri)
    Spotify.savePlaylist(this.state.playlistName, trackUris).then(() => {
      this.setState({
        playlistName: 'New Playlist',
        playlistTracks: []
      })
    });
    this.setState({ playlistName: 'New Playlist', playlistTracks: [] })
  }

  search(term) {
    Spotify.search(term).then(searchResults => {
      this.setState({searchResults: searchResults})
    })
  }

  render() {
    return (
      <div>
        {/* <h1>Ja<span class="highlight">mmm</span>ing</h1> */}
        < Header />
        < Information />
        <div class="App">
          < SearchBar onSearch={this.search} />
          <div class="App-playlist">
            < SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack}/>
            < PlayList playlistName={this.state.playlistName}
                       playlistTracks={this.state.playlistTracks}
                       onRemove={this.removeTrack}
                       onNameChange={this.updatePlaylistName}
                       onSave={this.savePlaylist}
                        />

          </div>
        </div>
        <div className="divider">
          <h2>The plan on the day</h2>
        </div>

        <div className="section">
          <div className="schedule-container">
            <div className="schedule block-right">
              <h3>Schedule</h3>
              <div className="schedule-list">
                <div className="schedule-event">
                  <p>1:30pm | Arrival of guests 👋🏼</p>
                </div>
                <p>~</p>
                <div className="schedule-event">
                  <p>2:00pm | Ceremony 🕊</p>
                </div>
                <p>~</p>
                <div className="schedule-event">
                  <p>2:30pm | Canapés 🫒</p>
                </div>
                <p>~</p>
                <div className="schedule-event">
                  <p>4:00pm | Wedding breakfast 🐷</p>
                </div>
                <p>~</p>
                <div className="schedule-event">
                  <p>7:00pm | Evening guests arrival 🥳</p>
                </div>
                <p>~</p>
                <div className="schedule-event">
                  <p>12:00am | Carriages 💤</p>
                </div>
              </div>
            </div>
          </div>
          <img src="https://res.cloudinary.com/dfipoufmj/image/upload/v1666015814/DSC02503_tlgzxu.jpg" alt="" className="block-left"></img>
        </div>

        <div className="divider">
          <h2>RSVP</h2>
        </div>

        < Rsvp />

        <div className="footer">
          <p>25/11/23 | Remember the date x</p>
        </div>

      </div>
    );

  }
}

export default App;


// import React from 'react';
// import './App.css';

// import SearchBar from '../SearchBar/SearchBar';
// import SearchResults from '../SearchResults/SearchResults';
// import PlayList from '../PlayList/PlayList';

// import Spotify from '../../util/Spotify';

// class App extends React.Component {

//   constructor(props) {
//     super(props);

//     this.state = {
//       searchResults: [],
//       playlistName: 'My Playlist',
//       playlistTracks: []
//     }
//     this.addTrack = this.addTrack.bind(this);
//     this.removeTrack = this.removeTrack.bind(this);
//     this.updatePlaylistName = this.updatePlaylistName.bind(this);
//     this.savePlaylist = this.savePlaylist.bind(this);
//     this.search = this.search.bind(this);
//   }

//   addTrack(track) {
//     if (this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
//       return;
//     }

//     this.setState({playlistTracks: [this.state.playlistTracks, track]})
//   }

//   removeTrack(track) {
//     this.setState.playlistTracks = this.state.playlistTracks.filter(currentTrack => currentTrack.id !== track.id)

//     this.setState({playlistTracks: this.state.playlistTracks})
//   }

//   updatePlaylistName(name) {
//     this.setState({playlistName: name});
//   }

//   savePlaylist() {
//     const trackUris = this.state.playlistTracks.map(track => track.uri);
//     Spotify.savePlaylist(this.state.playlistName, trackUris).then(() => {
//       this.setState({
//         playlistName: 'New Playlist',
//         playlistTracks: []
//       })
//     })
//   }

//   search(term) {
//     Spotify.search(term).then(searchResults => {
//       this.setState({searchResults: searchResults})
//     })
//   }

//   render() {
//     return (
//       <div>
//         <h1>Ja<span className="highlight">mmm</span>ing</h1>
//         <div className="App">
//           <SearchBar onSearch={this.search} />
//           <div className="App-playlist">
//             <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack} />
//             <PlayList playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} onRemove={this.removeTrack} onNameChange={this.updatePlaylistName} onSave={this.savePlaylist} />
//           </div>
//         </div>
//       </div>
//     )
//   }
// }

// export default App;
