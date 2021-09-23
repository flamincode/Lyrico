import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {useHistory} from 'react-router-dom'
import './teams.scss'

const TeamsPage = (props) => {
  const [teamOneShow, setTeamOneShow] = useState(true)
  const [teamTwoShow, setTeamTwoShow] = useState(false)
  const history = useHistory()

  function handleSubmitTeam(e) {
    let newTeam
    if (props.teamOneActive) {
      newTeam = 2
      props.changeActiveTeam(newTeam)
    } else {
      newTeam = 1
      props.changeActiveTeam(newTeam)
      history.push('/PlayerSelection')
    }
    e.preventDefault()
  }

  function handleChangeTeamOne(e) {
    props.handleChangeTeamOne(e)
  }

  function handleChangeTeamTwo(e) {
    props.handleChangeTeamTwo(e)
  }
  
  const {teamOne, teamTwo} = props.teams
  
  return (
    <div className='teams-page'>
      <form className={!props.teamOneActive ? 'hide' : 'teams-content'} onSubmit={(e) => handleSubmitTeam(e)}>
            <h1>Team One please enter your name</h1>
              <TextField id="standard-basic" value={teamOne} label="Team One" onChange={(e) => handleChangeTeamOne(e)}/>
              <Button variant="contained" type="submit" className={'lyrico-button'}>Submit</Button>
      </form>
      <form className={props.teamOneActive ? 'hide' : 'teams-content'} onSubmit={(e) => handleSubmitTeam(e)}>
            <h1>Team Two please enter your name</h1>
              <TextField id="standard-basic" value={teamTwo} label="Team Two" onChange={(e) => handleChangeTeamTwo(e)}/>
              <Button variant="contained" type="submit" className={'lyrico-button'}>Create Team</Button>
      </form>
    </div>
  )
}


export default TeamsPage