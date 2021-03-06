import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/theme/layout"
import SEO from "../components/seo"
import PersonRichSnippet from "../components/homepage/person-rich-snippet"
import Avatar from "../components/homepage/avatar"
import ThemeSwitcher from "../components/theme/theme-switcher"
import ReactRotatingText from "react-rotating-text"
import MainNavigation from "../components/theme/main-navigation"
import BlogTeaser from "../components/blog/blog-teaser"
import ThoughtTeaser from "../components/thoughts/thought-teaser"
import SocialLinks from "../components/homepage/social-links"
import NNBackground from "../components/nn-design/nn-background"

import "./indexv2.css"

const shuffleArray = arr => arr.sort(() => Math.random() - 0.5);

const titles = shuffleArray([
    'Web Developer 🛠',
    'Magento Specialist 🛒',
    'Golang Enthusiast 🐹',
    'Human 🧔',
    'ML Engineer 🔬',
    'Passive Traveler 🏕',
    'Open Source Lover 👨‍👩‍👧‍👦',
    'Matzah Fan ✡️',
    '5x Magento Certified 🏅',
    'Problem Solver 🧠',
    'Torah Follower 🕎',
    'eCommerce Explorer 💳',
    'SEO Strategist 🔎',
    'Tea Drinker 🍵',
    'Pythonista 🐍',
    'Idea Generator 💡',
    'Scooter Driver 🛴',
    'Software Engineer 👨‍💻',
    'Life Explorer 🧗‍♂️',
    'Rookie Hacker 🔐',
])

const IndexPage = () => {
    const {recentPosts, recentThoughts} = useStaticQuery(
        graphql`
          query {
            recentPosts: allMarkdownRemark(
                sort: {order: DESC, fields: [frontmatter___date]}, 
                limit: 2, 
                filter: {
                    fileAbsolutePath: {regex: "/(blog)/"}, 
                    frontmatter: {published: {eq: true}}
                }) {
                    edges {
                        node {
                            id
                            timeToRead
                            frontmatter {
                            humanDate: date(formatString: "MMM D, YYYY")
                            fullDate: date(formatString: "YYYY-MM-DD")
                            path
                            title
                            keywords
                            excerpt
                            cover {
                                childImageSharp {
                                  fluid(maxWidth: 400) {
                                    ...GatsbyImageSharpFluid
                                  }
                                }
                            }
                        }
                    }
                }
            }
            recentThoughts: allMarkdownRemark(
                    sort: {order: DESC, fields: [frontmatter___date]}, 
                    limit: 2, 
                    filter: {
                        fileAbsolutePath: {regex: "/(thoughts)/"}, 
                        frontmatter: {published: {eq: true}}
                    }) {
                        edges {
                            node {
                                id
                                timeToRead
                                excerpt(pruneLength: 100)
                                frontmatter {
                                    humanDate: date(formatString: "MMM D, YYYY")
                                    fullDate: date(formatString: "YYYY-MM-DD")
                                    path
                                    title
                                    keywords
                                    cover {
                                        childImageSharp {
                                        fluid(maxWidth: 400) {
                                            ...GatsbyImageSharpFluid
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
          }
        `
      )
    
    return (
    <Layout>
        <SEO title="Roman Glushko - Machine Learning Engineer, Magento eCommerce Software Developer and Life Explorer" isUniqueTitle={true} className="home-page-v2" pagePath="/" />
        <main className="homepagev2">
            <div className="intro">
                <div id="hero-header" className="hero-header homepage-sidebar">
                    <NNBackground />
                    <figure className="hero-intro">
                        <div className="logo">
                            <div className="avatar">
                                <Avatar />
                            </div>
                        </div>
                        <h1 className="name">
                            <span className="first-name">Roman</span> <span className="second-name">Glushko</span>
                        </h1>
                        <div className="title">
                            <ReactRotatingText items={titles} />
                        </div>
                        <MainNavigation space={"homepage"} />
                        <SocialLinks iconSize="sm" />
                        <div className="theme-switcher">
                            <ThemeSwitcher />
                        </div>
                    </figure>
                </div>
            </div>
            <div className="mylife">
                <div>
                    <p className="hey">Hey,</p>
                    <p>My name is Roman 👋</p>
                    <p>I'm a Machine Learning and Software Engineer, Science Geek and Life Explorer.</p>
                </div>
                <div>
                    <h2 className="activity-title">Learn & Share</h2>
                    <div>
                        <p>I'm a life-time learner interested in a broad variety of topics: Machine and Deep Learning, Science-related Theory, Computer Science, Software Engineering, Distributed System Design, eCommerce and so on.</p>
                        <p>When I have spare time, I enjoy putting together my knowledge about those topics and share with other people. </p>
                        <div className="recent-posts">
                            {recentPosts.edges.map(({node}) => (
                                <BlogTeaser
                                    key={node.id}
                                    title={node.frontmatter.title}
                                    url={node.frontmatter.path}
                                    timeToRead={node.timeToRead}
                                    publishedHumanDate={node.frontmatter.humanDate}
                                    publishedFullDate={node.frontmatter.fullDate}
                                    excerpt={node.frontmatter.excerpt}
                                    cover={node.frontmatter.cover}
                                    keywords={node.frontmatter.keywords}
                                />
                            ))}
                        </div>
                    </div>
                </div>
                <div>
                    <h2 className="activity-title">Think & Write</h2>
                    <div>
                        <p>Another thing I like to do is to explore this worlds, think about its components, their interconnections and finally capture my observations and thoughts. </p>
                        <p>There thoughts are usually about self-development, management and people perceptions and mindsets.</p>

                        <div className="recent-thoughts">
                            {recentThoughts.edges.map(({node}) => (
                                <ThoughtTeaser
                                    key={node.id}
                                    title={node.frontmatter.title}
                                    url={node.frontmatter.path}
                                    timeToRead={node.timeToRead}
                                    publishedHumanDate={node.frontmatter.humanDate}
                                    publishedFullDate={node.frontmatter.fullDate}
                                    excerpt={node.excerpt}
                                    cover={node.frontmatter.cover}
                                />
                            ))}
                        </div>
                    </div>
                </div>
                {/* <div>
                    <h2>Code & Open Source</h2>
                </div> */}
                {/* <div>
                    <h2>Experiment & Deploy</h2>
                </div> */}
                <div>
                    <h2 className="activity-title">Work & Help</h2>
                    <div>
                        <p>If you have a great challenge to solve with Machine Learning and Software Engineering, feel free to let me know! </p>
                        <p>Here is my CVs, by the way: </p>

                        Insert CVs here
                    </div>
                </div>
            </div>
        </main>
        <PersonRichSnippet />
    </Layout>)
}


export default IndexPage