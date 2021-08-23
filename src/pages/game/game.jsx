import React from 'react'
import { Songs } from '../../songs'
import Timer from './timer'
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom'
import './game.scss'

class GamePage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      time: 0
    }
    this.generateSong = this.generateSong.bind(this)
    this.time = 0
  }

  generateSong() {
    var Song = Songs[Math.floor(Math.random()*Songs.length)];
    let {artist, song, seconds, year, number, lyric} = Song
    // var item = items[Math.floor(Math.random()*items.length)];
    console.log(seconds)
    this.time = seconds
    return (
      <div className='song-container'>
        <h1 className='item artist'>{artist}</h1>
        <h1 className='item song'>{song}</h1>
        <h2 className='item year'>{year}</h2>
        <h4 className='item seconds'>{`${seconds} seconds`}</h4>
        <h1 className='item lyric'>{lyric}</h1>
      </div>
    )
  } 

  render() {
    return (
      <div>
        <div>{this.generateSong()}</div>
        <Timer time={this.state.time} />
      </div>
    )
  }

}

export default GamePage