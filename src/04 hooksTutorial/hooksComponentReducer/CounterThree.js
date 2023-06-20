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

function CounterThree() {
    const [countOne, actionOne] = useReducer(reducer, initialState)
    const [countTwo, actionTwo] = useReducer(reducer, initialState)

    return (
        <div>
            <div>
                <div>Count = {countOne}</div>
                <button onClick={() => actionOne('increment')}>Increment</button>
                <button onClick={() => actionOne('decrement')}>Decrement</button>
                <button onClick={() => actionOne('reset')}>Reset</button>
            </div>
            <div>
                <div>Count = {countTwo}</div>
                <button onClick={() => actionTwo('increment')}>Increment</button>
                <button onClick={() => actionTwo('decrement')}>Decrement</button>
                <button onClick={() => actionTwo('reset')}>Reset</button>
            </div>

        </div>
    )
}

export default CounterThree