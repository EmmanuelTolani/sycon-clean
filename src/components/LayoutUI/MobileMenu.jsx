import React, { useState, useLayoutEffect, useRef } from "react";
import Link from "next/link";
import Script from "next/script";
import BookBtn from "./BookBtn";
const MobileMenu = () => {
  const [toggle, setToggle] = useState(false);
  const stickyMobileMenu = useRef();
  useLayoutEffect(() => {
    const topMenu = document.getElementById("mobile-menu");
    let fixedTop = stickyMobileMenu.current.offsetTop;
    const fixedMobile = () => {
      if (window.pageYOffset > fixedTop) {
        topMenu.classList.add("sticky");
      } else {
        topMenu.classList.remove("sticky");
      }
    };
    window.addEventListener("scroll", fixedMobile);
  }, []);
  return (
    <>
      <Script
        strategy="beforeInteractive"
        src="https://d3ey4dbjkt2f6s.cloudfront.net/assets/static_link/work_request_embed_dialog_snippet.js"
        form_url="https://clienthub.getjobber.com/client_hubs/2f0de348-75ef-4583-bf91-f83911c3f4d6/public/work_request/embedded_dialog_work_request_form"
        clienthub_id="2f0de348-75ef-4583-bf91-f83911c3f4d6"
      />
      <div className="mobile-menu" id="mobile-menu" ref={stickyMobileMenu}>
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
        <div
          className="dropdown"
          style={{ display: toggle ? "block" : "none" }}
        >
          <div className="dropdown_inner">
            <ul className="anchor_nav">
              <li className="header-btn">
                <BookBtn />
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
    </>
  );
};
export default MobileMenu;
