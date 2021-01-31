import React from 'react'
import { Link } from "gatsby"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons'

import './rock-paper-scissor-game.css'

class RockPaperScissorGame extends React.Component {
  
  constructor(props) {
    super(props);
    
    this.choices = [
      0, // ✊
      1, // ✋
      2, // ✌️
    ]
    this.camera = React.createRef();

    this.state = {
      cameraStreamMounted: false,
      humanScore: 0,
      computerScore: 0,
      isRoundStarted: false,
      roundCountdown: 3,
    }
  }
 
  componentDidMount() {
    this.mountCameraStream(this.camera.current)
  }

  // mount camera video stream to video element
  mountCameraStream = (cameraElement) => {
    cameraElement.msHorizontalMirror = true;

    if (!navigator.mediaDevices.getUserMedia) {
      console.log('No camera?')
      return
    }

    navigator.mediaDevices.getUserMedia({ video: true, audio: false })
      .then(function (stream) {
        cameraElement.srcObject = stream;
        this.state.cameraStreamMounted = true
      })
      .catch(function (error) {
        console.log("Something went wrong!" + error);
      })
  }

  onRoundStarted = () => {
    this.setState({
      isRoundStarted: true,
      roundCountdown: 3,
    })
    
    const countDown = () => {
      if (this.state.roundCountdown >= 1) {
        this.setState({
          roundCountdown: this.state.roundCountdown - 1,
        })

        setTimeout(countDown, 1000);
        return
      }

      this.onRoundFinished()
    }

    setTimeout(countDown, 1000)
  }

  onRoundFinished = () => {
    this.setState({
      isRoundStarted: false,
    })
  }

  predictHumanChoice = (videoFrame) => {
    
  }

  // identify winner of this pair
  scoreRound = (humanChoice, computerChoice) => {
    
  }

  // pick randomly one of 3 possible states
  makeComputerChoice = () => {
    return Math.floor(Math.random() * this.choices.length)
  }

  render() {
    const {humanScore, computerScore, isRoundStarted, roundCountdown} = this.state

    return (
    <div className="game">
      <div className="game-item">
        <div className="title">🧠 You</div>
        <div className="player human">
          <video ref={this.camera} className="video-background" playsInline={true} autoPlay={true}>
            No Video
          </video>
          <div className="choice">✊</div>
        </div>
      </div>
      <div className="game-item controls">
        <div className="score">
          {humanScore} : {computerScore}
        </div>
        { !isRoundStarted ?
          <button className="play" onClick={this.onRoundStarted}>
            <FontAwesomeIcon icon={faPlay} /> Play
          </button>
          :
          <div className="countdown">{roundCountdown}</div>
        }
      </div>
      <div className="game-item">
        <div className="title">🤖 AI</div>
        <div className="player computer">
          <div className="choice">✊</div>
        </div>
      </div>
    </div>)
  }
}

export default RockPaperScissorGame