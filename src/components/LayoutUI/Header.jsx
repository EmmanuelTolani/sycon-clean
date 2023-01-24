import React, { useState, useLayoutEffect, useRef } from "react";
import Link from "next/link";
import Script from "next/script";
import BookBtn from "./BookBtn";

const Header = () => {
  const stickyHeader = useRef();
  useLayoutEffect(() => {
    const topHeader = document.getElementById("header");
    let fixedTop = stickyHeader.current.offsetTop;
    const fixedHeader = () => {
      if (window.pageYOffset > fixedTop) {
        topHeader.classList.add("sticky");
      } else {
        topHeader.classList.remove("sticky");
      }
    };
    window.addEventListener("scroll", fixedHeader);
  }, []);

  return (
    <>
      <Script
        strategy="beforeInteractive"
        src="https://d3ey4dbjkt2f6s.cloudfront.net/assets/static_link/work_request_embed_dialog_snippet.js"
        form_url="https://clienthub.getjobber.com/client_hubs/2f0de348-75ef-4583-bf91-f83911c3f4d6/public/work_request/embedded_dialog_work_request_form"
        clienthub_id="2f0de348-75ef-4583-bf91-f83911c3f4d6"
      />
      <div className="header" id="header" ref={stickyHeader}>
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
                <BookBtn />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
