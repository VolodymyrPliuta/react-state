import React, { Component } from 'react'

class Clock extends Component {
  render() {
    let color = {
      color: 'green'
    }
    return(
      <div>
        <p> Time is {this.props.tik.toLocaleTimeString()}</p>
        <h1 style={color}> Let's change color</h1>
        <h3 onClick={this.props.removeConf}> Some conf {this.props.conference}</h3>
      </div>
    )
  }
}

export default Clock
