import React from "react";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__logo">
          <img src="../img/sycon-logo.png" alt="sycon logo" />
        </div>
        <ul className="footer__socials">
          <li>
            <Link
              href="https://www.instagram.com/"
              alt="instagram"
              aria-label="Instagram"
              target={"_blank"}
            >
              <i className="fa-brands fa-instagram"></i>
            </Link>
          </li>
          <li>
            <Link
              href="https://www.twitter.com/"
              alt="twitter"
              aria-label="Twitter"
              target={"_blank"}
            >
              <i className="fa-brands fa-twitter"></i>
            </Link>
          </li>
          <li>
            <Link
              href="https://www.youtube.com/"
              alt="youtube"
              aria-label="Youtube"
              target={"_blank"}
            >
              <i className="fa-brands fa-youtube"></i>
            </Link>
          </li>
          <li>
            <Link
              href="https://www.linkedin.com/"
              alt="linkedin"
              aria-label="Linkedin"
              target={"_blank"}
            >
              <i className="fa-brands fa-linkedin-in"></i>
            </Link>
          </li>
          <li>
            <Link
              href="https://www.facebook.com/"
              alt="facebook"
              aria-label="Facebook"
              target={"_blank"}
            >
              <i className="fa-brands fa-facebook-f"></i>
            </Link>
          </li>
        </ul>
        <div className="footer__copyright">
          <p>&copy; 2022 - All Rights Are Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
