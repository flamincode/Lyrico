import React from 'react';

import './scoringFooter.scss';

import { connect } from 'react-redux';

class ScoringFooter extends React.Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    return (
      <div className='scoring-footer-container'>
        <div>{`${this.props.nameOne ? this.props.nameOne : 'Team One'}: 0`}</div>
        <div>{`${this.props.nameTwo ? this.props.nameTwo : 'Team Two'}: 0`}</div>
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

export default connect(mapStateToProps)(ScoringFooter);