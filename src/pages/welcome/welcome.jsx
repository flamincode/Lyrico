import React from 'react'
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import Heading from '../../components/heading/heading.jsx'
import {Link} from 'react-router-dom'

class WelcomePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Heading text='Welcome to Lyrico!'/>
        <Link to="/teams"><Button variant='contained'>Let's Get Started</Button></Link>
      </div>
    )
  }
}

export default WelcomePage