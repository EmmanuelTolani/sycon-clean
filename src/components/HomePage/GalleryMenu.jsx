import React, { Fragment } from "react";
import Link from "next/link";
import TransformationSwiper from "../LayoutUI/TransformationSwiper";
const GalleryMenu = () => {
  return (
    <div className="gallery-menu">
      <div className="container">
        <div className="gallery-menu__info">
          <h1>We save you time and stress.</h1>
          <p>
            SYCON does the heavy lifting for you. We eliminate the time and
            trouble that cleaning costs you. Have more energy and time for
            what&apos;s important!
          </p>
          <div className="book-btn">
            <Link href="/book-now" alt="book now">
              Book Now
            </Link>
          </div>
        </div>
      </div>
      <TransformationSwiper />
    </div>
  );
};

export default GalleryMenu;
