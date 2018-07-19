import React, { Component } from 'react';
import Header from './Header/Header'
import Body from './Body'
import Body1 from './Body1'
import Body2 from './Body2'
import Footer from './Footer'

const green = '#39D1B4';
const yellow = '#FFD712';

class App extends Component {
  constructor() {
    super();
    this.state = {
      frog: 'blah',
      title: "Welcome",
      conference: "DEFCON-2018",
      hanguot: "Code on the beach 2018",
      color: green
    };
  }

  removeConf = () => {
    this.setState({
      conference: "Code on the beach 2018"
    });
  }

  removeP = () => {
    //let element = document.querySelector('.rum')
    let element = document.querySelector('.rum');
    console.log(element)
    element.parentNode.removeChild(element);
    //element.removeChild(element);
  }

  changeColor = () => {
    this.setState({color: yellow});
  }

  changeTitle(frog) {
    this.setState({frog});
  }
  render() {
    const title = "Welcome Vladimir!";
    console.log(this)
    return (
      <div>
        <Header changeTitle={this.changeTitle.bind(this)} title={this.state.title }/>
        <Body changeColor={this.changeColor} conference={this.state.conference} hangout={this.state.hangout} removeP={this.removeP} removeConf={this.removeConf} />
        <Body1>
          <li>New York conf</li>
          <li>Boston conf</li>
        </Body1>
        <Body2 conference="DEFCON" />
        <p> exact: {this.state.conference} </p>
        <Footer />
      </div>
    );
        console.log(this)
  }
}

export default App;
