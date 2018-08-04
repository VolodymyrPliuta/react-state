import React, { Component } from 'react'

class Level4 extends Component {
  render() {
    return(
      <p onClick={this.props.very}>{this.props.level} 4</p>
    )
  }
}

export default Level4
