import React, { useState, useLayoutEffect } from "react";
import Link from "next/link";

const Header = ({ sticky }) => {
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
    <div className={sticky && scrolled ? "header sticky" : "header"}>
      <div className="container">
        <div className="header__logo">
          <Link href="/">
            <img src="../img/sycon-logooo.png" alt="sycon logo" />
          </Link>
        </div>
        <div className="header__menu">
          <ul className="header__anchor-nav">
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
              <Link href="/contact" alt="contact us">
                Contact
              </Link>
            </li>
            <li className="header-btn">
              <Link href="/book-now" alt="book now">
                Book Now
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
