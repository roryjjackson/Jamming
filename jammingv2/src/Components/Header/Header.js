import React from 'react';
import './Header.css';

class Header extends React.Component {
  render() {
    return (
      <div className="header-container">
        <div className="header-navbar">
          {/* <a href="#Gallery"><h2>Gallery</h2></a> */}
          {/* <a href="#RSVP"><h2>RSVP</h2></a> */}
          <a href="#Travel"><h2>Travel</h2></a>
          <a href="#Schedule"><h2>Information</h2></a>
          <a href="#Music"><h2>Music</h2></a>
        </div>
        <div className="header-content">
            <h1>The Jackson - Addletons</h1>
            <p>Suit up, boot up, and get ready for a Scottish throwdown on the</p>
            <h2 id="date">25th November 2023</h2>
          {/* <div className="header-top">
            <p>Welcome! We may already be legally wed, but that doesn't mean we're missing the opportunity to celebrate with our nearest and dearest!</p>
            <button className="button">RSVP</button>
          </div> */}
        </div>
      </div>
    )
  }
}

export default Header;
