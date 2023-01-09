import React from "react";
import Link from "next/link";
const About = () => {
  return (
    <div className="about">
      <div className="container">
        {/* <div className="about__left">
          <img src="../img/people/founder-img.png" alt="sycon founder"></img>
        </div> */}
        <div className="about__right">
          <h1>Our Mission</h1>
          <div className="about__founder-info">
            {/* <h2> Community, Culture, Kindness</h2> */}
            {/* <p>Co-founder & CEO, Synco</p> */}
          </div>
          <div className="about__founder-story">
            <p>
              Learn More About who we are At SYCON we are dedicated to
              connecting communities and cultures with families and individuals
              alike through one mission. Delivering the best cleans to any home.
              We accomplish this in the most convenient and cost-effective way
              possible.
            </p>
            <h2> Community, Culture, Kindness</h2>
            <p>
              Our three core values match our one mission. Delivering the best
              SYCON cleaning specialist, committed to using eco-friendly
              products and techniques to ensure the health and safety of our
              clients and the environment, creating a service based around
              honesty and reliability. Thank you for considering our company for
              your cleaning needs. We look forward to serving you and making
              your home sparkle and shine.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
