import React, { useState, useEffect } from 'react'

function HookCounterFour() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('')
    const [boool, setBoool] = useState(false)

    useEffect(
        () => {
            console.log(`useEffect - Updating document title with ${count} times`)
            document.title = `You clicked ${count} times`
        },
        [name]
    )

    function clickHandler () {
        setCount(count + 1)
        count > 2 && setBoool(!boool)
        console.log(`boool: ${boool} -- count: ${count}`)
        
    }

    return (
        <div>
            <input type="text" value={name} onChange={e => setName(e.target.value)} />
            <br></br>
            <br></br>
            <button onClick={clickHandler}>
                useEffect - Click {count} times
            </button>
        </div>
    )
}

export default HookCounterFour