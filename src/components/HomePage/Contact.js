import React from "react";

const Contact = () => {
  return (
    <div className="contact">
      <div className="container">
        <div className="contact__info">
          <h1>Get started with the best cleaning services</h1>
          <div className="contact__contacts">
            <div className="contact__contact">
              <img src="../img/icons/pin.png"></img>
              <h2>Office Address</h2>
              <p>Head Office: 23 Albert ST, Toronto, Canada</p>
            </div>
            <div className="contact__contact">
              <img src="../img/icons/email.png"></img>
              <h2>Mail Address</h2>
              <p>Synco@gmail.com Helpline@synco.com</p>
            </div>
            <div className="contact__contact">
              <img src="../img/icons/phone.png"></img>
              <h2>Phone No</h2>
              <p>Main line: +1 232 4455677 Help line: 221234454</p>
            </div>
            <div className="contact__contact">
              <img src="../img/icons/clock.png"></img>
              <h2>Opening Time</h2>
              <p>10:00 am - 06:00 pm (Monday - Sunday)</p>
            </div>
          </div>
        </div>
        <div className="contact__qoute">
          <h2>Get a qoute</h2>
          <form>
            <label>First Name</label>
            <input type="text"></input>
            <label>Last Name</label>
            <input type="text"></input>
            <label>Email Address</label>
            <input type="email"></input>
            <label>Phone Number</label>
            <input type="text"></input>
            <label>Which of our services are you interested in</label>
            <select>
              <option value="" key="">
                Home Cleaning
              </option>
              <option value="" key="">
                Office Cleaning
              </option>
              <option value="" key="">
                Interior Cleaning
              </option>
              <option value="" key="">
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
