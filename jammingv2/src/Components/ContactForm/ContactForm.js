import './ContactForm.css';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Popup from '../Popup/Popup';
import { useState } from 'react';

const ContactForm = () => {
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
    <div class="contact-form-container">
      <Popup trigger={buttonPopup} setTrigger={setButtonPopup} >
        <div className="container m-5">
          <form id="myForm" ref={form} onSubmit={ e => {
            sendEmail(e);
            // setButtonPopup(true);
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
      </Popup>
      </div>
  )
}
export default ContactForm
