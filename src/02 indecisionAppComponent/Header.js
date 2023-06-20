import React from 'react'
import style from '../00_cssComponents/header.module.css'


function Header() {
    return (
        <>
            <h1 className={style.header_title}>Indecision</h1>
            <h2 className={style.header_subtitle}>Put your life in the hands of a computer.</h2>
        </>
    )
}

export default Header
