import React, { useReducer } from 'react'

const initialState = 5
const reducer = (state, action) => {
    switch (action) {
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
        case 'reset':
            return initialState
        default:
            return state
    }
}

function CounterOne() {
    const [count, action] = useReducer(reducer, initialState)

    return (
        <div>
            <div>Count = {count}</div>
            <button onClick={() => action('increment')}>Increment</button>
            <button onClick={() => action('decrement')}>Decrement</button>
            <button onClick={() => action('reset')}>Reset</button>
        </div>
    )
}

export default CounterOne