import React from 'react'

import * as tf from '@tensorflow/tfjs';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons/faPlay'

import './rock-paper-scissor-game.css'

class RockPaperScissorGame extends React.Component {
  
  constructor(props) {
    super(props);
    
    this.modelUrl = 'https://raw.githubusercontent.com/roma-glushko/romaglushko.com-lab/master/rock-paper-scissors/model.json'

    this.choices = [
      {
        label: '✊',
        beats: [2]
      },
      {
        label: '✋',
        beats: [0]
      },
      {
        label: '✌️',
        beats: [1]
      }
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
      isModelLoaded: false,
      model: null,
    }
  }
 
  componentDidMount() {
    this.mountCameraStream(this.camera.current)
    this.configureCanvas(this.humanChoiceImage.current)

    tf.loadLayersModel(this.modelUrl)
      .then((layersModel) => {
        this.setState({
          isModelLoaded: true,
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
      const canvasWithHumanChoice = this.getHumanChoiceFrame(this.camera.current)

      const computerChoice = this.makeComputerChoice()
      const humanChoice = this.predictHumanChoice(canvasWithHumanChoice)

      this.scoreRound(humanChoice, computerChoice)

      this.setState({
        computerChoice: computerChoice,
        humanChoice: humanChoice,
        isRoundStarted: false,
        showCamera: false,
        showHumanChoice: true,
      })
    });
  }

  getHumanChoiceFrame = (cameraElement) => {
    const canvasElement = this.humanChoiceImage.current
    const context = canvasElement.getContext('2d');

    context.drawImage(cameraElement, 0, 0, 300, 300);

    return canvasElement
  }

  predictHumanChoice = (videoFrame) => {
    const { model } = this.state 
    const modelInputWidth = model.input.shape[1];
    const modelInputHeight = model.input.shape[2];

    const humanChoiceImage = tf.browser
      .fromPixels(videoFrame)
      .resizeNearestNeighbor([modelInputWidth, modelInputHeight])
      .div(127.5).add(-1)  // scale between [-1; 1]
      .reshape([1, modelInputWidth, modelInputHeight, 3])

    const prediction = model.predict(humanChoiceImage)
    const choiceIndex = prediction.argMax(1).dataSync()[0];

    return choiceIndex
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

    return this.choices[choiceIdx].label
  }

  render() {
    const {
      humanScore, 
      computerScore,
      cameraStreamMounted,
      isModelLoaded, 
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
          <button className="play" onClick={this.onRoundStarted} disabled={!cameraStreamMounted || !isModelLoaded}>
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

// - https://github.com/trekhleb/machine-learning-experiments/blob/master/demos/src/components/shared/RockPaperScissors.js <br/>
// - https://colab.research.google.com/github/trekhleb/machine-learning-experiments/blob/master/experiments/rock_paper_scissors_mobilenet_v2/rock_paper_scissors_mobilenet_v2.ipynb#scrollTo=DJ8jGFnTLt8t

export default RockPaperScissorGame