import React from 'react'

import * as tf from '@tensorflow/tfjs';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons/faPlay'

import './rock-paper-scissor-game.css'

class RockPaperScissorGame extends React.Component {
  
  constructor(props) {
    super(props);
    
    this.modelUrl = 'https://drive.google.com/uc?export=download&id=1yKPLCM0xk3VOsBpcEVGrHznvgCFAP4pm'

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
      showCamera: true,
      showHumanChoice: false,
      roundCountdown: 3,
      computerChoice: -1,
      humanChoice: -1,
      model: null,
    }
  }
 
  componentDidMount() {
    this.mountCameraStream(this.camera.current)
    this.configureCanvas(this.humanChoiceImage.current)

    tf.loadLayersModel(this.modelUrl)
      .then((layersModel) => {
        this.setState({
          model: layersModel,
        })
        console.log('model has been loaded');
      })
      .catch((e) => {
        // todo: show the reason of the issue to users
        console.log('error during model loading: ', e.message)
      });
  }

  configureCanvas = (canvasElement) => {
    const canvasContext = canvasElement.getContext('2d');

    // flip photo on canvas
    canvasContext.translate(canvasElement.width, 0);
    canvasContext.scale(-1, 1);
  }

  // mount camera video stream to video element
  mountCameraStream = (cameraElement) => {
    cameraElement.msHorizontalMirror = true;

    if (!navigator.mediaDevices.getUserMedia) {
      console.log('No camera?')
      return
    }

    navigator.mediaDevices.getUserMedia({ video: { width: 300, height: 300 }, audio: false })
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
      showCamera: true,
      showHumanChoice: false,
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
    requestAnimationFrame(() => {
      this.getHumanChoiceFrame(this.camera.current)
    });

    this.setState({
      computerChoice: this.makeComputerChoice(),
      isRoundStarted: false,
      showCamera: false,
      showHumanChoice: true,
    })
  }

  getHumanChoiceFrame = (cameraElement) => {
    const canvasElement = this.humanChoiceImage.current
    const context = canvasElement.getContext('2d');

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
      showCamera,
      showHumanChoice,
      roundCountdown,
      computerChoice,
      humanChoice,
    } = this.state

    return (
    <div className="game">
      <div className="game-item">
        <div className="title">🧠 You</div>
        <div className="player human">
          <video width={300} height={300} ref={this.camera} style={{'display': showCamera ? 'block': 'none'}} className="video-background" playsInline={true} autoPlay={true}>
            No Video
          </video>
          <canvas width={300} height={300} className="human-choice-image" ref={this.humanChoiceImage} style={{'display': showHumanChoice ? 'block': 'none'}}></canvas>
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