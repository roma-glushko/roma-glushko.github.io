
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithubAlt, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

import "./social-links.css"

const SocialLinks = () => {
  return (
    <div className="social">
        <ul className="social-list">
            <li className="social-item"><a href="https://twitter.com/roma_glushko" title="Roman Glushko on Twitter" target="blank"><FontAwesomeIcon icon={faTwitter} size="sm" /></a></li>
            <li className="social-item"><a href="https://github.com/roma-glushko" title="Roman Glushko on Github" target="blank"><FontAwesomeIcon icon={faGithubAlt} size="sm" /></a></li>
            <li className="social-item"><a href="https://www.linkedin.com/in/glushko-roman" title="Roman Glushko on LinkedIn" target="blank"><FontAwesomeIcon icon={faLinkedinIn} size="sm" /></a></li>
            <li className="social-item"><a href="mailto:roman.glushko.m@gmail.com" title="Roman Glushko's Email"><FontAwesomeIcon icon={faEnvelope} size="sm" /></a></li>
        </ul>
    </div>
  );
};

export default SocialLinks;