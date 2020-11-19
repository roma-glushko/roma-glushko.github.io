
import React from "react"
import SocialLinks from "../homepage/social-links"

import "./footer.css"

const Footer = () => {
  /**
   * <div className="footer-separator">
          <span className="separator"></span>
          <span className="separator"></span>
          <span className="separator"></span>
        </div>
   */
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