import React from 'react';
import Committee from '../Commitee/Commitee';
import './Information.css';
import {useState} from 'react';
import Popup from '../Popup/Popup';

export default function Information() {

  // render() {
    const [readMore, setReadMore] = useState(false);

    return (
      <div>

        <div className="divider">
          <p>Welcome! We may already be legally wed, but that doesn't mean we're missing the opportunity to celebrate with our nearest and dearest!</p>
          <h2>Only 298 Days to go!</h2>
          {/* <button className="button" id="rsvp-btn">RSVP</button> */}
        </div>


        <div className="section">
          <img src="https://res.cloudinary.com/dfipoufmj/image/upload/v1666015815/DSC02516_hw35a6.jpg" alt="not" className="block-left"></img>
          <div className="block-content block-right">
            <h3>The Venue</h3>
            <p>The Byre at Inchyra</p>
            <p>Glencarse, Perth PH2 7LU, UK</p>
            <a href="https://www.thebyreatinchyra.co.uk/" target="_blank" className="button">Find out more</a>
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
              <button onClick={ event => {setReadMore(true)}} className="button">More info</button>
              <button className="button">Book Travelodge</button>
            </div>
          </div>
          <img src="https://res.cloudinary.com/dfipoufmj/image/upload/v1666015814/DSC02500_wn01f3.jpg" alt="" className="block-right"></img>
        </div>





        <div className="divider">
          <h2>Plan on the day</h2>
        </div>

        <div className="section">
          <img src="https://res.cloudinary.com/dfipoufmj/image/upload/v1669048233/zoe_header_pic_q6rlbj.jpg" alt="" className="block-left"></img>
          <div className="block-content block-right">
            <h3>Dress code</h3>
            <p>Formal and Fancy (umbrellas advised)</p>
            <p>Adult only affair</p>
            <p>Mealtimes and toasts are on us. Party drinks are on you!</p>
            <button className='button'>The days events</button>
          </div>
        </div>

        <div className="divider">
          <h2>Add music to our playlist</h2>
        </div>
        <Popup trigger={readMore} setTrigger={setReadMore} >
          <div className="popup-container">
            <p>We have reserved a number of rooms at Travelodge Broxden (10 mins from our venue).</p>
            <br/>
            <p>There are also ample accommodation options nearby ranging from Premier and Holiday Inns to 5* resorts and self-catering cottages.</p>
            <br/>
            <p>If you're feeling brave, the estate offers free on-site camping with use of the bathroom facilities. Please do let us know if you're interested!</p>
          </div>
        </Popup>

      </div>
    )
  // }
}

// export default Information;
