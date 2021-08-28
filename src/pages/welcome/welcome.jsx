import React from 'react'
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import Heading from '../../components/heading/heading.jsx'
import {Link} from 'react-router-dom'
import './welcome.scss'

const WelcomePage = () => {
  return (
    <div className={'welcome-page'}>
      <h1 className={'welcome-heading'}>Welcome to Lyrico!</h1>
      <Link to="/teams"><Button className='lyrico-button welcome-button' variant='contained'>Let's Get Started</Button></Link>
      <h4>In Lyrico there are a few rules, but the most important rule is NO MESSING AROUND. The rest of the rules are as follows:</h4>
      <h4>Each team must select a team name.</h4>
      <h4>The first team to enter a name will go first.</h4>
      <h4>That team must select a person to be their presenter. Then, the presenter will be shown a song and lyric.</h4>
      <h4>Without using words, the presenter must then get their team to guess the entire lyric before the time expires.</h4>
      <h4>If they succeed they get two points and it is then the next team's turn to choose a presenter.</h4> 
      <h4>If they fail, they get no points, and still must pass the buck to the next team.</h4>
      <h4>The first team to 20 wins and must celebrate by mocking the other team.</h4>
    </div>
  )
}

export default WelcomePage