import './App.scss'
import { Switch, Route} from 'react-router-dom'
import WelcomePage from './pages/welcome/welcome'
import TeamsPage from './pages/teams/teams'
import PlayerSelectionPage from './pages/playerSelection/playerSelection'
import ScoringFooter from './components/scoringFooter/scoringFooter'
import GamePage from './pages/game/game'
import React from 'react'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      teams: {
        teamOne: 'Team One',
        teamTwo: 'Team Two'
      }
    }
    this.handleChangeTeamOne = this.handleChangeTeamOne.bind(this)
    this.handleChangeTeamTwo = this.handleChangeTeamTwo.bind(this)
  }

  handleChangeTeamOne(e) {
    console.log(e)
    this.setState(prevState => ({
      teams: {
        ...prevState.teams,
        teamOne: e.target.value
      }
    }))
    e.preventDefault()
  }

  handleChangeTeamTwo(e) {
    this.setState(prevState => ({
      teams: {
        ...prevState.teams,
        teamTwo: e.target.value
      }
    }))
    e.preventDefault()
  }
  
  render() {
    const teams = this.state.teams
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={WelcomePage}></Route>
          <Route exact path='/teams' 
            render={(props) => (
              <TeamsPage teams={teams} 
                handleChangeTeamOne={(e) => this.handleChangeTeamOne(e)}
                handleChangeTeamTwo={(e) => this.handleChangeTeamTwo(e)} />
            )}>
          </Route>
          <Route exact path='/playerSelection' component={PlayerSelectionPage}></Route>
          <Route exact path='/game' component={GamePage}></Route>
        </Switch>
        <ScoringFooter teams={teams}/>
      </div>
    )
  } 
}

export default App;
