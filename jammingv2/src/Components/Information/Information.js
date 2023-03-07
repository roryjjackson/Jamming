// import React from 'react';
import Committee from '../Commitee/Commitee';
import './Information.css';
import {useState} from 'react';
import Popup from '../Popup/Popup';
import ContactForm from '../ContactForm/ContactForm';
import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';

export default function Information() {

  // render() {
    const [readMore, setReadMore] = useState(false);
    const [buttonPopup, setButtonPopup] = useState(false)

    const form = useRef();
    const sendEmail = (e) => {
      e.preventDefault();

      emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_USER_ID)
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

        e.target.reset();
    };

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
              <button onClick={ event => {setButtonPopup(true)}} className="button">Book Travelodge</button>
            </div>
          </div>
          <img src="https://res.cloudinary.com/dfipoufmj/image/upload/v1666015814/DSC02500_wn01f3.jpg" alt="" className="block-right"></img>
        </div>


<ContactForm />


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
        <Popup trigger={buttonPopup} setTrigger={setButtonPopup} >
          <div className="popup-container">
            <p>We have secured a discounted rate that you will only get by booking through us. (£119 per room / per night)</p>
            <div className="container m-5">
              <form id="myForm" ref={form} onSubmit={ e => {
                sendEmail(e);
                // setButtonPopup(true);
              }}>
                <div className="mb-3">
                  <label className="form-label">
                    Full Name
                  </label>
                  <input className="form-control" type="text" id="name" name="user_name" required />
                </div>
                <div className="mb-3">
                  <label className="form-label">
                    Email Address
                  </label>
                  <input className="form-control" type="email" id="email" name="user_email" required />
                </div>
                <div className="mb-3">
                  <p>Which nights would you like to book?</p>
                  <div className="accom-nights">
                    <label className="form-label">
                      Friday the 24th
                    </label>
                    <input className="form-control" type="checkbox" id="email" name="user_email" required />
                    <label className="form-label">
                      Saturday the 25th
                    </label>
                    <input className="form-control" type="checkbox" id="email" name="user_email" required />
                  </div>
                </div>
                <div className="mb-3">
                  <label className="form-label">
                    Message
                  </label>
                  <textarea className="form-control" id="message" name="message" required />
                </div>
                <button className="btn btn-danger" type="submit" value="send">
                  Submit
                </button>
              </form>
            </div>
              <br/>
            <p>10% deposit will be required within 2 weeks of booking, full payment will be required by 1st October 2023. </p>

          </div>
        </Popup>

      </div>
    )
  // }
}

// export default Information;
