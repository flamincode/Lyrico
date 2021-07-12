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
        <Grid container spacing={10}>
          <Grid item xs={12}>
            <h1>Each team choose a player for the round!</h1>
          </Grid>
          <Grid item xs={12}>
            <Link to='/game'><Button variant="contained">Let's Play!</Button></Link>
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default PlayerSelection