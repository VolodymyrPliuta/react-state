import React from 'react'

class Body extends React.Component {
  boom =() => {
    console.log('number')
  }
  render() {
    return (
      <div>
        <p onClick={this.props.changeColor}
          onClick={this.props.removeConf}>to pass as a property, We use this.props.NameOfTheProperty {this.props.conference}</p>
        <p className="rum" onMouseEnter={this.props.removeP}>Book. another stare the nest conf is {this.props.hangout}</p>
        <p>pass in {this.props.conference}</p>
      </div>
    )
  }
}

export default Body;
