import React from 'react'
import { Songs } from '../../songs'
import Button from '@material-ui/core/Button';
import './game.scss'
import Title from '../../components/title'
import Lmodal from '../../components/modal/modal'

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
      modalOpen: false,
      modalHeader: '',
      modalDescription: '',
      modalLink: ''
    }
    
    this.timer = 0
    this.startTimer = this.startTimer.bind(this)
    this.countDown = this.countDown.bind(this)
    this.generateSong = this.generateSong.bind(this)
    this.newSong = this.newSong.bind(this)
    this.mainClick = this.mainClick.bind(this)
    this.endRound = this.endRound.bind(this)
    this.secondaryClick = this.secondaryClick.bind(this)
    this.openModal = this.openModal.bind(this)
    this.modalButtonClick = this.modalButtonClick.bind(this)
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
        this.endRound('success')
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
        this.endRound('failure')
        break
    }
  }

  openModal(b) {
    this.setState({modalOpen: b})
    if (!b) {
      this.props.history.push('/PlayerSelection')
    }
  }

  endRound(result) {
    let {teamOne, teamTwo, teamOneActive} = this.props.teams
    if (result === 'success') {
      this.setState({
        modalHeader: `Congrats ${teamOneActive ? teamOne : teamTwo}!`,
        modalDescription: `You guessed "${this.state.lyric}", you must really know ${this.state.artist}.`,
      })  
      this.props.addScore(2)
    } else {
      this.setState({
        modalHeader: `Hey ${teamOneActive ? teamOne : teamTwo}, you'll get them next time.`,
      })  
      this.props.addScore(0)
    }
    this.openModal(true)
  }

  modalButtonClick() {
    this.props.history.push('/PlayerSelection')
  }

  render() {
    let {artist, song, seconds, year, number, lyric, timerShow, positiveButtonText, negativeButtonText, modalOpen, modalHeader, modalDescription, modalLink} = this.state
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
        <Lmodal openModal={this.openModal}
          modalOpen={modalOpen}
          modalHeader={modalHeader}
          modalDescription={modalDescription}
          song={song}
          link={modalLink}
          handleClick={this.modalButtonClick}
        />
      </div>
    )
  }

}

export default GamePage