import React from 'react'
import style from '../00_cssComponents/list.module.css'

function List(props) {
    return (

        <div>
            <div className={`d-flex justify-content-between ${style.list_options}`}>
                <p>{`${props.index + 1}. ${props.option}`} </p>
                <a type='button' onClick={() => props.removeOne(props.option)}>Remove</a>
            </div>
        </div>


    )
}

export default List
