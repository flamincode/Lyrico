import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom'

const TeamsPage = (props) => {
  const [teamOneShow, setTeamOneShow] = useState(true)
  const [teamTwoShow, setTeamTwoShow] = useState(false)

  function handleSubmitTeam(e) {
    console.log(props.teamOneActive)
    let newTeam = props.teamOneActive ? 2 : 1 
    props.changeActiveTeam(newTeam)
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
    <div>
      <div className={!props.teamOneActive ? 'hide' : ''}>
        <form onSubmit={(e) => handleSubmitTeam(e)}>
          <Grid container spacing={10}>
            <Grid item xs={12}>
              <h1>Team One please enter your name</h1>
            </Grid>
              <Grid item xs={12}>
                <TextField id="standard-basic" value={teamOne} label="Team One" onChange={(e) => handleChangeTeamOne(e)}/>
              </Grid>
              <Grid item xs={12}>
                <Button variant="contained" type="submit" className={'lyrico-button'}>Submit</Button>
              </Grid>
          </Grid>
        </form>
      </div>
      <div className={props.teamOneActive ? 'hide' : ''}>
        <form onSubmit={(e) => handleSubmitTeam(e)}>
          <Grid container spacing={10}>
            <Grid item xs={12}>
              <h1>Team Two please enter your name</h1>
            </Grid>
              <Grid item xs={12}>
                <TextField id="standard-basic" value={teamTwo} label="Team Two" onChange={(e) => handleChangeTeamTwo(e)}/>
              </Grid>
              <Grid item xs={12}>
                <Link to="/PlayerSelection"><Button variant="contained" type="submit" className={'lyrico-button'}>Create Team</Button></Link>
              </Grid>
          </Grid>
        </form>
      </div>
    </div>
  )
}


export default TeamsPage