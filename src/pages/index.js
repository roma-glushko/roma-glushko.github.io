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
import Footer from "../components/theme/footer"

import "./index.css"

const shuffleArray = arr => arr.sort(() => Math.random() - 0.5);

const titles = shuffleArray([
    'Web Developer 🛠',
    'Golang Enthusiast 🐹',
    'Human with a beard 🦁',
    'ML Engineer 🔬',
    'Passive Traveler 🏕',
    'Open Source Contributor 👨‍👩‍👧‍👦',
    'Matzah and Hamantashen Fan ✡️',
    '5x Magento Certified 🏅',
    'Problem Solver 🧠',
    'Torah Follower 🕎',
    'eCommerce Specialist 🛒',
    'Tea Guy 🍵',
    'Pythonista 🐍',
    'Idea Generator 💡',
    'Scooter Driver 🛴',
    'Software Engineer 👨‍💻',
    'Life Explorer 🧗‍♂️',
    'Science Learner 🚀',
    'Rookie Hacker 🔐',
    'Lifelong Student 📚',
    'AI Evangelist 🔮',
    'Hobby Blogger ✍️',
    'Shabbat Enjoyer 🍇',
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
                    limit: 3, 
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
        <SEO title="Roman Glushko - Machine Learning and Software Engineer, Life Explorer" isUniqueTitle={true} className="home-page-v2" pagePath="/" />
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
                        <p>I'm a lifetime learner interested in a broad variety of topics: Machine and Deep Learning, Science-related Theory, Computer Science, Software Engineering, Distributed System Design, eCommerce and so on.</p>
                        <p>When I have spare time, I enjoy putting together my knowledge about those topics and share with others. </p>
                        <div className="recent-posts">
                            {recentPosts.edges.map(({node: {id, timeToRead, frontmatter}}) => (
                                <BlogTeaser
                                    key={id}
                                    title={frontmatter.title}
                                    url={frontmatter.path}
                                    timeToRead={timeToRead}
                                    publishedHumanDate={frontmatter.humanDate}
                                    publishedFullDate={frontmatter.fullDate}
                                    excerpt={frontmatter.excerpt}
                                    cover={frontmatter.cover}
                                    keywords={frontmatter.keywords}
                                />
                            ))}
                        </div>
                        <div className="all-button-wrapper">
                            <a className="read-all-button" href="/blog/">Read All Posts</a>
                        </div>
                    </div>
                </div>
                <div>
                    <h2 className="activity-title">Think & Write</h2>
                    <div>
                        <p>Another thing I like to do is to explore this world, think about its components, their interconnections and finally capture my observations and thoughts. </p>
                        <p>These thoughts are usually about self-development, management and people perceptions and mindsets.</p>
                        <div className="recent-thoughts">
                            {recentThoughts.edges.map(({node: {id, timeToRead, excerpt, frontmatter}}) => (
                                <ThoughtTeaser
                                    key={id}
                                    title={frontmatter.title}
                                    url={frontmatter.path}
                                    timeToRead={timeToRead}
                                    publishedHumanDate={frontmatter.humanDate}
                                    publishedFullDate={frontmatter.fullDate}
                                    excerpt={excerpt}
                                    cover={frontmatter.cover}
                                />
                            ))}
                        </div>
                        <div className="all-button-wrapper">
                            <a className="read-all-button" href="/thoughts/">Read All Thoughts</a>
                        </div>
                    </div>
                </div>
                {/* <div>
                    <h2>Code & Open Source</h2>
                </div> */}
                {/* <div>
                    <h2>Experiment & Deploy</h2>
                </div> */}
                {/* <div>
                    <h2 className="activity-title">Work & Help</h2>
                    <div>
                        <p>If you have a great challenge to solve with Machine Learning and Software Engineering, feel free to let me know! </p>
                        <p>Here is my CVs, by the way: </p>

                        Insert CVs here
                    </div>
                </div> */}
            </div>
        </main>
        <Footer />
        <PersonRichSnippet />
    </Layout>)
}


export default IndexPage