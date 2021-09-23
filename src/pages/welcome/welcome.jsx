import React from 'react'
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import Heading from '../../components/heading/heading.jsx'
import {Link} from 'react-router-dom'
import './welcome.scss'

const WelcomePage = () => {
  return (
    <div className='welcome-page'>
      <div className='welcome-content'>
        <h1 className={'welcome-heading'}>Welcome to Lyrico!</h1>
        <div className='welcome-buttons'>
          <Link to="/rules"><Button className='lyrico-button secondary welcome-button' variant='contained'>Rules</Button></Link>
          <Link to="/teams"><Button className='lyrico-button welcome-button' variant='contained'>Let's Get Started</Button></Link>
        </div>
      </div>
    </div>
  )
}

export default WelcomePage