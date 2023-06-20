import React from 'react'
import { Button } from 'react-bootstrap'
import style from '../00_cssComponents/button.module.css'


function BigButton() {
    return (
        <>
            <input type="button" className={style.button_big} value="What Should I Do?"></input>
        </>
    )
}

export default BigButton
