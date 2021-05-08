import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faBriefcase } from '@fortawesome/free-solid-svg-icons'
import { faGithubAlt, faTwitter, faLinkedinIn, faKaggle } from '@fortawesome/free-brands-svg-icons'
import { OutboundLink } from "gatsby-plugin-google-analytics"

import "./social-links.css"

const SocialLinks = ({ iconSize }) => {
  return (
    <div className="social">
      <ul className="social-list">
        <li className="social-item social-twitter"><OutboundLink eventCategory="social" eventAction="click" eventLabel="twitter" href="https://twitter.com/roma_glushko" title="Roman Glushko on Twitter" target="blank"><FontAwesomeIcon icon={faTwitter} size={iconSize} /></OutboundLink></li>
        <li className="social-item social-github"><OutboundLink eventCategory="social" eventAction="click" eventLabel="github" href="https://github.com/roma-glushko" title="Roman Glushko on Github" target="blank"><FontAwesomeIcon icon={faGithubAlt} size={iconSize} /></OutboundLink></li>
        <li className="social-item social-linkedin"><OutboundLink eventCategory="social" eventAction="click" eventLabel="linkedin" href="https://www.linkedin.com/in/glushko-roman" title="Roman Glushko on LinkedIn" target="blank"><FontAwesomeIcon icon={faLinkedinIn} size={iconSize} /></OutboundLink></li>
        <li className="social-item social-email"><OutboundLink eventCategory="social" eventAction="click" eventLabel="email" href="mailto:roman.glushko.m@gmail.com" title="Roman Glushko's Email"><FontAwesomeIcon icon={faEnvelope} size={iconSize} /></OutboundLink></li>
        <li className="social-item social-kaggle"><OutboundLink eventCategory="social" eventAction="click" eventLabel="kaggle" href="https://www.kaggle.com/glushko" title="Roman Glushko on Kaggle" target="blank"><FontAwesomeIcon icon={faKaggle} size={iconSize} /></OutboundLink></li>
      </ul>
    </div>
  );
};

export default SocialLinks;