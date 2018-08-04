import React, { Component } from 'react';
import {Level2, Level3, Level4} from './Level2/index.js'

class Level1 extends Component {
  render() {
    return(
      <div>
        <p onClick={this.props.very}>{this.props.level} {this.props.welcome}</p>
        <Level2 level={this.props.level} />
        <Level3 level={this.props.level} welcome={this.props.welcome} />
        <Level4 level={this.props.level}  very={this.props.very} />
      </div>
    )
  }
}

export default Level1
