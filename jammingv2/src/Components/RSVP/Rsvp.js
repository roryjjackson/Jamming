import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Popup from '../Popup/Popup';
import { useState } from 'react';
import './Rsvp.css';

const Rsvp = (props) => {
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
        <div className="container m-5" >
          <div className="rsvp-container">
            <form id="myForm"  ref={form} onSubmit={ e => {
              sendEmail(e);
              setButtonPopup(true);
            }}>
              <div className="mb-3">
                <label className="form-label">
                  <h2>Full name</h2>
                </label>
                <input className="form-control" type="text" id="name" name="user_name" required />
              </div>

              <br/>

              <label className="form-label">
                <h2>Can you make it?</h2>
              </label>
              <div className="mb-3">
                <label for="yes">YES, I'm so ready to partay!!!</label><br/>
                <input className="form-control" type="radio" id="yes" name="attendance" value="YES" required></input>
              </div>

              <br/>

              <div className="mb-3">
                <label for="no">No, sadly not 😢</label><br/>
                <input className="form-control" type="radio" id="no" name="attendance" value="NO"></input>
              </div>

              <br/>

              <div className="mb-3">
                <label className="form-label">
                <h2>Any dietary requirements we should know about?</h2>
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
        </div>
  )
}
export default Rsvp
