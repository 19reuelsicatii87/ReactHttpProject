import React, { useContext } from 'react'
import { CountContext } from './../HookApp'

function ComponentD() {

    const countContext = useContext(CountContext)
    return (
        <div>
            <p><b>ComponentD</b> -  Count:  {countContext.countState}</p>
            <button onClick={() => countContext.countAction('increment')}>Increment</button>
            <button onClick={() => countContext.countAction('decrement')}>Decrement</button>
            <button onClick={() => countContext.countAction('reset')}>Reset</button>
        </div>
    )
}

export default ComponentD