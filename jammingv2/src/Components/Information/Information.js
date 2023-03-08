import React from 'react';
import Committee from '../Commitee/Commitee';
import './Information.css';
import {useState} from 'react';
import ContactForm from '../ContactForm/ContactForm';
import Popup from '../Popup/Popup';

export default function Information() {
  const [isVis, setIsVis] = useState(false)
  const [buttonPopup, setButtonPopup] = useState(false)
  const [button2Popup, setButton2Popup] = useState(false)

  const handleClick = event => {
    setIsVis(current => true)
  }


    return (
      <div>

        <div className="divider">
          <p>Welcome! We may already be legally wed, but that doesn't mean we're missing the opportunity to celebrate with our nearest and dearest!</p>
          <h2>Only 298 Days to go!</h2>
        </div>


        <div className="section">
          <img src="https://res.cloudinary.com/dfipoufmj/image/upload/v1666015815/DSC02516_hw35a6.jpg" alt="not" className="block-left"></img>
          <div className="block-content block-right">
            <h3>The Venue</h3>
            <p>The Byre at Inchyra</p>
            <p>Glencarse, Perth PH2 7LU, UK</p>
            <a href="https://www.thebyreatinchyra.co.uk/" target="_blank" className="button" rel="noreferrer">Find out more</a>
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
            <button onClick={ e => {handleClick(); setButtonPopup(true)}} className="button">Book Travelodge</button>
          </div>
          <img src="https://res.cloudinary.com/dfipoufmj/image/upload/v1666015814/DSC02500_wn01f3.jpg" alt="" className="block-right"></img>
        </div>

        <div style={{display: isVis ? 'block' : 'none'}}>
          <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
            <ContactForm />
          </Popup>
        </div>

        <div className="rsvp">

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
          </div>
        </div>




        <div className="divider">
          <h2>Add music to our playlist</h2>
        </div>



      </div>
    )
}
