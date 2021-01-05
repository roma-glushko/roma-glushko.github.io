import React from 'react'
import { Link } from "gatsby"
import NNBackground from "./nn-background.js"

import "./hero-header.css"

const HeroHeader = () => {
  return (
    <div id="hero-header" className="hero-header">
      <NNBackground />
      <h1 className="title">
        <span className="highlight">Learn</span> <br/> Neural Network Design <br/> <span className="subscript">by examples</span>
      </h1>
    </div>
  )
}

export default HeroHeader