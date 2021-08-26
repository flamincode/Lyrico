import React from 'react'
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom'
import './playerSelection.scss'

class PlayerSelection extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let {teamOneActive, teamOne, teamTwo} = this.props.teams
    return (
      <div>
        <Grid container>
          <Grid xs={12}>
            <h1>{`${teamOneActive ? teamOne : teamTwo} choose a player for the round!`}</h1>
            <h3 className={'ps-h3'}>Only the selected player should be able to see the next screen. Make sure no one is looking before you click the button.</h3>
          </Grid>
          <Grid xs={12}>
            <Link to='/game'><Button className={'lyrico-button'} variant="contained">Show Song</Button></Link>
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default PlayerSelection