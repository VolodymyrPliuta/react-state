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
       {/* we can call multiple functions combining them together
        <p onClick={this.callThree}>to pass as a property, We use this.props.NameOfTheProperty {this.props.conference}</p>

        we also can call multiple funcions using callback, in this case we don't have to combine them at one function */}
        <p onClick={() => {this.props.removeConf(); this.props.changeColor(); this.boom()}}>to pass as a property, We use this.props.NameOfTheProperty {this.props.conference}</p>
        <p className="rum" onMouseEnter={this.props.removeP}>Book. another stare the nest conf is {this.props.hangout}</p>
        <p>pass in {this.props.conference}</p>
        <p><Link to='/route'>Route</Link></p>
      </div>
    )
  }
}

export default Body;
