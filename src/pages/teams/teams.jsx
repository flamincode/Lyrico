import React from 'react'
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom'

import { connect } from 'react-redux'

import {
  nameTeamOne,
  nameTeamTwo,
} from "../../redux/teams/teams.actions"


class TeamsPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      teamOne: {
        // name: null,
        score: 0,
        open: true
      },
      teamTwo: {
        // name: null,
        score: 0,
        open: false
      }
    }

    this.handleChangeTeamOne = this.handleChangeTeamOne.bind(this)
    this.handleChangeTeamTwo = this.handleChangeTeamTwo.bind(this)
    this.handleSubmitTeamOne = this.handleSubmitTeamOne.bind(this)
    this.handleSubmitTeamTwo = this.handleSubmitTeamTwo.bind(this)
  }

  handleChangeTeamOne(e) {
    this.props.nameTeamOne(e.target.value)
    // this.setState(prevState => ({
    //   teamOne: {
    //     ...prevState.teamOne,
    //     name: e.target.value
    //   }
    // }))
  }

  handleChangeTeamTwo(e) {
    this.props.nameTeamTwo(e.target.value)
    // this.setState(prevState => ({
    //   teamTwo: {
    //     ...prevState.teamTwo,
    //     name: e.target.value
    //   }
    // }))
  }

  handleSubmitTeamOne(e) {
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

  handleSubmitTeamTwo(e) {
    e.preventDefault()
    this.setState(prevState => ({
      teamOne: {
        ...prevState.teamOne,
        open: false,
      },
      teamTwo: {
        ...prevState.teamTwo,
        open: false,
        // name: e.target.value
      }
    }))
  }

  render() {
    return (
      <div>
        <div className={!this.state.teamOne.open ? 'hide' : ''}>
          <form onSubmit={this.handleSubmitTeamOne}>
            <Grid container spacing={10}>
              <Grid item xs={12}>
                <h1>Team One please enter your name</h1>
              </Grid>
                <Grid item xs={12}>
                  <TextField id="standard-basic" value={this.props.nameOne} onChange={this.handleChangeTeamOne} label="Team One" />
                </Grid>
                <Grid item xs={12}>
                  <Button variant="contained" type="submit">Submit</Button>
                </Grid>
            </Grid>
          </form>
        </div>
        <div className={!this.state.teamTwo.open ? 'hide' : ''}>
          <form onSubmit={this.handleSubmitTeamTwo}>
            <Grid container spacing={10}>
              <Grid item xs={12}>
                <h1>Team Two please enter your name</h1>
              </Grid>
                <Grid item xs={12}>
                  <TextField id="standard-basic" value={this.props.nameTwo} onChange={this.handleChangeTeamTwo} label="Team Two" />
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

const mapStateToProps = state => {
  return {
    nameOne: state.nameOne,
    nameTwo: state.nameTwo
  }
}

const mapDispatchToProps = dispatch => {
  return {
    nameTeamOne: (nameOne) => dispatch(nameTeamOne()),
    nameTeamTwo: () => dispatch(nameTeamTwo()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TeamsPage)