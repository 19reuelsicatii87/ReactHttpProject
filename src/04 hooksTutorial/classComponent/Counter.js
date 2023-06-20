import React, { Component } from 'react'

class Counter extends Component {

    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }

    incrementCurr() {
        this.setState(
            {
                count: this.state.count + 1
            },
            () => {
                console.log('Callback Value from Current State: ' + this.state.count);
            }
        )

        console.log('Non-Callback Value from Current State: ' + this.state.count);
    }

    incrementPrev() {
        this.setState(
            // previousState is not the name of the function but a Parameter
            // wrapping the curly brace with parentheses () means returning an object 
            // without the 'return' keyword
            // ===================================================
            previousState => ({count: previousState.count + 1}),
            () => {
                console.log('Callback Value from Previous State: ' + this.state.count);
            }
        )


        console.log('Non-Callback Value from Previous State: ' + this.state.count);

    }

    incrementFiveCurrent() {
        this.incrementCurr();
        this.incrementCurr();
        this.incrementCurr();
        this.incrementCurr();
        this.incrementCurr();
    }

    incrementFivePrev() {
        this.incrementPrev();
        this.incrementPrev();
        this.incrementPrev();
        this.incrementPrev();
        this.incrementPrev();
    }


    render() {
        return (
            <div >
                <h1>Count CurrState -- {this.state.count}</h1>
                <button onClick={() => this.incrementFiveCurrent()}>Increment 5 Current</button>

                <h1>Count PrevState -- {this.state.count}</h1>
                <button onClick={() => this.incrementFivePrev()}>Increment 5 Previous</button>
            </div>
        )
    }
}

export default Counter;