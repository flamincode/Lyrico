import React from 'react'
import { Songs } from '../../songs'
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import { withRouter } from 'react-router-dom'
import './game.scss'

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
      secondsLeft: 0,
      timerShow: false,
      buttonText: 'Start!',
      gameStep: 0,
      modalOpen: false
    }
    this.timer = 0
    this.startTimer = this.startTimer.bind(this)
    this.countDown = this.countDown.bind(this)
    this.generateSong = this.generateSong.bind(this)
    this.mainClick = this.mainClick.bind(this)
    this.modalClose = this.modalClose.bind(this)
    this.endRound = this.endRound.bind(this)
  }

  componentDidMount() {
    this.generateSong()
  }

  generateSong() {
    var Song = Songs[Math.floor(Math.random()*Songs.length)];
    let {artist, song, seconds, year, number, lyric} = Song
    this.setState({...Song, secondsLeft: seconds})
  }

  startTimer() {
    console.log(this.state.secondsLeft)
    if (this.timer == 0 && this.state.secondsLeft > 0) {
      this.setState({timerShow: true})
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

  mainClick() {
    switch(this.state.gameStep) {
      case 0:
        this.setState({
          gameStep: 1,
          buttonText: 'They Got It!'
        })
        this.startTimer()
        break
      case 1:
        this.setState({
          gameStep: 0,
          modalOpen: true,
        })
        clearInterval(this.timer)
        break
    }
  }

  modalClose() {
    this.setState({modalOpen: false})
  }

  endRound() {
    this.props.history.push('/PlayerSelection')
    this.props.addScore()
  }

  render() {
    let {artist, song, seconds, year, number, lyric, timerShow, secondsLeft, buttonText, modalOpen} = this.state
    return (
      <div>
        {/* <div>{this.generateSong()}</div> */}
        <div className='song-container'>
          <h1 className='item artist'>{artist}</h1>
          <h1 className='item song'>{song}</h1>
          <h2 className='item year'>{year}</h2>
          <h4 className='item seconds'>{`${seconds} seconds`}</h4>
          <h1 className='item lyric'>{lyric}</h1>
        </div>
        <Button variant="contained" onClick={this.mainClick} size='large'>{buttonText}</Button>
        <div className={`item counter ${!timerShow ? 'hide' : ''}`}>{`:${secondsLeft}`}</div>
        <Modal
          className={'winning-modal'}
          open={modalOpen}
          onClose={this.modalClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description">
            {<div>
              <h1>{`Did they get it?`}</h1>
              <Button  variant="contained" onClick={this.modalClose}>No</Button>
              <Button  variant="contained" onClick={this.endRound}>Yes!</Button>
            </div>}

        </Modal>
      </div>
    )
  }

}

export default GamePage