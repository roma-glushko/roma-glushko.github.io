import React from "react"

import Layout from "../components/theme/layout"
import SEO from "../components/seo"
import PersonRichSnippet from "../components/homepage/person-rich-snippet"
import Avatar from "../components/homepage/avatar"
import ThemeSwitcher from "../components/theme/theme-switcher"
import ReactRotatingText from "react-rotating-text"
import MainNavigation from "../components/theme/main-navigation"
import SocialLinks from "../components/homepage/social-links"
import { Link } from "gatsby"

import "./index.css"

const shuffleArray = arr => arr.sort(() => Math.random() - 0.5);

const titles = shuffleArray([
    'Web Developer 🛠',
    'Magento Specialist 🛒',
    'Golang Enthusiast 🐹',
    'Human 🧔',
    'ML Engineer 🔬',
    'Passive Traveler 🏕',
    'OpenSource Lover 🤝',
    'Matzah Fan ✡️',
    '5x Magento Certified 🏅',
    'Problem Solver 🧠',
    'Torah Follower 🕎',
    'eCommerce Explorer 💳',
    'SEO Strategist 🔎',
    'Tea Drinker 🍵',
    'Pythonista 🐍',
    'Idea Generator 💡',
])

const IndexPage = () => (
    <Layout>
        <SEO title="Roman Glushko - Machine Learning Engineer, Magento eCommerce Software Developer and Life Explorer" isUniqueTitle={true} className="home-page" pagePath="/" />
        <main className="container">
            <div className="row">
                <div className="column homepage-sidebar sidebar">
                    <div className="logo">
                        <div className="avatar">
                            <Avatar />
                        </div>
                    </div>
                    <div className="main">
                        <h1 className="name">
                            <span className="first-name">Roman</span> <span className="second-name">Glushko</span>
                        </h1>
                        <div className="title">
                            <ReactRotatingText items={titles} />
                        </div>
                    </div>
                    <MainNavigation space={"homepage"} />
                    <SocialLinks iconSize="sm" />
                    <div className="theme-switcher">
                        <ThemeSwitcher />
                    </div>
                </div>
                <div className="column my-story-content">
                    <div className="intro">
                        <p className="hey">Hey, I'm Roman <span role="img">👋</span></p>
                        <p className="title-summary">
                            <a href="https://www.linkedin.com/in/glushko-roman/" target="blank">AI Researcher and Magento eCommerce Software Engineer</a> <span role="img">💼</span>
                        </p>
                    </div>
                    <p>I have been doing software engineering for more than five years now. Most of this time, I was working as a Magento Software Engineer <span role="img">💻</span> at <a href="https://www.atwix.com/" target="blank">Atwix Inc.</a></p>
                    <p>After some time, I grew to a technical lead position and was leading several teams at the company <span role="img">🌱</span> We had been helping merchants from around the globe to run their business on <a href="https://magento.com/" target="blank">Magento</a> 🛒 I learned how to translate business problems into software solutions, automate processes and work with people <span role="img">🙌</span> Also, I have passed 5 Magento certifications to expand my knowledge <span role="img">🏅</span></p>
                    <p>I started <a href="https://www.atwix.com/tag/magenews/" target="blank">Atwix MageNews digest</a> <span role="img">🗞</span> It's a monthly roundup of the most important news and updates from the Magento community. It's useful for everyone: from developers to merchants <span role="img">🤝</span> </p>
                    <p><strong>Most importantly</strong> I have decided to take a learning sabbatical recently. The goal is to obtain a Machine Learning Nanodegree <span role="img">👨‍🔬</span> and help to transform this world and our lives with AI-based systems. I know this is a big rock. So it's time to <Link to="/blog/">LEARN</Link><span role="img">📚</span></p>
                    <p>For dessert, innovations and fresh ideas always drive me. That's why I do <a href="https://github.com/roma-glushko?tab=repositories" target="blank">open source projects</a><span role="img">🛠</span> and journal <Link to="/thoughts/">my thoughts</Link><span role="img">✏️</span> You may find them useful as well.</p>
                </div>
            </div>
        </main>
        <PersonRichSnippet />
    </Layout>
)

export default IndexPage