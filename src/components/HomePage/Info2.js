import React from "react";
import Link from "next/link";
const Info2 = () => {
  return (
    <div className="info2">
      <div className="container">
        <div className="info2__left">
          <img src="../img/cleaning-women.png"></img>
          <div className="info__rating-tag">
            <img src="../img/icons/ratings-tag.png"></img>
          </div>
          <div className="info__tag">
            <img src="../img/icons/tag.png"></img>
          </div>
        </div>
        <div className="info2__right">
          <h1>We are the best In the cleaning business.</h1>
          <p>
            Don’t just take our word for it, we offer the best cleaning services
            of all kinds at a very affordable rate so what are you waiying for?
          </p>
          <div className="info2__btn">
            <Link href="/" alt="book now">
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info2;