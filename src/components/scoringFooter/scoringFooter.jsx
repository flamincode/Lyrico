import React from 'react';

import './scoringFooter.scss';

import { connect } from 'react-redux';

class ScoringFooter extends React.Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    const {teamOne, teamTwo, teamOneScore, teamTwoScore} = this.props.teams
    return (
      <div className='scoring-footer-container'>
        <h2>{`${teamOne} : ${teamOneScore}`}</h2>
        <h2>{`${teamTwo}: ${teamTwoScore}`}</h2>
      </div>
    )
  }
}

export default ScoringFooter;