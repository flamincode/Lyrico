import React from 'react'
import { useHistory } from "react-router-dom";
import './heading.scss'
import image from '../../logo.jpg'

const Heading = () => {
  const history = useHistory()

  const handleClick = () => {
    history.push('/')
  }
  return (
    <button className={'logo'} onClick={handleClick}><img alt='' src={image}/></button>
  )
}
export default Heading