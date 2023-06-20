import React, { Component } from 'react'

class ClassTimer extends Component {

    interval
    constructor(props) {
        super(props)

        this.state = {
            timer: 0
        }
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState(prevState => (this.setState({ timer: prevState.timer + 1 })))
        }, 1000)
    }

    // The return function is the cleanup function, 
    // or when the user leaves the page and the component will unmount
    componentWillUnmount() {
        clearInterval(this.interval)
    }

    render() {
        return (
            <div>
                Class Timer - {this.state.timer} -
                <button onClick={() => clearInterval(this.interval)}>Clear Timer</button>
            </div>
        )
    }
}

export default ClassTimer