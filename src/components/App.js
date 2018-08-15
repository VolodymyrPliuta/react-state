import React, { Component } from 'react';
import Header from './Header/Header';
import Body from './Body';
import Body1 from './Body1';
import Body2 from './Body2';
import Footer from './Footer';
import Clock from './Clock';
import Fun from './Fun';
import ToggleFun from './ToggleFun';
import ToggleRun from './ToggleRun';
import Level1 from './Level/Level1';
import Surf from './Surf';
import { Route } from 'react-router-dom';
import RouteComponent from './RouteComponent';
import Secret from './Secret';

const green = '#39D1B4';
const yellow = '#FFD712';
const one = 1;

class SimpleComponent extends Component {
  render(){
    console.log(this.props)
    //Object destructuring
    const {dostuff, drink, food} = this.props
    return <p>Simple {dostuff} {drink} {food} </p>
  }
}
export {SimpleComponent};

class App extends Component {
  constructor() {
    super();
    this.state = {
      frog: 'blah',
      title: "Welcome",
      conference: "DEFCON-2018",
      hanguot: "Code on the beach 2018",
      color: green,
      date: new Date(),
      fun: "Have fun when run!",
      run: "GO run",
      level: "We are on Level",
      num: 1
    };
  }

  very = () => {
    this.setState({
      title: 'Very Welcome'
    })
  }

  getStuff = () => {
    const searchedForText='winner'
    const url = `http://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchedForText}&api-key=0fd16f9ca25b4e0ea140b5e5aa1aa085`

    const resultOfFetch = fetch(url)
      .then(response => { return response.json() } )

    console.log(resultOfFetch)
    //.then(addArticle)
    //.catch(e => requestError(e, 'article'));
  }

  removeConf = () => {
    this.setState({
      conference: "Code on the beach 2018"
    });
  }

  increase = () => {
    this.setState((prevState) => {
      return {
        num: prevState.num + one
      }
    }
    );
  }

  addFun = () => {
    this.setState({
      fun:'more fun more run!'
    });
  }

  toggleFun = () => {
    if (this.state.fun == 'Have fun when run!'){
      this.setState({
        fun:'more fun'
      })
    }
    else{this.setState({
      fun: 'Have fun when run!'
    })}
  }

  toggleRun = () => {
    if (this.state.run == 'GO run'){
      this.setState({
        run: 'Run like a bun'
      })
    }
    else{this.setState({
      run: 'GO run'
    })}
  }


  removeP = () => {
    //let element = document.querySelector('.rum')
    let element = document.querySelector('.rum');
    element.parentNode.removeChild(element);
    //element.removeChild(element);
  }

  changeColor = () => {
    console.log('frog')
    this.setState({color: 'red'});
    let bl = this.state.color
    return bl.toString()
  }

  changeTitle(frog) {
    this.setState({frog});
  }
  render() {
    const title = "Welcome Vladimir!";
    this.getStuff()
    return (
      <div>
        <Route path="/route" render={(test) => (<RouteComponent {...test} isAuthed={true}/> )} />
        <Header changeTitle={this.changeTitle.bind(this)} title={this.state.title }/>
        <Route exact path="/secret" component={Secret}></Route>
        <Route exact path="/"
          render={() => {
            return(
              <div>
                <Body state={this.state} changeColor={this.changeColor} color={this.state.color} conference={this.state.conference} hangout={this.state.hangout} removeP={this.removeP} removeConf={this.removeConf} />
                <p onClick={(e) => this.changeColor(e)}> change color</p>
                <Body1>
                  <li>New York conf</li>
                  <li>Boston conf</li>
                </Body1>
                <SimpleComponent dostuff='Yoo' drink='henesy' food='Salmon'/>
                <Body2 conference="DEFCON" />
                <p> exact: {this.state.conference} </p>
                <h2> {this.state.conference} </h2>
                <Footer />
                <Clock tik={this.state.date} conference={this.state.conference} removeConf={this.removeConf} />
                <Fun addFun={this.addFun} fun={this.state.fun} />
                <ToggleFun toggleFun={this.toggleFun} fun={this.state.fun} />
                <ToggleRun toggleRun={this.toggleRun} run={this.state.run} />
                <Level1 level={this.state.level} welcome={this.state.title} very={this.very}/>
                <Surf num={this.state.num} increase={this.increase}/>
              </div>
            )
          }}
      >
      </Route>
      <Route exact path="/nice"
        render={
        () => {
          return(
            <div>
              <h1> Nice to know how to work with router</h1>
              <h2> Time for surfing </h2>
              <h3> If I don't responce my phone I am surfing. Please leave your messege after the tone</h3>
            </div>
          )
        }}
      >
      </Route>
    </div>
    );
  }
}

export default App;
