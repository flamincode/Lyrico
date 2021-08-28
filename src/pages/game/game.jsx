import React from 'react'
import { Songs } from '../../songs'
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import { withRouter } from 'react-router-dom'
import './game.scss'
import Title from '../../components/title'

class GamePage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      artist: '',
      song: '',
      seconds: 0,
      year: '',
      number: '',
      lyric: '',
      timerShow: false,
      positiveButtonText: 'Start Time!',
      negativeButtonText: 'New Song',
      gameStep: 0,
    }
    
    this.timer = 0
    this.startTimer = this.startTimer.bind(this)
    this.countDown = this.countDown.bind(this)
    this.generateSong = this.generateSong.bind(this)
    this.newSong = this.newSong.bind(this)
    this.mainClick = this.mainClick.bind(this)
    this.endRound = this.endRound.bind(this)
    this.secondaryClick = this.secondaryClick.bind(this)
  }

  componentDidMount() {
    this.newSong()
  }

  async newSong() {
    const result = await this.generateSong()
    this.setState({...result})
  }

  generateSong() {
    return new Promise((resolve, reject) => {
      const Song = Songs[Math.floor(Math.random()*Songs.length)]
      resolve(Song)
    })
  }

  startTimer() {
    if (this.timer == 0 && this.state.seconds > 0) {
      this.setState({timerShow: true})
      this.timer = setInterval(this.countDown, 1000)
    }
  }

  countDown() {
    let seconds = this.state.seconds - 1
    this.setState({seconds: seconds})

    if (seconds == 0) {
      clearInterval(this.timer)
      this.endRound(0)
    }
  }

  mainClick() {
    switch(this.state.gameStep) {
      case 0:
        this.setState({
          gameStep: 1,
          positiveButtonText: 'They Got It!',
          negativeButtonText: 'Skip'
        })
        this.startTimer()
        break
      case 1:
        this.setState({
          gameStep: 0,
        })
        clearInterval(this.timer)
        this.endRound(2)
        break
    }
  }

  secondaryClick() {
    switch(this.state.gameStep) {
      case 0:
        this.newSong()
        break
      case 1:
        this.setState({
          gameStep: 0,
        })
        clearInterval(this.timer)
        this.endRound(0)
        break
    }
  }

  endRound(n) {
    this.props.history.push('/PlayerSelection')
    this.props.addScore(n)
  }

  render() {
    let {artist, song, seconds, year, number, lyric, timerShow, positiveButtonText, negativeButtonText, modalOpen} = this.state
    return (
      <div>
        <Title title={song} />
        <div className='song-container'>
          <h1 className='item song'>{song}</h1>
          <h2 className='item side artist'>{`by ${artist}, ${year}`}</h2>
          <h1 className='item lyric'>{`"${lyric}"`}</h1>
        </div>
        <Button variant="contained" onClick={this.secondaryClick} size='large' className={'lyrico-button secondary'}>{negativeButtonText}</Button>
        <Button variant="contained" onClick={this.mainClick} size='large' className={'lyrico-button'}>{positiveButtonText}</Button>
        <div className={`item counter`}>{`:${seconds}`}</div>
      </div>
    )
  }

}

export default GamePage