import React from "react"

import Layout from "../components/theme/layout"
import SEO from "../components/seo"
import PersonRichSnippet from "../components/homepage/person-rich-snippet"
import Avatar from "../components/homepage/avatar"
import ThemeSwitcher from "../components/theme/theme-switcher"
import ReactRotatingText from "react-rotating-text"
import MainNavigation from "../components/theme/main-navigation"
import SocialLinks from "../components/homepage/social-links"
import NNBackground from "../components/nn-design/nn-background"
import { Link } from "gatsby"

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

const IndexPage = () => (
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
        </main>
        <PersonRichSnippet />
    </Layout>
)

export default IndexPage