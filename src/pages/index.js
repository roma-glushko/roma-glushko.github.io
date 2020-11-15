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
                    <p>Over four years, I'm helping merchants from around the globe to run their business on <a href="https://magento.com/" target="blank">Magento</a>. During this time, I learned how to meet business goals with the platform capabilities. I have passed 5 Magento certifications to expand and prove my knowledge.</p>
                    <p>I've been lucky to be part of the <a href="https://www.atwix.com/" target="blank">Atwix family</a> 👨‍👩‍👧‍👦 - open-minded people that support and aspire to grow 🌱 I've been leading a team there for more than three years. Management helped me to get - individuals are one and the only possible asset for every business. Also, it brought me a way more <Link to="/thoughts/">other thoughts</Link>✏️</p>  
                    <p>Magento shaped my carrier and me a lot. So I wanted to find my way to thanks back. I decided to start <a href="https://www.atwix.com/tag/magenews/" target="blank">Atwix MageNews digest</a> 🗞 It's a monthly roundup of the most important news and updates from the Magento community. It's useful for everyone: from developers to merchants 🤝</p>
                    <p>For dessert, innovations and fresh ideas always drive me. That's why I do <a href="https://github.com/roma-glushko?tab=repositories" target="blank">open source projects</a> where I solve my everyday challenges. You will find them useful as well.</p>
                </div>
            </div>
        </main>
        <PersonRichSnippet />
    </Layout>
)

export default IndexPage