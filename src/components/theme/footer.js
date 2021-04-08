
import React from "react"
import SocialLinks from "../homepage/social-links"

import "./footer.css"

const Footer = () => {
  return (
    <footer>
      <div className="footer-wrapper">
        <SocialLinks iconSize="2x" />
        <div className="copyright">
          Roman Glushko © 1996 - {new Date().getFullYear()}
        </div>
      </div>
    </footer>
  );
};

export default Footer;