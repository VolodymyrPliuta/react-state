import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import Title from './Title'

class Header extends Component {
  handleChange(e) { 
    const title = e.target.value;
    this.props.changeTitle(title);
  }
  render() {
    return (
      <div>
        <Title title={this.props.title} />
        <input onChange={this.handleChange.bind(this)} />
      </div>
    );
  }
}

export default Header;
