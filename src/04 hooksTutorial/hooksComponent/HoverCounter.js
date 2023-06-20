  
import React, { Component } from 'react'
import UpdatedComponent from './withCounter'
import '../00_cssComponents/appStyle.css'

class HoverCounter extends Component {




	render() {

		const {count, incrementCount, name} = this.props
		return <h2 className='primary' 
        onMouseOver={incrementCount}>Hovered {count} times {name}</h2>
	}
}

export default UpdatedComponent(HoverCounter, 5)