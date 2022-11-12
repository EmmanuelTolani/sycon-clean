import React from "react";
import Link from "next/link";
const Info = () => {
  return (
    <div className="info">
      <div className="container">
        <div className="info__left">
          <h1>The backbone of cleaning services in Canada.</h1>
          <p>
            Sycon makes cleaning as simple, effective, and exciting for our
            users. Our teams of professional cleaners are based in dozens of
            areas around Canada and we clean numerous houses, equipments,
            offices and so on each year.
          </p>
          <div className="info__btn">
            <Link href="/" alt="book now">
              Book Now
            </Link>
          </div>
        </div>
        <div className="info__right">
          <img src="../img/icons/canada-map.png"></img>
          <div className="info__canada-leaf">
            <img src="../img/icons/canada-flag.png"></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;