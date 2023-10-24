import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="divider"></div>
      <div className="footer__wrap">
        <div className="nav__logo">
          <h1>
            Movie<span className="teal-gradient">Go</span>
          </h1>
        </div>
        <p className="footer__p">© 2023 MovieGo All Rights Reserved</p>
        <div className="footer__socials">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            className="footer__social--wrap"
          >
            Facebook
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            className="footer__social--wrap"
          >
            Twitter
          </a>
          <a
            href="https://github.com/MahdiT54"
            target="_blank"
            className="footer__social--wrap"
          >
            Github
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
