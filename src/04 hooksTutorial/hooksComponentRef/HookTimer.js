import React, { useState, useEffect, useRef } from 'react'

function HookTimer() {
    const [timer, setTimer] = useState(0)
    const interValRef = useRef()
    
    useEffect(() => {

        console.log("setInterval function")
        interValRef.current = setInterval(() => {
            setTimer(timer => timer + 1)
        }, 1000)


        // The return function is the cleanup function, 
        // or when the user leaves the page and the component will unmount
        return () => {
            console.log("calling return function")
            clearInterval(interValRef.current)
        }

    }, [])
    return (
        <div>
            HookTimer - {timer} -
            <button onClick={() => clearInterval(interValRef.current)}>Clear Timer</button>
        </div>
    )
}

export default HookTimer