import * as React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons/faEnvelope"
import { faGithubAlt } from "@fortawesome/free-brands-svg-icons/faGithubAlt"
import { faTwitter } from "@fortawesome/free-brands-svg-icons/faTwitter"
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons/faLinkedinIn"
import { faKaggle } from "@fortawesome/free-brands-svg-icons/faKaggle"
import { faPatreon } from "@fortawesome/free-brands-svg-icons/faPatreon"
import { OutboundLink } from "gatsby-plugin-google-analytics"

import "./SocialLinks.css"

export type IconSize =
  | "xs"
  | "lg"
  | "sm"
  | "1x"
  | "2x"
  | "3x"
  | "4x"
  | "5x"
  | "6x"
  | "7x"
  | "8x"
  | "9x"
  | "10x"

type Props = {
  iconSize: IconSize
  showPatreon: boolean
}

const SocialLinks = ({
  iconSize = "sm",
  showPatreon = true,
}: Props): JSX.Element => {
  return (
    <div data-nosnippet="" className="social">
      <ul className="social-list">
        <li className="social-item social-linkedin">
          <OutboundLink
            rel="me"
            itemProp="url"
            eventCategory="social"
            eventAction="click"
            eventLabel="linkedin"
            href="https://www.linkedin.com/in/glushko-roman"
            title="Roman Glushko on LinkedIn"
            target="blank"
          >
            <FontAwesomeIcon icon={faLinkedinIn} size={iconSize} />
            <span>LinkedIn</span>
          </OutboundLink>
        </li>
        <li className="social-item social-github">
          <OutboundLink
            rel="me"
            itemProp="url"
            eventCategory="social"
            eventAction="click"
            eventLabel="github"
            href="https://github.com/roma-glushko"
            title="Roman Glushko on Github"
            target="blank"
          >
            <FontAwesomeIcon icon={faGithubAlt} size={iconSize} />
            <span>GitHub</span>
          </OutboundLink>
        </li>
        <li className="social-item social-email">
          <OutboundLink
            itemProp="email"
            eventCategory="social"
            eventAction="click"
            eventLabel="email"
            href="mailto:roman.glushko.m@gmail.com"
            title="Roman Glushko's Email"
          >
            <FontAwesomeIcon icon={faEnvelope} size={iconSize} />
            <span>Email</span>
          </OutboundLink>
        </li>
        <li className="social-item social-kaggle">
          <OutboundLink
            rel="me"
            itemProp="url"
            eventCategory="social"
            eventAction="click"
            eventLabel="kaggle"
            href="https://www.kaggle.com/glushko"
            title="Roman Glushko on Kaggle"
            target="blank"
          >
            <FontAwesomeIcon icon={faKaggle} size={iconSize} />
            <span>Kaggle</span>
          </OutboundLink>
        </li>
        <li className="social-item social-twitter">
          <OutboundLink
            rel="me"
            itemProp="url"
            eventCategory="social"
            eventAction="click"
            eventLabel="twitter"
            href="https://twitter.com/roma_glushko"
            title="Roman Glushko on Twitter"
            target="blank"
          >
            <FontAwesomeIcon icon={faTwitter} size={iconSize} />
            <span>Twitter</span>
          </OutboundLink>
        </li>
        {showPatreon ? (
          <li className="social-item social-patreon">
            <OutboundLink
              rel="me"
              itemProp="url"
              eventCategory="social"
              eventAction="click"
              eventLabel="patreon"
              href="https://www.patreon.com/roma_glushko"
              title="Support my content on Patreon"
              target="blank"
            >
              <FontAwesomeIcon icon={faPatreon} size={iconSize} />
              <span>Patreon</span>
            </OutboundLink>
          </li>
        ) : (
          ""
        )}
      </ul>
    </div>
  )
}

export default SocialLinks
