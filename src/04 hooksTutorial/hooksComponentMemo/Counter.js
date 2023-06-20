import React, { useState, useMemo } from 'react'

function Counter() {

    const [CounterOne, setCounterOne] = useState(0);
    const [CounterTwo, setCounterTwo] = useState(0);

    const incrementCounterOne = () => {
        console.log("incrementCounterOne");
        setCounterOne(CounterOne + 1);
    }

    const incrementCounterTwo = () => {
        console.log("incrementCounterTwo");
        setCounterTwo(CounterTwo + 1);
    }

    const isEven = useMemo (
        () => {
            console.log("isEven");
            let i = 0;
            while (i < 999999999) i++;
            return CounterOne % 2 === 0;
        },
        [CounterOne]
    )

    return (
        <div>
            <div>
                <button onClick={incrementCounterOne}>CounterOne - {CounterOne} - {isEven ? "Even" : "Odd"}</button>
            </div>
            <div>
                <button onClick={incrementCounterTwo}>CounterOne - {CounterTwo}</button>
            </div>
        </div>
    )
}

export default Counter