import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby"
import Img from "gatsby-image"

import "./thought-teaser.css"

const ThoughtTeaser = (props) => {

    const {
        title,
        url,
        timeToRead,
        publishedHumanDate,
        publishedFullDate,
        excerpt,
        cover,
    } = props;

    return (
        <article className="thought-item">
            <h2><Link to={url}>{title}</Link></h2>
            <div className="thought-details">
                <time className="thought-createdat" dateTime={publishedFullDate}>{publishedHumanDate}</time>
                <span> • </span>
                <span className="thought-time2read">{timeToRead} min read</span>
            </div>
            <Link to={url}>
                <div className="cover-filter">
                    <Img className="cover" fluid={cover.childImageSharp.fluid} />
                </div>
            </Link>
            <p className="thought-digest">{excerpt}</p>
        </article>
    );
};

ThoughtTeaser.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    timeToRead: PropTypes.number.isRequired,
    publishedDate: PropTypes.string.isRequired,
    excerpt: PropTypes.string.isRequired,
}

export default ThoughtTeaser