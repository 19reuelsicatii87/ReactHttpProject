import React, { useReducer } from 'react'


const initialNumber = {
    groupOne: 0,
    groupTwo: 0
}

const update = (state, action) => {
    switch (action.group) {
        case 'groupOne':
            console.log(action.value)
            console.log("update groupOne", state)
            return { ...state, groupOne: action.value }
        case 'groupTwo':
            console.log(action.value)
            console.log("update groupTwo", state)
            return { ...state, groupTwo: action.value }
    }
}

const compute = (state, action) => {

    console.log("compute")
    console.log("compute", action)

    switch (action.operation) {
        case 'Add':
            console.log("calculate " + action.value.groupOne, "+", action.value.groupTwo)
            console.log("Add state ", state)
            return state = parseInt(action.value.groupOne,10) + parseInt(action.value.groupTwo,10)
        case 'Subtract':
            console.log(action.value.groupOne, "+", action.value.groupTwo)
            console.log("Subtract state ", state)
            return state = parseInt(action.value.groupOne,10) - parseInt(action.value.groupTwo,10)

    }
}

function Calculator() {

    const [numberUpdate, updateNumber] = useReducer(update, initialNumber)
    const [numberCalculate, calculate] = useReducer(compute, 10)

    return (
        <div style={{ padding: "12px" }}>
            <p>
                <input type="text"
                    value={numberUpdate.groupOne}
                    onChange={(e) => updateNumber({ group: "groupOne", value: e.target.value })}
                ></input>
            </p>
            <p>
                <input type="text"
                    value={numberUpdate.groupTwo}
                    onChange={(e) => updateNumber({ group: "groupTwo", value: e.target.value })}
                ></input>
            </p>
            <p>
                {/* <input type="text" value={numberCalculate}></input> */}
                {numberCalculate}
            </p>
            <button onClick={() => calculate({ operation: "Add", value: numberUpdate })}>Add</button>
            <button onClick={() => calculate({ operation: "Subtract", value: numberUpdate })}>Subtract</button>

        </div >
    )
}

export default Calculator