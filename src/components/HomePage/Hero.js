import React from "react";
import Link from "next/link";
const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        <div className="hero__info">
          <h1>We are Sycon, a cleaning service company.</h1>
          <p>
            We take cleaning to the next level. By providing different varieties
            of cleaning services suitable for everyone.
          </p>
          <div className="hero__btn">
            <Link href="/" alt="book now">
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
