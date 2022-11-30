import React from "react";
import Link from "next/link";
const Hero = () => {
  return (
    <div className="about-hero">
      <div className="container">
        <div className="about-hero__left">
          <h1>Powering cleaning in Canada.</h1>
          <p>
            Our Mission Is To Ensure Everyone Has Access To Premium cleaning
            service and a clean environment in general.
          </p>
        </div>
        <div className="about-hero__right">
          <img
            src="../img/about-hero.png"
            alt="person holding cleaning supplies"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Hero;
