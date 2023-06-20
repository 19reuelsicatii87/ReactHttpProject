import React from 'react'
import ComponentE from './ComponentE';

function ComponentC() {
    return (
        <div style={{ padding: "12px" }}>
            ComponentC
            <ComponentE />
        </div>

    )
}

export default ComponentC