import React from 'react'
import { useHistory, Link } from "react-router-dom";
import image from '../../logo.jpg'
import { Dropdown } from 'semantic-ui-react';
import './heading.scss'

const Heading = () => {
  
  const trigger = (
    <button className={'logo'}><img alt='' src={image}/></button>
  )

  return (
    <div className='lyrico-header'>
      <Dropdown 
        trigger={trigger}>
        <Dropdown.Menu>
          <Link to='/'><Dropdown.Item text='Home'/></Link>
          <Link to='/teams'><Dropdown.Item text='Teams'/></Link>
          <Link to='/playerSelection'><Dropdown.Item text='Player Selection'/></Link>
          <Link to='/rules'><Dropdown.Item text='Rules'/></Link>
          <Link to='/game'><Dropdown.Item text='Game Play'/></Link>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  )
}
export default Heading