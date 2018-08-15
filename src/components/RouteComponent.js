import React from 'react'

class RouteComponent extends React.Component {
  render() {
    console.log('no props', this.props)
    console.log(this.state)
    // let { name } = this.props
    return(
      <div>
        <p>Router works</p>
        <p>{this.props.number + 1}</p>
      </div>
    )
  }
}

export default RouteComponent
