import React from 'react'
import '../CSS/calcAppStyle.css'

function OperButton(props) {

    const clickHandler = () => {
        //console.log(props.number)
        props.changeDisplayText(props.number)
    }

    return (
        <>
            <button className="operbutton" onClick={clickHandler}>{props.number}</button>
        </>
    )
}

export default OperButton
