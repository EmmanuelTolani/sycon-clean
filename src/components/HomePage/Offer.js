import React from "react";
import Link from "next/link";
const Offer = () => {
  return (
    <div className="offers">
      <div className="container">
        <div className="offers__title">
          <h1>What we offer.</h1>
          <p>
            We offer different cleaning services suitable to your everday needs.
          </p>
        </div>
        <div className="offers__offers">
          <div className="offers__offer">
            <div className="offers__offer-icon">
              <img src="../img/icons/home.png" />
            </div>
            <h2>Home Cleaning</h2>
            <p>Let our team of experts handle the cleaning of your home.</p>
          </div>
          <div className="offers__offer">
            <div className="offers__offer-icon">
              <img src="../img/icons/office.png" />
            </div>
            <h2>Office Cleaning</h2>
            <p>
              We also offer excellent cleaning services in any office space.
            </p>
          </div>
          <div className="offers__offer">
            <div className="offers__offer-icon">
              <img src="../img/icons/organize.png" />
            </div>
            <h2>Interior Cleaning</h2>
            <p>
              From cleaning your furnitures, bedrooms, kitchens etc. We got you
              covered.
            </p>
          </div>
          <div className="offers__offer">
            <div className="offers__offer-icon">
              <img src="../img/icons/sweep.png" />
            </div>
            <h2>Exterior Cleaning</h2>
            <p>
              From cleanining of walls, roofs, windows etc. Our team of
              professionals are ready.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
