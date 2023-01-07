import React from "react";
import Link from "next/link";
const Hero = () => {
  return (
    <div className="about-hero">
      <div className="container">
        <div className="about-hero__left">
          <h1>Powering cleaning in Canada.</h1>
          <p>
            We believe that a clean home is a happy home, and our mission is to
            help our clients achieve that sense of peace and well-being through
            reliable, efficient, and affordable cleaning services.
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
