import React from 'react'
import { Link } from "gatsby"

import './video.css'

class Video extends React.Component {

  componentDidMount() {
    let video = document.querySelector("#video-background");
    video.msHorizontalMirror = true;

    if (navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: true, audio: false })
        .then(function (stream) {
          video.srcObject = stream;
        })
        .catch(function (err0r) {
          console.log("Something went wrong!");
        })
    }
  }

  render() {
    return <video id="video-background" className="video-background" playsInline={true} autoPlay={true}>
      No Video
    </video>
  }
}

export default Video