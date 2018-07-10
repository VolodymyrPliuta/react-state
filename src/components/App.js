import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import Header from './Header/Header'
import Footer from './Footer'

class App extends Component {
  render() {
    const title = "Welcome Vladimir!";
    return (
      <div>
        <Header title={title} name={"Vladimir - you deserve it"}/>
        <Header title={"Yo man, be brave"} name={"Vladimir - you deserve it"}/>
        <Footer />
      </div>
    );
  }
}

export default App;
