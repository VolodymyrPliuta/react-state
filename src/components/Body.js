import React from 'react';
import { Link } from 'react-router-dom';

class Body extends React.Component {
   boom = () => {
    console.log('number')
  }

  callThree = () => {
    this.props.removeConf();
    this.props.changeColor();
    this.boom();
  }
  render() {
    return (
      <div>
        <p onClick={this.callTwo}>to pass as a property, We use this.props.NameOfTheProperty {this.props.conference}</p>
        <p className="rum" onMouseEnter={this.props.removeP}>Book. another stare the nest conf is {this.props.hangout}</p>
        <p>pass in {this.props.conference}</p>
        <p><Link to='/route'>Route</Link></p>
      </div>
    )
  }
}

export default Body;
