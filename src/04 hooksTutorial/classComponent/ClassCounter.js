import React, { Component } from 'react'
import '../00_cssComponents/appStyle.css'

class ClassCounter extends Component {

    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    incrementCount = () => {
        this.setState({
            count: this.state.count + 1
        })
    }


    render() {
        return (
            <div>
                <button className="spacing" onClick={this.incrementCount}>Class Count: {this.state.count}</button>
            </div>
        )
    }
}

export default ClassCounter
