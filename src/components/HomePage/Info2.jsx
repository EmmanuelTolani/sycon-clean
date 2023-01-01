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
            Looking for the best cleaning service in town? Look no further! We
            are the top choice for professional cleaning services, and
            here&apos;s why:
          </p>
          <ol>
            <li>
              Our team is highly trained and experienced, ensuring that we
              deliver the highest quality clean every time.
            </li>
            <li>
              We use only the best products and techniques to effectively clean
              and disinfect your space.
            </li>
            <li>
              We are thorough and detail-oriented, leaving no corner or surface
              untouched.
            </li>
            <li>
              We are flexible and accommodating, fitting our services to your
              specific needs and schedule. We are reliable and dependable,
              always showing up on time and ready to work.
            </li>
            <li>
              We offer competitive pricing, so you can afford to keep your space
              looking its best.
            </li>
          </ol>
          <p>
            {" "}
            Don&apos;t settle for mediocre cleaning services. Choose the best
            and choose us. Contact us today to schedule your first cleaning!
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
