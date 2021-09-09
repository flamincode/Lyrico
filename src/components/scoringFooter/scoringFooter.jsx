import React from 'react';

import './scoringFooter.scss';

import { connect } from 'react-redux';

const ScoringFooter = (props) => {
  const {teamOne, teamTwo, teamOneScore, teamTwoScore} = props.teams
  return (
    <div className='scoring-footer-container'>
      <h2>{`${teamOne} : ${teamOneScore}`}</h2>
      <h2>{`${teamTwo}: ${teamTwoScore}`}</h2>
    </div>
  )
}

export default ScoringFooter;