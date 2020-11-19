import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithubAlt, faTwitter, faLinkedinIn, faKaggle } from '@fortawesome/free-brands-svg-icons'

import "./social-links.css"

const SocialLinks = ({ iconSize }) => {
  return (
    <div className="social">
      <ul className="social-list">
        <li className="social-item social-twitter"><a href="https://twitter.com/roma_glushko" title="Roman Glushko on Twitter" target="blank"><FontAwesomeIcon icon={faTwitter} size={iconSize} /></a></li>
        <li className="social-item social-github"><a href="https://github.com/roma-glushko" title="Roman Glushko on Github" target="blank"><FontAwesomeIcon icon={faGithubAlt} size={iconSize} /></a></li>
        <li className="social-item social-linkedin"><a href="https://www.linkedin.com/in/glushko-roman" title="Roman Glushko on LinkedIn" target="blank"><FontAwesomeIcon icon={faLinkedinIn} size={iconSize} /></a></li>
        <li className="social-item social-email"><a href="mailto:roman.glushko.m@gmail.com" title="Roman Glushko's Email"><FontAwesomeIcon icon={faEnvelope} size={iconSize} /></a></li>
        <li className="social-item social-kaggle"><a href="https://www.kaggle.com/glushko" title="Roman Glushko on Kaggle" target="blank"><FontAwesomeIcon icon={faKaggle} size={iconSize} /></a></li>
      </ul>
    </div>
  );
};

export default SocialLinks;