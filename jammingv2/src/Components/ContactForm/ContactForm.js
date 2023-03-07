// import './ContactForm.css';
// import React, { useRef } from 'react';
// import emailjs from '@emailjs/browser';
// import Popup from '../Popup/Popup';
// import { useState } from 'react';

// const ContactForm = () => {
//   const [buttonPopup, setButtonPopup] = useState(false)

//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_USER_ID)
//       .then((result) => {
//           console.log(result.text);
//       }, (error) => {
//           console.log(error.text);
//       });

//       e.target.reset();
//   };

//   return (
//     <div class="contact-form-container">
//       {/* <Popup trigger={buttonPopup} setTrigger={setButtonPopup} > */}
//         <div className="container m-5">
//           <form id="myForm" ref={form} onSubmit={ e => {
//             sendEmail(e);
//             setButtonPopup(true);
//           }}>
//             <div className="mb-3">
//               <label className="form-label">
//                 Name
//               </label>
//               <input className="form-control" type="text" id="name" name="user_name" required />
//             </div>
//             <div className="mb-3">
//               <label className="form-label">
//                 Email
//               </label>
//               <input className="form-control" type="email" id="email" name="user_email" required />
//             </div>

            // <div className="mb-3">
            //   <h2>Which nights would you like to book?</h2>
            //   <label className="form-label">Friday the 24th</label>
            //   <input className="form-control" type="checkbox" id="24th" name="24th" required />
            //   <label className="form-label">Saturday the 25th</label>
            //   <input className="form-control" type="checkbox" id="25th" name="25th" required />
            // </div>
            // <br/>
            // <div className="mb-3">
            //   <h2>What type of room would you like to book?</h2>
            //   <label className="form-label">Double</label>
            //   <input className="form-control" type="checkbox" id="double" name="double" required />
            //   <label className="form-label">Twin</label>
            //   <input className="form-control" type="checkbox" id="twin" name="twin" required />
            //   <label className="form-label">Family (1 Double & 1 Single. Extra £10 for the 24th and £15 for 25th)</label>
            //   <input className="form-control" type="checkbox" id="family" name="family" required />
            // </div>


//             <div className="mb-3">
//               <label className="form-label">
//                 Message
//               </label>
//               <textarea className="form-control" id="message" name="message" required />
//             </div>
//             <button className="btn btn-danger" type="submit" value="send">
//               Submit
//             </button>
//           </form>
//         </div>
//       {/* </Popup> */}

//       <Popup trigger={buttonPopup} setTrigger={setButtonPopup} >
//         <h2>Thanks for getting in touch, we'll get back to you as soon as possible!
//         </h2>
//       </Popup>

//       </div>
//   )
// }
// export default ContactForm

import '../ContactForm/ContactForm.css';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Popup from '../Popup/Popup';
import { useState } from 'react';

const ContactForm = () => {
  const [buttonPopup, setButtonPopup] = useState(false)

  const form = useRef();

  // var myForm = document.getElementById("myForm");
  // myForm.reset();

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
        <div className="container m-5">
          <form id="myForm" ref={form} onSubmit={ e => {
            sendEmail(e);
            setButtonPopup(true);
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
          <Popup trigger={buttonPopup} setTrigger={setButtonPopup} >
            <h2>Thanks for getting in touch, we'll get back to you as soon as possible!
            </h2>
          </Popup>
        </div>
  )
}
export default ContactForm
