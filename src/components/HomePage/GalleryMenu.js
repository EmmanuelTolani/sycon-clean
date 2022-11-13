import React from "react";
import Link from "next/link";
const GalleryMenu = () => {
  return (
    <div className="gallery-menu">
      <div className="container">
        <div className="gallery-menu__info">
          <h1>We’re always happy to help you.</h1>
          <p>
            Get professional cleaning experience from our cleaners anywhere in
            Alberta!
          </p>
          <div className="book-btn">
            <Link href="/" alt="book now">
              Book Now
            </Link>
          </div>
        </div>
        <div className="gallery-menu__photos">
          <div className="gallery-menu__photo">
            <img src="../img/gall-1.png" alt="" />
          </div>
          <div className="gallery-menu__photo">
            <img src="../img/gall-2.png" alt="" />
          </div>
          <div className="gallery-menu__photo">
            <img src="../img/gall-3.png" alt="" />
          </div>
          <div className="gallery-menu__photo">
            <img src="../img/gall-4.png" alt="" />
          </div>
          <div className="gallery-menu__photo">
            <img src="../img/gall-5.png" alt="" />
          </div>
          <div className="gallery-menu__photo">
            <img src="../img/gall-6.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryMenu;
