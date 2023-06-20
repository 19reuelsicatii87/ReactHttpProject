import React, { Component } from 'react'
import '../00_cssComponents/appStyle.css'

class ClassCounterOne extends Component {

    constructor(props) {
        super(props)

        this.state = {
            count: 0,
            propsCount : parseInt(this.props.count)
        }
    }

    componentDidMount() {
        document.title = `Clicked ${this.state.count} times`
        console.log("componentDidMount")
        console.log(`currProps:  ${this.props.count}`)
        console.log(`currState:  ${this.state.count}`)
    }

    componentDidUpdate(prevProps, prevState) {
        document.title = `Clicked ${this.state.count} times`
        console.log("componentDidUpdate")
        console.log(`currProps:  ${this.state.propsCount}`)
        console.log(`currState:  ${this.state.count}`)
        console.log(`prevProps:  ${prevProps.count}`)
        console.log(`prevState:  ${prevState.count}`)
    }

    increment = () => {

        this.setState({
            count: this.state.count + 1,
            propsCount: this.state.propsCount + 1
        })

    }

    render() {
        return (
            <div>
                <p className="spacing">You clicked {this.state.count} times</p>
                <button className="spacing"
                    onClick={this.increment}>
                    ClassCounter - Click {this.state.count} times</button>
                <form>
                    <div className="form-group row spacing">
                        <button
                            className="col-sm-6"
                            onClick={() => this.setState({ count: this.state.count + 1 })}>Increment Count</button>
                        <label className="col-sm-3 col-form-label">ClassCounter: </label>
                        <div className="col-sm-2">
                            <textarea rows="1" cols="10"
                                className="form-control"
                                defaultValue={this.state.count} />
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default ClassCounterOne
