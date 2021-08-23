import React from 'react';

import './scoringFooter.scss';

import { connect } from 'react-redux';

class ScoringFooter extends React.Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    console.log('Footer')
    console.log(this.props.teams)
    const {teamOne, teamTwo} = this.props.teams
    return (
      <div className='scoring-footer-container'>
        <div>{`${teamOne} : 0`}</div>
        <div>{`${teamTwo}: 0`}</div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    nameOne: state.nameOne,
    nameTwo: state.nameTwo
  }
}

export default ScoringFooter;