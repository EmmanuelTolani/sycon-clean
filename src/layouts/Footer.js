import React from "react";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__logo">
          <img src="../img/sycon-logo.png" />
        </div>
        <ul className="footer__socials">
          <li>
            <Link href="#" alt="instagram">
              <i className="fa-brands fa-instagram"></i>
            </Link>
          </li>
          <li>
            <Link href="#" alt="twitter">
              <i className="fa-brands fa-twitter"></i>
            </Link>
          </li>
          <li>
            <Link href="#" alt="youtube">
              <i className="fa-brands fa-youtube"></i>
            </Link>
          </li>
          <li>
            <Link href="#" alt="linkedin">
              <i className="fa-brands fa-linkedin-in"></i>
            </Link>
          </li>
          <li>
            <Link href="#" alt="facebook">
              <i className="fa-brands fa-facebook-f"></i>
            </Link>
          </li>
        </ul>
        <div className="footer__copyright">
          <span>&copy; 2022 - All Rights Are Reserved</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
