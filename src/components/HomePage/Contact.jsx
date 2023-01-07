import React from "react";
import SignupForm from "../Form/SignupForm";
import Link from "next/link";
const Contact = () => {
  return (
    <div className="contact">
      <div className="container">
        <div className="contact__info">
          <h1>Get started with the best cleaning services</h1>
          <div className="contact__contacts">
            <div className="contact__contact">
              <img src="../img/icons/pin.png" alt="location icon"></img>
              <h2>Office Address</h2>
              <p>10020 103 Avenue NW</p>
            </div>
            <div className="contact__contact">
              <img src="../img/icons/email.png" alt="email icon"></img>
              <h2>Mail Address</h2>
              <Link href="mailto: info@syconcleaningservice.com">
                info@syconcleaningservice.com
              </Link>
            </div>
          </div>
          <div className="contact__contacts">
            <div className="contact__contact">
              <img src="../img/icons/phone.png" alt="phone icon"></img>
              <h2>Phone No</h2>
              <p>(780)-238-7116</p>
            </div>
            <div className="contact__contact">
              <img src="../img/icons/clock.png" alt="clock icon"></img>
              <h2>Opening Time</h2>
              <p>
                8:30am - 8:00pm Monday - Friday 9:00am - 5:00pm Saturday –
                Sunday
              </p>
            </div>
          </div>
        </div>
        <div className="contact__qoute">
          <SignupForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
