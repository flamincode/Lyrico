import './App.css'
import { Switch, Route } from 'react-router-dom'
import WelcomePage from './pages/welcome/welcome'
import TeamsPage from './pages/teams/teams'
import PlayerSelectionPage from './pages/playerSelection/playerSelection'
import GamePage from './pages/game/game'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={WelcomePage}></Route>
        <Route exact path='/teams' component={TeamsPage}></Route>
        <Route exact path='/playerSelection' component={PlayerSelectionPage}></Route>
        <Route exact path='/game' component={GamePage}></Route>
      </Switch>
    </div>
  );
}

export default App;
