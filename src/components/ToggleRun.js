import React, { Component } from 'react';

class ToggleRun extends Component {
  render() {
    console.log(this.props)
    return(
      <div>
        <p onClick={this.props.toggleRun}>{this.props.run}</p>
      </div>
    )
  }
}

export default ToggleRun
