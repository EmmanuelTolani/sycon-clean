import React from "react";

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
              <p>Head Office: 23 Albert ST, Toronto, Canada</p>
            </div>
            <div className="contact__contact">
              <img src="../img/icons/email.png" alt="email icon"></img>
              <h2>Mail Address</h2>
              <p>Synco@gmail.com Helpline@synco.com</p>
            </div>
            <div className="contact__contact">
              <img src="../img/icons/phone.png" alt="phone icon"></img>
              <h2>Phone No</h2>
              <p>Main line: +1 232 4455677 Help line: 221234454</p>
            </div>
            <div className="contact__contact">
              <img src="../img/icons/clock.png" alt="clock icon"></img>
              <h2>Opening Time</h2>
              <p>10:00 am - 06:00 pm (Monday - Sunday)</p>
            </div>
          </div>
        </div>
        <div className="contact__qoute">
          <h2>Get a qoute</h2>
          <form>
            <label htmlFor="firstname">First Name</label>
            <input type="text" id="fname" aria-label="First Name"></input>
            <label htmlFor="lastname">Last Name</label>
            <input type="text" id="lastname" aria-label="Last Name"></input>
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" aria-label="Email Address"></input>
            <label htmlFor="phonenumber">Phone Number</label>
            <input
              type="text"
              id="phonenumber"
              aria-label="Phone Number"
            ></input>
            <label htmlFor="service">
              Which of our services are you interested in
            </label>
            <select id="service">
              <option value="" key="1">
                Home Cleaning
              </option>
              <option value="" key="2">
                Office Cleaning
              </option>
              <option value="" key="3">
                Interior Cleaning
              </option>
              <option value="" key="4">
                Exterior Cleaning
              </option>
            </select>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
