import React from 'react'
import ComponentD from './ComponentD';

function ComponentB() {
    return (
        <div style={{ padding: "12px" }}>
            ComponentB
            <ComponentD />
        </div>

    )
}

export default ComponentB