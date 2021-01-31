import React from 'react'
import { Link } from "gatsby"
import NNBackground from "../nn-design/nn-background.js"

import "./lab-header.css"

const LabHeader = () => {
  return (
    <div id="hero-header" className="lab-header">
      <NNBackground />
      <h1 className="title">
        <span className="highlight">Lab</span> <br/> 
        Machine Learning Experiments <br/> 
        <span className="subscript">Live <div className="live-circle pulse"></div></span>
      </h1>
    </div>
  )
}

export default LabHeader