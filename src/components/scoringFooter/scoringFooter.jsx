import React from 'react';

import './scoringFooter.scss';

const ScoringFooter = (props) => {
  const {teamOne, teamTwo, teamOneScore, teamTwoScore, teamOneActive, teamTwoActive} = props.teams
  return (
    <div className='scoring-footer-container'>
      <div className={teamOneActive ? 'active-border' : 'inactive-border'}>
        <h2>{`${teamOne} : ${teamOneScore}`}</h2>
      </div>
      <div className={teamTwoActive ? 'active-border' : 'inactive-border'}>
        <h2>{`${teamTwo}: ${teamTwoScore}`}</h2>
      </div>
    </div>
  )
}

export default ScoringFooter;