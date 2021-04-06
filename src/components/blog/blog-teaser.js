import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby"
import Img from "gatsby-image"

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
    } = props;

    return (
        <article className="blog-item">
            <Link to={url}>
                <div className="cover-filter">
                    <Img className="cover" fluid={cover.childImageSharp.fluid} />
                </div>
            </Link>
            <h2><Link to={url}>{title}</Link></h2>
            <div className="blog-details">
                <time className="blog-created-at" dateTime={publishedFullDate}>{publishedHumanDate}</time>
                <span> • </span>
                <span className="blog-time2read">{timeToRead} min read</span>
            </div>
            <p className="blog-digest">{excerpt}</p>
            <ul className="blog-tags">
                {keywords.map(keyword => (
                    <li>{keyword}</li>
                ))}
            </ul>
        </article>
    );
};

BlogTeaser.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    timeToRead: PropTypes.number.isRequired,
    publishedDate: PropTypes.string.isRequired,
    excerpt: PropTypes.string.isRequired,
  };

export default BlogTeaser;