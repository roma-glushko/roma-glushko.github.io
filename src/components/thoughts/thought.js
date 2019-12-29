import React from "react";
import PropTypes from "prop-types";

import ThemeSwitcher from "../theme/theme-switcher"

import "./thought.css"
import "./thought-content.css"

const Thought = (props) => {

    const {
        title,
        timeToRead,
        publishedDate,
        contentHtml,
    } = props;

    return (
        <article className="thought-wrapper">
            <header>
                <h1>{title}</h1>
                <div className="thought-details">
                    <time className="thought-createdat">{publishedDate}</time>
                    <span> • </span>
                    <span className="thought-time2read">{timeToRead} min read</span>
                    <div className="theme-switcher">
                        <ThemeSwitcher />
                    </div>
                </div>
            </header>
            <div className="thought-divider" />
            <div
                className="thought-content"
                dangerouslySetInnerHTML={{ __html: contentHtml }}
            />
        </article>
    );
};

Thought.propTypes = {
    title: PropTypes.string.isRequired,
    timeToRead: PropTypes.number.isRequired,
    publishedDate: PropTypes.string.isRequired,
    contentHtml: PropTypes.string.isRequired,
  };

export default Thought;