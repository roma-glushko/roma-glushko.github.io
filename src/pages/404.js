import React from "react"

import Layout from "../components/layout"
import Logo from "../components/logo"
import SEO from "../components/seo"
import Typist from 'react-typist';

import "../components/index.css"

const IndexPage = () => (
    <Layout>
        <SEO title = "About Me" />
        <div class="container">
            <div className="row">
                <div className="content">
                    <div>
                        <Logo />
                    </div>
                    <div>
                        <h1 className="title">Roman Glushko</h1>
                        <div>
                            <Typist>
                                Web Developer
                            </Typist>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
)

export default IndexPage