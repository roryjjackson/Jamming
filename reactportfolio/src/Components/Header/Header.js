import React from 'react';
import './Header.css';

class Header extends React.Component {
  render() {
    return (
      <header>
        <div>
          <nav>
            <a href="/">Home</a>
            <a href="/">Projects</a>
            <a href="/">About</a>
            <a href="/">Contact</a>
          </nav>
        </div>
        <div className="header-container">
          <img src="https://res.cloudinary.com/dfipoufmj/image/upload/v1666282722/IMG_7518_xuj7po.jpg" alt=""></img>
          <p>Im Rory, a software developer based in London. Im available for freelance & collaborations.</p>
        </div>
      </header>
    )
  }
};

export default Header;
