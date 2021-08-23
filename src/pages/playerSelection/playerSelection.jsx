import React from 'react'
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom'

class PlayerSelection extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Grid container>
          <Grid xs={12}>
            <h1>Each team choose a player for the round!</h1>
            <h3>Only the selected player should be able to see the next screen. Make sure no one is looking before you click the button.</h3>
          </Grid>
          <Grid xs={12}>
            <Link to='/game'><Button variant="contained">Let's Play!</Button></Link>
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default PlayerSelection