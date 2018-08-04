import React, { Component } from 'react';

class Tf extends Component {
  render() {
    console.log(this.props)
    return(
      <div>
        <p onClick={this.props.toggleFun}>this is Tf {this.props.fun}</p>
      </div>
    )
  }
}

export default Tf
