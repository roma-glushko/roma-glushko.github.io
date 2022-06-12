import React from "react"
import PropTypes from "prop-types"
import { GatsbyImage } from "gatsby-plugin-image"

import MainNavigation from "../theme/main-navigation"
import ThemeSwitcher from "../theme/theme-switcher"

import "./thought.css"
import "../theme/content.css"

const Thought = (props) => {
  const {
    title,
    timeToRead,
    publishedHumanDate,
    publishedFullDate,
    contentHtml,
    cover,
    coverCredits,
  } = props

  return (
    <article className="thought-wrapper">
      <header>
        <figure className="cover">
          <div className="cover-filter">
            <GatsbyImage
              className="cover cover-image"
              image={cover}
              alt={title}
            />
          </div>
          <figcaption
            className="image-title"
            dangerouslySetInnerHTML={{ __html: coverCredits }}
          />
        </figure>
        <MainNavigation space={"thoughts"} />
        <h1>{title}</h1>
        <div className="thought-details">
          <time className="thought-createdat" dateTime={publishedFullDate}>
            {publishedHumanDate}
          </time>
          <span> • </span>
          <span className="thought-time2read">{timeToRead}{timeToRead > 1 ? "mins": "min"} read</span>
          <div className="theme-switcher">
            <ThemeSwitcher />
          </div>
        </div>
      </header>
      <div id="intro" className="thought-divider" />
      <div
        className="content thought-content"
        dangerouslySetInnerHTML={{ __html: contentHtml }}
      />
      <div id="content-end" />
    </article>
  )
}

Thought.propTypes = {
  title: PropTypes.string.isRequired,
  timeToRead: PropTypes.number.isRequired,
  publishedHumanDate: PropTypes.string.isRequired,
  publishedFullDate: PropTypes.string.isRequired,
  contentHtml: PropTypes.string.isRequired,
}

export default Thought
