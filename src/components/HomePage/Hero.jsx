import React from "react";
import BookBtn from "../LayoutUI/BookBtn";
import Link from "next/link";
import Script from "next/script";
const Hero = () => {
  return (
    <>
      <div className="hero">
        <div className="container">
          <div className="hero__info">
            <h1>Get Expert Cleaning for Your Home or Business Now</h1>
            <p>
              We take cleaning to another level with Eco-Friendly products. We
              guarantee to make Your Space Sparkling and Enjoyable or your Money
              Back.
            </p>
            <div className="header-btn">
              <BookBtn />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
