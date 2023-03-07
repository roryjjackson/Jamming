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
          <p>Nov 23rd 2023</p>
          <button className="button">RSVP</button>
        </div>
      </div>
    )
  }
}

export default Header;
