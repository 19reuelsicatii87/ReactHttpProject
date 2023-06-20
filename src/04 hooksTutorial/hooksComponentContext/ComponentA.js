import React, { useContext } from 'react'
import { CountContext } from './../HookApp'

function ComponentA() {

    const countContext = useContext(CountContext)
    return (
        <div style={{padding: "12px"}}>
            <p><b>ComponentA</b> -  Count:  {countContext.countState}</p>
            <button onClick={() => countContext.countAction('increment')}>Increment</button>
            <button onClick={() => countContext.countAction('decrement')}>Decrement</button>
            <button onClick={() => countContext.countAction('reset')}>Reset</button>
        </div>
    )
}

export default ComponentA