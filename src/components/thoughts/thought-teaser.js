import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby"

import "./thought-teaser.css"

const ThoughtTeaser = (props) => {

    const {
        title,
        url,
        timeToRead,
        publishedHumanDate,
        publishedFullDate,
        excerpt,
    } = props;

    return (
        <article className="thought-item">
            <h2><Link to={url}>{title}</Link></h2>
            <div className="thought-details">
                <time className="thought-createdat" datetime={publishedFullDate}>{publishedHumanDate}</time>
                <span> • </span>
                <span className="thought-time2read">{timeToRead} min read</span>
            </div>
            <p className="thought-digest">{excerpt}</p>
        </article>
    );
};

ThoughtTeaser.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    timeToRead: PropTypes.string.isRequired,
    publishedDate: PropTypes.string.isRequired,
    excerpt: PropTypes.string.isRequired,
  };

export default ThoughtTeaser;