import React from 'react'
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom'


class TeamsPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      teamOne: {
        name : '',
        open: true
      },
      teamTwo: {
        name : '',
        open: false
      },
    }

    this.handleChangeOne = this.handleChangeOne.bind(this)
    this.handleChangeTwo = this.handleChangeTwo.bind(this)
    this.handleSubmitOne = this.handleSubmitOne.bind(this)
    this.handleSubmitTwo = this.handleSubmitTwo.bind(this)
  }

  handleChangeOne(e) {
    this.setState(prevState => ({
      teamOne: {
        ...prevState.teamOne,
        name: e.target.value
      }
    }))
  }

  handleChangeTwo(e) {
    this.setState(prevState => ({
      teamTwo: {
        ...prevState.teamTwo,
        name: e.target.value
      }
    }))
  }

  handleSubmitOne(e) {
    alert(this.state.teamOne.name)
    this.setState(prevState => ({
      teamOne: {
        ...prevState.teamOne,
        open: false
      },
      teamTwo: {
        ...prevState.teamTwo,
        open: true
      }
    }))
    //Save team name one
    e.preventDefault()
  }

  handleSubmitTwo(e) {
    alert(this.state.teamTwo.name)
    e.preventDefault()
    //Save team name Two
  }

  render() {
    return (
      <div>
        <div className={!this.state.teamOne.open ? 'hide' : ''}>
          <form onSubmit={this.handleSubmitOne}>
            <Grid container spacing={10}>
              <Grid item xs={12}>
                <h1>Team One please enter your name</h1>
              </Grid>
                <Grid item xs={12}>
                  <TextField id="standard-basic" value={this.state.teamOne.name} onChange={this.handleChangeOne} label="Team One" />
                </Grid>
                <Grid item xs={12}>
                  <Button variant="contained" type="submit">Submit</Button>
                </Grid>
            </Grid>
          </form>
        </div>
        <div className={!this.state.teamTwo.open ? 'hide' : ''}>
          <form onSubmit={this.handleSubmitTwo}>
            <Grid container spacing={10}>
              <Grid item xs={12}>
                <h1>Team Two please enter your name</h1>
              </Grid>
                <Grid item xs={12}>
                  <TextField id="standard-basic" value={this.state.teamTwo.name} onChange={this.handleChangeTwo} label="Team Two" />
                </Grid>
                <Grid item xs={12}>
                  <Link to="/PlayerSelection"><Button variant="contained" type="submit">Submit</Button></Link>
                </Grid>
            </Grid>
          </form>
        </div>
      </div>
    )
  }
}

export default TeamsPage