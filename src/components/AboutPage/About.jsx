import React from "react";
import Link from "next/link";
const About = () => {
  return (
    <div className="about">
      <div className="container">
        <div className="about__left">
          <img src="../img/people/founder-img.png" alt="sycon founder"></img>
        </div>
        <div className="about__right">
          <h1>Founder Story</h1>
          <div className="about__founder-info">
            <h2>Prince Blessing Dunbar</h2>
            <p>Co-founder & CEO, Synco</p>
          </div>
          <div className="about__founder-story">
            <p>
              At SYCON we believe cleaning should be a luxury every family can
              afford. As such we go above and beyond in providing the highest
              standard of cleaning at the best possible price. “Keeping your
              home clean can be hard to manage, so we’ve got your back. Open 7
              days a week allows us to aid with anyone’s unique schedule”.
            </p>
            <p>
              {" "}
              At SYCON we pride ourselves in providing the highest standard of
              cleaning at the best possible price.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
