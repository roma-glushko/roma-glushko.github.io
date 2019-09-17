import React from "react"

import Layout from "../components/layout"
import Logo from "../components/logo"
import SEO from "../components/seo"
import Typewriter from 'typewriter-effect';

import "../components/index.css"

const titles = [
    'Web Developer', 
    'Magento Specialist', 
    'Golang Enthusiast', 
    'Human', 
    'Data Science Noobie', 
    'Passive Traveler',
    'Matzah Fan',
    '2x Magento Certified',
]

const IndexPage = () => (
    <Layout>
        <SEO title = "Nice to meet you 👋" />
        <div class="container">
            <div className="row">
                <div className="content">
                    <div>
                        <Logo />
                    </div>
                    <div>
                        <h1 className="name"><span className="first-name">Roman</span> <span className="second-name">Glushko</span></h1>
                        <div className="title">
                            <Typewriter options={{
                                strings: titles,
                                autoStart: true,
                                loop: true,
                            }} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
)

export default IndexPage