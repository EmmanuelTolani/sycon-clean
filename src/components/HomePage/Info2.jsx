import React from "react";
import Link from "next/link";
const Info2 = () => {
  return (
    <div className="info2">
      <div className="container">
        <div className="info2__left">
          <img
            src="../img/cleaning-women.png"
            alt="woman cleaning window"
          ></img>
          <div className="info__rating-tag">
            <img
              src="../img/icons/ratings-tag.png"
              alt="sycon customer ratings"
            ></img>
          </div>
          <div className="info__tag">
            <img
              src="../img/icons/tag.png"
              alt="c
            sycon customer review"
            ></img>
          </div>
        </div>
        <div className="info2__right">
          <h1>We are the best In the cleaning business.</h1>
          <p>
            Don’t just take our word for it, we offer the best cleaning services
            of all kinds at a very affordable rate so what are you waiying for?
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

export default Info2;
