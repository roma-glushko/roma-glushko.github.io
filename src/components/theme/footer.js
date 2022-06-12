import React from "react"
import SocialLinks from "../homepage/social-links"

import "./footer.css"

const Footer = () => {
  return (
    <footer>
      <div className="footer-wrapper">
        <SocialLinks iconSize="2x" />
        <div className="copyright">
          Roman Glushko © 1996 - {new Date().getFullYear()} <br />
          <a
            rel="license"
            href="https://creativecommons.org/licenses/by/4.0/"
            title="Content is published under CC BY 4.0 license"
          >
            CC BY 4.0
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
