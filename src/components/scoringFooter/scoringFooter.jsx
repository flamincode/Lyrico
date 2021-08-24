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
        <div>{`${teamOne} : ${teamOneScore}`}</div>
        <div>{`${teamTwo}: ${teamTwoScore}`}</div>
      </div>
    )
  }
}

export default ScoringFooter;