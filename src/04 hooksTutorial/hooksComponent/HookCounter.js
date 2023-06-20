import React, { useState } from 'react'
import '../00_cssComponents/appStyle.css'

function HookCounter() {

    const [count, incrementCount] = useState(0)

    return (
        <div>
            <button className="spacing" onClick={() =>incrementCount(count+1)}>Hook Count: {count}</button>
        </div>
    )
}

export default HookCounter
