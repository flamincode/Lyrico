import React, {Component} from 'react'

class Timer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      secondsLeft: 0
    }
    this.timer = 0
  }

  componentDidMount() {
    let time = this.props.time
    this.setState({ secondsLeft: time})
    this.startTimer()
  }

  startTimer() {
    if (this.timer == 0 && this.state.secondsLeft > 0) {
      this.timer = setInterval(this.countDown, 1000)
    }
  }

  countDown() {
    let seconds = this.state.secondsLeft - 1
    this.setState({secondsLeft: seconds})

    if (seconds == 0) {
      clearInterval(this.timer)
    }
  }

  render() {
    return (
      <div>
        <div>{this.state.secondsLeft}</div>
      </div>
    )
  }
}

export default Timer
