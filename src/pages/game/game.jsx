import React from 'react'
import { Songs } from '../../songs'

import './game.scss'

class GamePage extends React.Component {
  constructor(props) {
    super(props);
  
    this.generateSong = this.generateSong.bind(this);
  }

  generateSong() {
    var Song = Songs[Math.floor(Math.random()*Songs.length)];
    let {artist, song, seconds, year, number, lyric} = Song
    // var item = items[Math.floor(Math.random()*items.length)];
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
      <div>{this.generateSong()}</div>
    )
  }

}

export default GamePage