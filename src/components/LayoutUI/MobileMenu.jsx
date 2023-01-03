import React, { useState, useLayoutEffect } from "react";
import Link from "next/link";

const MobileMenu = ({ sticky }) => {
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useLayoutEffect(() => {
    const handleScroll = (e) => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className={sticky && scrolled ? "mobile-menu sticky" : "mobile-menu"}>
      <div className="mobile-menu__container">
        <div className="mobile-menu__in">
          <div className="mobile-menu__logo">
            <Link href="/">
              <img src="../img/sycon-logooo.png" alt="sycon logo" />
            </Link>
          </div>
          <div className="trigger" onClick={() => setToggle(!toggle)}>
            <div
              className={`hamburger hamburger--slider ${
                toggle ? "is-active" : ""
              }`}
            >
              <div className="hamburger-box">
                <div className="hamburger-inner"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="dropdown" style={{ display: toggle ? "block" : "none" }}>
        <div className="dropdown_inner">
          <ul className="anchor_nav">
            <li className="header-btn">
              <Link href="/book-now" alt="book now">
                Book Now
              </Link>
            </li>
            <li>
              <Link href="/" alt="home">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" alt="about">
                About
              </Link>
            </li>
            <li>
              <Link href="/faq" alt="faq">
                FAQ
              </Link>
            </li>
            <li>
              <Link href="/services" alt="services">
                Services
              </Link>
            </li>
            <li>
              <Link href="/contact" alt="contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default MobileMenu;
