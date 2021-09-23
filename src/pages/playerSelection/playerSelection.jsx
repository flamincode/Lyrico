import React, {useState} from 'react'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom'
import './playerSelection.scss'

const PlayerSelection = (props) => {

  let {teamOneActive, teamOne, teamTwo} = props.teams
  return (
    <div className='ps-page'>
      <div className='ps-content'>
        <h1>{`${teamOneActive ? teamOne : teamTwo} choose a player for the round!`}</h1>
        <div>
          <h3>Only the selected player should be able to see the next screen.</h3>
          <h3>Make sure no one is looking before you click the button.</h3>
        </div>
        <Link to='/game'><Button className='lyrico-button' variant="contained">Show Song</Button></Link>
      </div>
    </div>
  )

}

export default PlayerSelection