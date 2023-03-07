import React from 'react';
import Committee from '../Commitee/Commitee';
import './Information.css';

class Information extends React.Component {
  render() {
    return (
      <div>
        <div className="save-the-date">
          <img src="https://res.cloudinary.com/dfipoufmj/image/upload/v1666014186/Zoe%20and%20Cameron/DSC02463_y4bz57.jpg" alt="not"></img>
          <div>
            <h3>The address here</h3>
            <h4>The date here</h4>
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

        <div className="Accomodation">
          <div>
            <h3>travel info</h3>
            <p>some information here</p>
          </div>
          <img src="https://res.cloudinary.com/dfipoufmj/image/upload/v1668433845/WhatsApp_Image_2022-10-20_at_5.00.58_AM_zeecty.jpg"></img>
        </div>

        <div className="divider">
          <h2>Plan on the day</h2>
        </div>

        <div className="Accomodation">
          <img src="https://res.cloudinary.com/dfipoufmj/image/upload/v1668433845/WhatsApp_Image_2022-10-20_at_5.00.58_AM_zeecty.jpg"></img>
          <div>
            <h3>Dress code</h3>
            <p>some information here</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Information;
