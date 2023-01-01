import React from "react";
import Link from "next/link";
const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        <div className="hero__info">
          <h1>Get Expert Cleaning for Your Home or Business Now</h1>
          <p>
            We take cleaning to another level with Eco-Friendly products. We
            guarantee to make Your Space Sparkling and Enjoyable or your Money
            Back.
          </p>
          <div className="book-btn">
            <Link href="/book-now" alt="book now">
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
