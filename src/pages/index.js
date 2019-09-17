import React from "react"

import Layout from "../components/layout"
import Logo from "../components/logo"
import SEO from "../components/seo"
import ThemeSwitcher from "../components/theme-switcher"
import ReactRotatingText from 'react-rotating-text';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithubAlt, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

import "../components/index.css"

const titles = [
    'Web Developer 🛠', 
    'Magento Specialist 🛒', 
    'Golang Enthusiast 🐹', 
    'Human 🧔', 
    'DataScience Noobie 🔬', 
    'Passive Traveler 🏕',
    'OpenSource Lover 🤝',
    'Matzah Fan ✡️',
    '3x Magento Certified 🏅',
]

const IndexPage = () => (
    <Layout>
        <SEO title = "About Me" />
        <div className="container">
            <div className="row">
                <div className="content">
                    <div className="logo">
                        <div className="avatar">
                            <Logo />
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
                    <div className="social">
                        <ul className="social-list">
                            <li className="social-item"><a href="mailto:roman.glushko.m@gmail.com" title="Email"><FontAwesomeIcon icon={faEnvelope} size="sm" /></a></li>
                            <li className="social-item"><a href="https://github.com/roma-glushko" title="Github" target="blank"><FontAwesomeIcon icon={faGithubAlt} size="sm" /></a></li>
                            <li className="social-item"><a href="https://twitter.com/roma_glushko" title="Twitter" target="blank"><FontAwesomeIcon icon={faTwitter} size="sm" /></a></li>
                            <li className="social-item"><a href="https://www.linkedin.com/in/glushko-roman" title="LinkedIn" target="blank"><FontAwesomeIcon icon={faLinkedinIn} size="sm" /></a></li>
                        </ul>
                    </div>
                    <div className="theme-switcher">
                        <ThemeSwitcher />
                    </div>
                </div>
            </div>
        </div>
    </Layout>
)

export default IndexPage