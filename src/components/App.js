import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import Header from './Header/Header'
import Footer from './Footer'

class App extends Component {
  constructor() {
    super();
    this.state = {name: "Vladimir"};
  }
  render() {
    setTimeout(() => {
      this.setState({name: "Vlad"})
    }, 1000)
    return (
      <div>
        <Header />
        <h1>My name is {this.state.name} and I am a developer</h1>
        < Footer />
      </div>
    );
  }
}

export default App;
