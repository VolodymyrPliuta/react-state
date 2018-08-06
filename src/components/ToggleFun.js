import React, { Component } from 'react';
import Tf from './Tf';
import PropTypes from 'prop-types';

class ToggleFun extends Component {
  render() {
    return(
      <div>
        <p onClick={this.props.toggleFun}>{this.props.fun}</p>
        <Tf fun={this.props.fun} toggleFun={this.props.toggleFun} />
      </div>
    )
  }
}

ToggleFun.propTypes = {
  toggleFun:PropTypes.func
}

export default ToggleFun
