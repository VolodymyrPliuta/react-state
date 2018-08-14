import React from 'react';
import { Link } from 'react-router-dom';

class Secret extends React.Component{
  render() {
    return(
      <div>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/route'>RouteComponent</Link></li>
          </ul>
      </div>
    )
  }
}

export default Secret
