import React, { Component } from 'react';
import Level2 from './Level2/Level2.js'

class Level1 extends Component {
  render() {
    return(
      <div>
        <p>{this.props.level}</p>
        <Level2 level={this.props.level} />
      </div>
    )
  }
}

export default Level1
