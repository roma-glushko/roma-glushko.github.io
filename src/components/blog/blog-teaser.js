import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

import "./blog-teaser.css"

const BlogTeaser = (props) => {
  const {
    title,
    url,
    timeToRead,
    publishedHumanDate,
    publishedFullDate,
    excerpt,
    cover,
    keywords,
  } = props

  return (
    <article className="blog-item">
      <Link className="article-header" to={url}>
        <div className="cover-filter">
          <GatsbyImage className="cover" image={cover} alt={title} />
        </div>
      </Link>
      <div className="article-details">
        <h2>
          <Link to={url}>{title}</Link>
        </h2>
        <div className="blog-details">
          <time className="blog-created-at" dateTime={publishedFullDate}>
            {publishedHumanDate}
          </time>
          <span> • </span>
          <span className="blog-time2read">
            {timeToRead}
            {timeToRead > 1 ? "mins" : "min"} read
          </span>
        </div>
        <p className="blog-digest">{excerpt}</p>
        <ul className="blog-tags">
          {keywords.map((keyword) => (
            <li key={url + keyword}>{keyword}</li>
          ))}
        </ul>
      </div>
    </article>
  )
}

BlogTeaser.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  timeToRead: PropTypes.number.isRequired,
  publishedFullDate: PropTypes.string.isRequired,
  publishedHumanDate: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
}

export default BlogTeaser
