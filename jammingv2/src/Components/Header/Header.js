import React from 'react';
import './Header.css';

class Header extends React.Component {
  render() {
    return (
      <div className="header-container">
        <div className="header-navbar">
          <h2>Gallery</h2>
          <h2>RSVP</h2>
          <h2>Travel</h2>
          <h2>On the day</h2>
        </div>
        <div className="header-content">
            <h1>Zoe and Cameron</h1>
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
