import '../ContactForm/ContactForm.css';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Popup from '../Popup/Popup';
import { useState } from 'react';

const ContactForm = (props) => {
  const [buttonPopup, setButtonPopup] = useState(false)
  // const [isVis, setIsVis] = useState(false)

  const form = useRef();

  // const handleClick = event => {
  //   setIsVis(current => true)
  // }

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
        <div className="container m-5" >
          <h3>Fill out the form to let us know what rooms you would like to book...</h3>
          <h3>£115 per night / room</h3>
          <h3>We will require a 10% deposit within two weeks of booking, and full payment by October 1st</h3>
          <form id="myForm"  ref={form} onSubmit={ e => {
            sendEmail(e);
            setButtonPopup(true);
            // setTrigger(false)
            props.setTrigger(false)
          }}>
            <div className="mb-3">
              <label className="form-label">
                Name
              </label>
              <input className="form-control" type="text" id="name" name="user_name" required />
            </div>
            <div className="mb-3">
              <label className="form-label">
                Email
              </label>
              <input className="form-control" type="email" id="email" name="user_email" required />
            </div>

            <br/>
            <br/>

            <div className="mb-3">
              <h2>Which nights would you like to book?</h2>
              <label className="form-label">Friday the 24th</label>
              <input className="form-control" type="checkbox" id="24th" name="24th" />
              <label className="form-label">Saturday the 25th</label>
              <input className="form-control" type="checkbox" id="25th" name="25th" />
            </div>
            <br/>
            <br/>
            <div className="mb-3" required>
              <h2>What type of room would you like to book?</h2>
              <label className="form-label">Double</label>
              <input className="form-control" type="checkbox" id="double" name="double" />
              <label className="form-label">Twin</label>
              <input className="form-control" type="checkbox" id="twin" name="twin" />
              <label className="form-label">Family (1 Double & 1 Single. Extra £10 for the 24th and £15 for 25th)</label>
              <input className="form-control" type="checkbox" id="family" name="family" />
            </div>
            <br/>
            <br/>
            <div className="mb-3">
              <label className="form-label">
                Let us know any further details
              </label>
              <textarea className="form-control" id="message" name="message" />
            </div>
            <button className="button" type="submit" value="send">
              Send
            </button>
          </form>
          <Popup trigger={buttonPopup} setTrigger={setButtonPopup} >
            <h2>Thanks for getting in touch, we'll get back to you as soon as possible!</h2>
          </Popup>
        </div>
  )
}
export default ContactForm
