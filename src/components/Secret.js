import React from 'react';
import { Link } from 'react-router-dom';

class Secret extends React.Component{
  render() {
    console.log(this.props.number)
    return(
      <div>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/route'>RouteComponent</Link></li>
            <li><Link to='/nice'>Nice to Know</Link></li>
            <li onClick={this.props.increase}>{this.props.number}</li>
          </ul>
      </div>
    )
  }
}

export default Secret
