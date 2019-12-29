import React from "react"

import Layout from "../components/theme/layout"
import Avatar from "../components/homepage/avatar"
import SEO from "../components/seo"
import ThemeSwitcher from "../components/theme/theme-switcher"
import ReactRotatingText from 'react-rotating-text';
import SocialLinks from "../components/homepage/social-links"

import "../components/homepage/index.css"

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
    '4x Magento Certified 🏅',
    'Problem Solver 🧠',
    'Torah Follower 🕎',
    'eCommerce Explorer 💳',
])

const IndexPage = () => (
    <Layout>
        <SEO title = "About Me" className="home-page" />
        <main className="container">
            <div className="row">
                <div className="content">
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
                    <nav>
                        <ul>
                            <li>Thoughts</li>
                        </ul>
                    </nav>
                    <SocialLinks />
                    <div className="theme-switcher">
                        <ThemeSwitcher />
                    </div>
                </div>
            </div>
        </main>
    </Layout>
)

export default IndexPage