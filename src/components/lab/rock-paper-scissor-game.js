import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons/faPlay'

import './rock-paper-scissor-game.css'

class RockPaperScissorGame extends React.Component {
  
  constructor(props) {
    super(props);
    
    this.choices = [
      '✊',
      '✋',
      '✌️',
    ]

    this.camera = React.createRef();
    this.humanChoiceImage = React.createRef();

    this.state = {
      cameraStreamMounted: false,
      humanScore: 0,
      computerScore: 0,
      isRoundStarted: false,
      roundCountdown: 3,
      computerChoice: -1,
      humanChoice: -1,
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
      .then((stream) => {
        cameraElement.srcObject = stream;

        this.setState({
          cameraStreamMounted: true,
        })
      })
      .catch((error) => {
        console.log("Something went wrong: " + error);
      })
  }

  onRoundStarted = () => {
    this.setState({
      isRoundStarted: true,
      roundCountdown: 3,
      computerChoice: -1,
      humanChoice: -1,
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
    this.getHumanChoiceFrame()

    requestAnimationFrame(() => {
      this.getHumanChoiceFrame(this.camera.current).then(() => {});
    });

    this.setState({
      computerChoice: this.makeComputerChoice(),
      isRoundStarted: false,
    })
  }

  getHumanChoiceFrame = (cameraElement) => {
    const canvasElement = this.humanChoiceImage.current

    const context = canvasElement.getContext('2d');

    context.translate(300, 0);
    context.scale(-1, 1);

    context.drawImage(cameraElement, 0, 0, 300, 300);

    return cameraElement
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

  renderChoice = (choiceIdx) => {
    if (choiceIdx === -1) {
      return ""
    }

    return this.choices[choiceIdx]
  }

  render() {
    const {
      humanScore, 
      computerScore,
      cameraStreamMounted, 
      isRoundStarted, 
      roundCountdown,
      computerChoice,
      humanChoice,
    } = this.state

    return (
    <div className="game">
      <div className="game-item">
        <div className="player">
          <canvas className="human-choice-image" ref={this.humanChoiceImage}></canvas>
        </div>
      </div>
      <div className="game-item">
        <div className="title">🧠 You</div>
        <div className="player human">
          <video ref={this.camera} className="video-background" playsInline={true} autoPlay={true}>
            No Video
          </video>
          {humanChoice !== -1 ? <div className="choice">{this.renderChoice(humanChoice)}</div> : ""}
        </div>
      </div>
      <div className="game-item controls">
        <div className="score">
          {humanScore} : {computerScore}
        </div>
        { !isRoundStarted ?
          <button className="play" onClick={this.onRoundStarted} disabled={!cameraStreamMounted}>
            <FontAwesomeIcon icon={faPlay} /> Play
          </button>
          :
          <div className="countdown">{roundCountdown}</div>
        }
      </div>
      <div className="game-item">
        <div className="title">🤖 AI</div>
        <div className="player computer">
          {computerChoice !== -1 ? <div className="choice">{this.renderChoice(computerChoice)}</div> : ""}
        </div>
      </div>
    </div>)
  }
}

export default RockPaperScissorGame