import React, { useState } from 'react'

function ClickCounterFour() {

    const [items, setItems] = useState([
        {
            id: 0,
            value: 'Test'
        },
        {
            id: 1,
            value: 'Text'
        }
    ])

    const addItem = () => {
        setItems([
            ...items,
            {
                id: items.length,
                value: Math.floor(Math.random() * 10) + 1
            }
        ])
    }

    return (
        <div>            
            <ul>
                {
                    items.map(item => (<li key={item.id}>{item.id} -- {item.value}</li>))
                }
            </ul>
            <button onClick={addItem}>Add a Number</button>
        </div>
    )
}

export default ClickCounterFour
