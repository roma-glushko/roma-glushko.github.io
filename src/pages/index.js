import React from "react"

import Layout from "../components/theme/layout"
import SEO from "../components/seo"
import PersonRichSnippet from "../components/homepage/person-rich-snippet"
import Avatar from "../components/homepage/avatar"
import ThemeSwitcher from "../components/theme/theme-switcher"
import ReactRotatingText from 'react-rotating-text';
import MainNavigation from "../components/homepage/main-navigation"
import SocialLinks from "../components/homepage/social-links"
import { Link } from "gatsby"

import "./index.css"

const shuffleArray = arr => arr.sort(() => Math.random() - 0.5);

const titles = shuffleArray([
    'Web Developer 🛠', 
    'Magento Specialist 🛒', 
    'Golang Enthusiast 🐹', 
    'Human 🧔', 
    'AI Researcher 🔬', 
    'Passive Traveler 🏕',
    'OpenSource Lover 🤝',
    'Matzah Fan ✡️',
    '5x Magento Certified 🏅',
    'Problem Solver 🧠',
    'Torah Follower 🕎',
    'eCommerce Explorer 💳',
    'SEO Strategist 🔎',
    'Tea Drinker 🍵',
])

const IndexPage = () => (
    <Layout>
        <SEO title = "Roman Glushko - Machine Learning Engineer, Magento Software Developer, E-commerce Specialist and Life Explorer 🧔🛠👨‍💻📚" isUniqueTitle={true} className="home-page" pagePath="/" />
        <main className="container">
            <div className="row">
                <div className="column sidebar">
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
                    <MainNavigation />
                    <SocialLinks />
                    <div className="theme-switcher">
                        <ThemeSwitcher />
                    </div>
                </div>
                <div className="column my-story-content">
                    <div class="intro">
                        <p class="hey">Hey, I'm Roman 👋</p>
                        <p class="title-summary">
                            <a href="https://www.linkedin.com/in/glushko-roman/" target="blank">AI Researcher, Magento Software Engineer and eCommerce Specialist</a> 💼
                        </p>
                    </div>

                    <p>I have been doing software engineering for more than five years now. Most of this time, I was working as a Magento Software Engineer 💻 at <a href="https://www.atwix.com/" target="blank">Atwix Inc.</a></p>
                    <p>After some time, I took a technical lead position 👔 and was leading several teams at the company. We had been helping merchants from around the globe to run their business on <a href="https://magento.com/" target="blank">Magento</a>. During that time, I learned how to translate business problems into software solutions, automate processes and work with people. Also, I have passed 5 Magento certifications to expand my knowledge 🏅</p>
                    <p>I have started <a href="https://www.atwix.com/tag/magenews/" target="blank">Atwix MageNews digest</a> 🗞 It's a monthly roundup of the most important news and updates from the Magento community. It's useful for everyone: from developers to merchants 🤝 </p>
                    <p><strong>Most importantly</strong> I have decided to take a learning sabbatical recently. The goal is to obtain a Machine Learning Nanodegree 👨‍🔬 and help to transform this world and our lives with AI-based systems. I know this is a big rock. So it's time to <Link to="/tech/">LEARN</Link>📚</p>
                    <p>For dessert, innovations and fresh ideas always drive me. That's why I do <a href="https://github.com/roma-glushko?tab=repositories" target="blank">open source projects</a>🛠 and journaling <Link to="/thoughts/">my thoughts</Link>✏️ You may find them useful as well.</p>
                </div>
            </div>
        </main>
        <PersonRichSnippet />
    </Layout>
)

export default IndexPage