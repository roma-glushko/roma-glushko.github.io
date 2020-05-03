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
    'DataScience Noobie 🔬', 
    'Passive Traveler 🏕',
    'OpenSource Lover 🤝',
    'Matzah Fan ✡️',
    '5x Magento Certified 🏅',
    'Problem Solver 🧠',
    'Torah Follower 🕎',
    'eCommerce Explorer 💳',
    'SEO Strategist 🔎',
])

const IndexPage = () => (
    <Layout>
        <SEO title = "Roman Glushko - Magento, eCommerce and Life Explorer 🧔🛠👨‍💻📚" isUniqueTitle={true} className="home-page" />
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
                    <p>I'm Roman 👋 <a href="https://www.linkedin.com/in/glushko-roman/" target="blank">Magento Developer</a> and eCommerce Specialist.</p>
                    <p>Over 4 years, I'm helping ambitious merchants from the US and EU to run their business efficiently on Magento ⛳️ During this time, I passed 5 Magento certifications and learned how to align business goals with the platform capabilities.</p>
                    <p>I've been lucky to be part of the <a href="https://www.atwix.com/" target="blank">Atwix family</a> - open-minded people that support and aspire to grow 🤝 I've been leading a team there for more than 3 years. Technical management helps me to get - individuals are one and the only possible asset for every business and <Link to="/thoughts/">other thougths</Link>.</p>  
                    <p>Magento shaped my carrier a lot. I wanted to say thanks back and decided to start <a href="https://www.atwix.com/tag/magenews/" target="blank">Atwix MageNews digest</a> 🗞 - a monthly roundup of Magento news to keep up everyone updated in this beautiful community</p>
                    <p>For dessert, innovations and fresh ideas always drive me. That's why I do <a href="https://github.com/roma-glushko?tab=repositories" target="blank">open source projects</a> where I solve my everyday challenges. Hopefully, you will find them useful as well.</p>
                </div>
            </div>
        </main>
        <PersonRichSnippet />
    </Layout>
)

export default IndexPage