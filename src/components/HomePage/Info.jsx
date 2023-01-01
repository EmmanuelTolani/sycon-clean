import React from "react";
import Link from "next/link";
const Info = () => {
  return (
    <div className="info">
      <div className="container">
        <div className="info__left">
          <h1>The backbone of cleaning services in Canada.</h1>
          <p>
            Are you feeling overwhelmed and anxious about the cleanliness of
            your home or business? Do you fear that germs and bacteria are
            lurking in every corner, threatening the health and safety of you
            and your loved ones?{" "}
          </p>
          <p>
            Don&apos;t let fear control your life any longer. Our professional
            cleaning services can give you the peace of mind you deserve. Our
            team of experts uses the latest techniques and products to
            thoroughly sanitize and disinfect your space, leaving it sparkling
            clean and free from harmful contaminants.
          </p>
          <p>
            Let us take the burden off your shoulders and give you the gift of a
            clean and healthy environment. Contact us today and let us help you
            conquer your fears.
          </p>
          <div className="book-btn">
            <Link href="/book-now" alt="book now">
              Book Now
            </Link>
          </div>
        </div>
        <div className="info__right">
          <img src="../img/icons/canada-map.png" alt="canadian map"></img>
          <div className="info__canada-leaf">
            <img src="../img/icons/canada-flag.png" alt="canadian flag"></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
