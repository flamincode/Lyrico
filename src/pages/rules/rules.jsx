import React from 'react'
import './rules.scss'

const RulesPage = (props) => {
  return (
    <div className='rules-page'>
      <h1 className='rules-heading'>Rules</h1>
      <div className='rules-paragraph'>
        <h3>In Lyrico there are a few rules, but the most important rule is NO MESSING AROUND. The rest of the rules are as follows:</h3>
        <h3>1) Each team must select a team name.</h3>
        <h3>2) That second team must select a person to be their presenter.</h3>
        <h3>3) Keeping the screen hidden, the presenter will be shown a song, artist and a lyric, and will announce ONLY the song name and artist to her team.</h3>
        <h3>4) Without using words, the presenter must then get their team to guess the entire lyric before the time expires.</h3>
        <h3>5) If they succeed they get two points and it is then the next team's turn to choose a presenter.</h3> 
        <h3>6) If they fail, they get no points, and still must pass the buck to the next team.</h3>
        <h3>The first team to 20 wins and must celebrate by mocking the other team.</h3>
      </div>
    </div>
  )
}

export default RulesPage