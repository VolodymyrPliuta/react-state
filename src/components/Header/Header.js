import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import Title from './Title'

class Header extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <Title title={this.props.title}/>
      </div>
    );
  }
}

export default Header;
