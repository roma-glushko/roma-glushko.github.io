import React from "react"

import Layout from "../components/layout"
import Logo from "../components/logo"
import SEO from "../components/seo"
import Typewriter from 'typewriter-effect';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithubAlt, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

import "../components/index.css"

const titles = [
    'Web Developer', 
    'Magento Specialist', 
    'Golang Enthusiast', 
    'Human', 
    'DataScience Noobie', 
    'Passive Traveler',
    'OpenSource Lover',
    'Matzah Fan',
    '3x Magento Certified',
]

const IndexPage = () => (
    <Layout>
        <SEO title = "Nice to meet you 👋" />
        <div class="container">
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
                            <Typewriter options={{
                                strings: titles,
                                autoStart: true,
                                loop: true,
                            }} />
                        </div>
                    </div>
                    <div className="social">
                        <ul>
                            <li><a href="mailto:roman.glushko.m@gmail.com"><FontAwesomeIcon icon={faEnvelope} size="lg" /></a></li>
                            <li><a href="https://github.com/roma-glushko" target="blank"><FontAwesomeIcon icon={faGithubAlt} size="lg" /></a></li>
                            <li><a href="https://twitter.com/roma_glushko" target="blank"><FontAwesomeIcon icon={faTwitter} size="lg" /></a></li>
                            <li><a href="https://www.linkedin.com/in/glushko-roman" target="blank"><FontAwesomeIcon icon={faLinkedinIn} size="lg" /></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
)

export default IndexPage