import React from 'react';
import Committee from '../Commitee/Commitee';
import './Information.css';

class Information extends React.Component {

  render() {
    return (
      <div>

        <div className="divider">
          <h2>Only 298 Days to go!</h2>
          <button className="button" id="rsvp-btn">RSVP</button>
        </div>


        <div className="section">
          <img src="https://res.cloudinary.com/dfipoufmj/image/upload/v1666014186/Zoe%20and%20Cameron/DSC02463_y4bz57.jpg" alt="not" className="block-left"></img>
          <div className="block-content block-right">
            <h3>The Byre at Inchyra</h3>
            <p>Glencarse, Perth PH2 7LU, UK</p>
            <button className="button">Venue</button>
          </div>
        </div>

        <div className="divider">
          <h2>The wedding committee</h2>
        </div>

        < Committee />

        <div className="divider">
          <h2>Travel and Accomodation</h2>
        </div>

        <div className="section">
          <div className="block-content block-left">
            <h3>Travel</h3>
            <p>For discounted travelodge Accomodation booked by us, click here.</p>
            <div className="button-container">
              <button className="button">More info</button>
              <button className="button">Book Travelodge</button>
            </div>
          </div>
          <img src="https://res.cloudinary.com/dfipoufmj/image/upload/v1668433845/WhatsApp_Image_2022-10-20_at_5.00.58_AM_zeecty.jpg" alt="" className="block-right"></img>
        </div>

        <div className="divider">
          <h2>Plan on the day</h2>
        </div>

        <div className="section">
          <img src="https://res.cloudinary.com/dfipoufmj/image/upload/v1668433845/WhatsApp_Image_2022-10-20_at_5.00.58_AM_zeecty.jpg" alt="" className="block-left"></img>
          <div className="block-content block-right">
            <h3>Dress code</h3>
            <p>Formal and Fancy</p>
            <p>Umbrellas advised</p>
            <p>Adult only affair</p>
            <p>Mealtimes and toasts are on us. Party drinks are on you</p>
            <button className='button'>The days events</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Information;
