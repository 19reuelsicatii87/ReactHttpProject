
import React, { Component } from 'react'
import '../00_cssComponents/appStyle.css'

class HoverCounterTwo extends Component {

	render() {

		const { count, name } = this.props
		return <h2 className='primary'
			onMouseOver={() => this.props.incrementCount(10)}>
			Hovered {count} times {name}</h2>
	}
}

export default HoverCounterTwo