import React, { useState } from 'react'
import '../00_cssComponents/appStyle.css'

function HookCounterTwo() {

    const initialCount = 0;
    const [count, setCount] = useState(initialCount)

    //Referencing a Function
    //====================================
    const incrementBy = () => {
        for (let index = 0; index < 5; index++) {
            setCount(count => count + 1)
        }
    }

    //Calling a Function
    //====================================
    const decrementBy = (value) => {
        for (let index = 0; index < value; index++) {
            setCount(count => count - 1)
        }
    }

    return (
        <div>
            <label>Count: {count}</label>
            <button className="spacing" onClick={() => setCount(initialCount)}>Reset</button>
            <button className="spacing" onClick={() => setCount(count + 1)}>Increment</button>
            <button className="spacing" onClick={() => setCount(count - 1)}>Decrement</button>
            <button className="spacing" onClick={incrementBy}>Increment by 5</button>
            <button className="spacing" onClick={() => decrementBy(5)}>Decrement by 5</button>
        </div>
    )
}

export default HookCounterTwo
