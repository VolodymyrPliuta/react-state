import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Fun extends Component {
  render() {
    return(
      <h2 onClick={this.props.addFun}>{this.props.fun}</h2>
    )
  }
}

Fun.propTypes = {
  addFun: PropTypes.func,
  //Test will be passed with any type of props that listed below
  fun: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
}

export default Fun
