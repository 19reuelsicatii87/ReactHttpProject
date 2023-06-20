import React, { useEffect, useState } from 'react'
import '../../00_cssComponents/appStyle.css'

function HookCounterOne() {

    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `Clicked ${count} times`
        console.log("useEffect")
    })


    return (
        <div>
            <div style={{border : "1px solid black"}}>
                <p className="spacing">You clicked {count} times</p>
                <button className="spacing"
                    onClick={() => setCount(count + 1)}>HookCounter - Click {count} times
                </button>
            </div>
            <form style={{border : "1px solid black"}}>
                <div className="form-group row spacing">
                    <button
                        className="col-sm-6"
                        onClick={() => setCount(count + 1)}>Increment Count</button>
                    <label className="col-sm-3 col-form-label">HookCounter: </label>
                    <div className="col-sm-2">
                        <textarea rows="1" cols="20"
                            className="form-control"
                            defaultValue={count}
                            onChange={() => setCount(count)} />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default HookCounterOne
