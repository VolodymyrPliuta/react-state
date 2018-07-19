import React from 'react'
import ReactDOM from 'react-dom'

const Body1 = (props) => {
  return (
    <div>
      <p>Body1 component is a functional componet that dosn't take any props. It just render itself</p>
      <p>Body1. functional components can be declared with variable or without:</p>
      <p> const Body1 = () => return or function Body1 () return</p>
      <ul>{props.children}</ul>
    </div>
  )
}

export default Body1

