import React from "react";
import PropTypes from "prop-types";
import { GatsbyImage } from "gatsby-plugin-image"

import ThemeSwitcher from "../theme/theme-switcher"
import BlogContentNavigation from "./blog-content-navigation"

import "./blog-post.css"
import "../theme/content.css"
import "./code-theme.css"

const BlogPost = (props) => {

    const {
        title,
        timeToRead,
        publishedHumanDate,
        publishedFullDate,
        keywords,
        contentHtml,
        cover,
        coverCredits,
    } = props;

    return (
        <article className="blog-wrapper">
            <header>
                <figure className="cover">
                    <div className="cover-filter">
                        <GatsbyImage className="cover-image" image={ cover.childImageSharp.gatsbyImageData } />
                    </div>
                    <figcaption className="image-title" dangerouslySetInnerHTML={{ __html: coverCredits }}></figcaption>
                </figure>
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
            <div id="intro" className="blog-divider" />
            <div className="content-wrapper">
                <BlogContentNavigation />
                <div
                    className="content blog-content"
                    dangerouslySetInnerHTML={{ __html: contentHtml }}
                />
            </div>
            <div id="content-end" />
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
    cover: PropTypes.string.isRequired,
}

export default BlogPost;