import React from 'react'

function NumberButton(props) {

    const clickHandler = () => {
        //console.log(props.number)
        props.changeDisplayText(props.number)
    }

    return (
        <>
            <button onClick={clickHandler}>{props.number}</button>
        </>
    )
}

export default NumberButton
