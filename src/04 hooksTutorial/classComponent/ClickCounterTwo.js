import React, { Component } from 'react'


class ClickCounterTwo extends Component {

  render() {
    const { count, name } = this.props

    return <button
      className="spacing"
      onClick={() => this.props.incrementCount(5)}>
      Clicked {count} times {name}</button>
  }
}

export default ClickCounterTwo