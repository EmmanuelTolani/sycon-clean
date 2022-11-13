import React from "react";
import Link from "next/link";
const About = () => {
  return (
    <div className="about">
      <div className="container">
        <div className="about__left">
          <img src="../img/people/founder-img.png"></img>
        </div>
        <div className="about__right">
          <h1>Founder Story</h1>
          <div className="about__founder-info">
            <h2>Adam Smith</h2>
            <p>Co-founder & CEO, Synco</p>
          </div>
          <div className="about__founder-story">
            <p>
              Synco makes cleaning as simple, effective, and exciting for our
              users. Our teams of professional cleaners are based in dozens of
              areas around Canada and we clean numerous houses, equipments,
              offices and so on each year.
            </p>
            <p>
              Synco makes cleaning as simple, effective, and exciting for our
              users. Our teams of professional cleaners are based in dozens of
              areas around Canada and we clean numerous houses, equipments,
              offices and so on each year.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
