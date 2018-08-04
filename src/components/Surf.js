import React, { Component } from 'react'

class Surf extends Component {
  render() {
    console.log(this)
    return(
      <p onClick={this.props.increase}>Number of surf this year = {this.props.num}</p>
    )
  }
}

export default Surf
