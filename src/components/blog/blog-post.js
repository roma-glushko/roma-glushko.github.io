import React from "react";
import PropTypes from "prop-types";
import Img from "gatsby-image"

import ThemeSwitcher from "../theme/theme-switcher"
import BlogContentNavigation from "./blog-content-navigation"

import "./blog-post.css"
import "../theme/content.css"

const BlogPost = (props) => {

    const {
        title,
        timeToRead,
        publishedHumanDate,
        publishedFullDate,
        keywords,
        contentHtml,
        cover,
    } = props;

    return (
        <article className="blog-wrapper">
            <header>
                <div className="cover-filter">
                    <Img className="cover" fluid={ cover.childImageSharp.fluid } />
                </div>
                <h1>{title}</h1>
                <div className="blog-details">
                    <time className="blog-createdat" dateTime={publishedFullDate}>{publishedHumanDate}</time>
                    <span> • </span>
                    <span className="blog-time2read">{timeToRead} min read</span>
                    <div className="theme-switcher">
                        <ThemeSwitcher />
                    </div>
                </div>
                <ul className="blog-tags">
                {keywords.map(keyword => (
                    <li key={'tag-' + keyword}>{keyword}</li>
                ))}
                </ul>
            </header>
            <div className="blog-divider" />
            <div className="content-wrapper">
                <BlogContentNavigation />
                <div
                    className="content blog-content"
                    dangerouslySetInnerHTML={{ __html: contentHtml }}
                />
            </div>
        </article>
    );
};

BlogPost.propTypes = {
    title: PropTypes.string.isRequired,
    timeToRead: PropTypes.number.isRequired,
    publishedHumanDate: PropTypes.string.isRequired,
    publishedFulDate: PropTypes.string.isRequired,
    keywords: PropTypes.array.isRequired,
    contentHtml: PropTypes.string.isRequired,
  };

export default BlogPost;