import React from "react";
import PropTypes from "prop-types";
import Img from "gatsby-image"

import ThemeSwitcher from "../theme/theme-switcher"

import "./blog-post.css"
import "../theme/content.css"

const Thought = (props) => {

    const {
        title,
        timeToRead,
        publishedHumanDate,
        publishedFullDate,
        contentHtml,
        cover,
    } = props;

    return (
        <article className="thought-wrapper">
            <header>
                <div className="cover-filter">
                    <Img className="cover" fluid={ cover.childImageSharp.fluid } />
                </div>
                <h1>{title}</h1>
                <div className="thought-details">
                    <time className="thought-createdat" dateTime={publishedFullDate}>{publishedHumanDate}</time>
                    <span> • </span>
                    <span className="thought-time2read">{timeToRead} min read</span>
                    <div className="theme-switcher">
                        <ThemeSwitcher />
                    </div>
                </div>
            </header>
            <div className="thought-divider" />
            <div
                className="content thought-content"
                dangerouslySetInnerHTML={{ __html: contentHtml }}
            />
        </article>
    );
};

Thought.propTypes = {
    title: PropTypes.string.isRequired,
    timeToRead: PropTypes.number.isRequired,
    publishedHumanDate: PropTypes.string.isRequired,
    publishedFullDate: PropTypes.string.isRequired,
    contentHtml: PropTypes.string.isRequired,
  };

export default Thought;