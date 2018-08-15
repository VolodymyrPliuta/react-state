import React from 'react'

class RouteComponent extends React.Component {
  render() {
    console.log('no props', this.props)
    // let { name } = this.props
    return(
      <p>Router works</p>
    )
  }
}

export default RouteComponent
