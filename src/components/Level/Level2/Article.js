import React, { Component } from 'react'

class Article extends Component {
  render() {
    return(
      <p>{this.props.getStuff}</p>
    )
  }
}

export default Article
