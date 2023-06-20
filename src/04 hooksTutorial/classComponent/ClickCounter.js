import React, { Component } from 'react'
import UpdatedComponent from './withCounter'

class ClickCounter extends Component {

  render() {
    const { count, incrementCount, name } = this.props
    //console.log('this is from ClickCounter: ' + this.props.name);

    return <button
      className="spacing"
      onClick={incrementCount}>
      Clicked {count} times {name}</button>
  }
}

export default UpdatedComponent(ClickCounter, 10)