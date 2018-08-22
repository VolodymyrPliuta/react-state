import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import Header from './Header/Header'
import Footer from './Footer'

class App extends Component {
  render() {
    const Menu = () => {
      return(
        <div>
          <p>Return <a href="/">Home</a></p>
        </div>
      )
    }
    const Note = () => {
      return(
        <div>
        </div>
      )
    }
    const Section = () => {
      return(
        <div>
        </div>
      )
    }
    const List = () => {
      return(
        <div>
        </div>
      )
    }
    const title = "Welcome Vladimir!";
    return (
      <body>
        <Menu />
        <Note />
        <div id="main_content_wrap" class="outer">
          <section id="main_content" class="inner">
            <h1>Jobs at Kickass Consulting</h1>
            <h2>Full-Stack Web Developer</h2>
            <p>
              Seeking full-stack web developers to join our small team onsite in Mexico City.
              We have a fun and relaxed working environment in the heart of beautiful Condesa,
              generous time off policies and pay competitive rates.
            </p>
            <p>
              <strong>Requirements</strong>
              <ul>
                <li>Productive with Ruby on Rails and modern JavaScript (ES6+).</li>
                <li>Fluent English-speaking and excellent writing skills.</li>
                <li>Depth of experience working in different programming languages and paradigms.</li>
                <li>Experience maintaining production-deployed web applications.</li>
              </ul>
              <strong>Preferred</strong>
              <ul>
                <li>At least 10 or more years of professional development experience.</li>
                <li>Lots of experience working in different programming languages and paradigms.</li>
                <li>Experience working directly with clients.</li>
                <li>Deep love of music, board games and/or adventure travel.</li>
              </ul>
            </p>
            <p>If interested, contact us via <a href="mailto:obie@kickass-consulting.com">email</a>.</p>
          </section>
        </div>
      </body>
    )
  }
}

      export default App;
