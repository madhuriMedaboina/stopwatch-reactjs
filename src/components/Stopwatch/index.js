// Write your code here

import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {isTimeRunning: false, isTimeElapsed: 0}

  resetTimer = () => {
    clearInterval(this.timeInterval)
    this.setState({isTimeRunning: false, isTimeElapsed: 0})
  }

  stopTimer = () => {
    clearInterval(this.timeInterval)
    this.setState({isTimeRunning: false})
  }

  updateTime = () => {
    this.setState(prevState => ({isTimeElapsed: prevState.isTimeElapsed + 1}))
  }

  startTimer = () => {
    this.timeInterval = setInterval(this.updateTime, 1000)
    this.setState({isTimeRunning: true})
  }

  renderSecond = () => {
    const {isTimeElapsed} = this.state
    const seconds = Math.floor(isTimeElapsed % 60)

    if (seconds < 10) {
      return `0${seconds}`
    }
    return seconds
  }

  renderMinutes = () => {
    const {isTimeElapsed} = this.state
    const minutes = Math.floor(isTimeElapsed / 60)

    if (minutes < 10) {
      return `0${minutes}`
    }
    return minutes
  }

  render() {
    const {isTimeRunning} = this.state
    const time = `${this.renderMinutes()}:${this.renderSecond()}`
    return (
      <div className="bg-container">
        <div className="stopwatch-container">
          <h1 className="heading">Stopwatch</h1>
          <div className="timer-container">
            <div className="time-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="stopwatch"
                className="image"
              />
              <p className="time">Timer</p>
            </div>
            <h1 className="time-heading">{time}</h1>
            <div className="button-container">
              <button
                type="button"
                className="start-button"
                onClick={this.startTimer}
                disabled={isTimeRunning}
              >
                start
              </button>
              <button
                type="button"
                className="stop-button"
                onClick={this.stopTimer}
              >
                stop
              </button>
              <button
                type="button"
                className="reset-button"
                onClick={this.resetTimer}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
