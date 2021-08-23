import React from 'react'
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom'

class TeamsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      teamOneShow: true,
      teamTwoShow: false
    }
    this.handleSubmitTeamOne = this.handleSubmitTeamOne.bind(this)
    this.handleSubmitTeamTwo = this.handleSubmitTeamTwo.bind(this)
    this.handleChangeTeamOne = this.handleChangeTeamOne.bind(this)
    this.handleChangeTeamTwo = this.handleChangeTeamTwo.bind(this)
  }

  handleSubmitTeamOne(e) {
    this.setState({
      teamOneShow: !this.state.teamOneShow,
      teamTwoShow: !this.state.teamTw
    })
    e.preventDefault()
  }

  handleSubmitTeamTwo(e) {
    this.setState({
      teamOneShow: !this.state.teamOneShow,
      teamTwoShow: !this.state.teamTw
    })
    e.preventDefault()
  }

  handleChangeTeamOne(e) {
    this.props.handleChangeTeamOne(e)
  }

  handleChangeTeamTwo(e) {
    this.props.handleChangeTeamTwo(e)
  }

  render() {
    console.log('Team page')
    console.log(this.props.teams)
    const {teamOne, teamTwo} = this.props.teams
    return (
      <div>
        <div className={!this.state.teamOneShow ? 'hide' : ''}>
          <form onSubmit={(e) => this.handleSubmitTeamOne(e)}>
            <Grid container spacing={10}>
              <Grid item xs={12}>
                <h1>Team One please enter your name</h1>
              </Grid>
                <Grid item xs={12}>
                  <TextField id="standard-basic" value={this.props.teamOne} label="Team One" onChange={(e) => this.handleChangeTeamOne(e)}/>
                </Grid>
                <Grid item xs={12}>
                  <Button variant="contained" type="submit">Submit</Button>
                </Grid>
            </Grid>
          </form>
        </div>
        <div className={!this.state.teamTwoShow ? 'hide' : ''}>
          <form onSubmit={(e) => this.handleSubmitTeamTwo(e)}>
            <Grid container spacing={10}>
              <Grid item xs={12}>
                <h1>Team Two please enter your name</h1>
              </Grid>
                <Grid item xs={12}>
                  <TextField id="standard-basic" value={this.props.nameTwo} label="Team Two" onChange={(e) => this.handleChangeTeamTwo(e)}/>
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