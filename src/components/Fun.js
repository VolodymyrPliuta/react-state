import React, { Component } from 'react';

class Fun extends Component {
  render() {
    return(
      <h2 onClick={this.props.addFun}>{this.props.fun}</h2>
    )
  }
}

export default Fun
