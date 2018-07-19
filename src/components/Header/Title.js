import React, { Component } from 'react';
import ReactDOM from 'react-dom'

class Title extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h1>{this.props.name}</h1>
      </div>
    );
  }
}

export default Title;
