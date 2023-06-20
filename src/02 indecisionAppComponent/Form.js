import React, { Component } from 'react'
import style from '../00_cssComponents/list.module.css'

class Form extends Component {

    constructor(props) {
        super(props)

        this.state = {
            option: "",
            noItemError: false,
            duplicateItemError: false
        }
    }


    optionHandler = (event) => {
        console.log('onChange: ' + event.target.value);
        this.setState({
            option: event.target.value,
            noItemError: false,
            duplicateItemError: false
        })
    }

    validateInput = (noItemErrorTemp, duplicateItemErrorTemp) => {

        console.log(`child_ValidateInput Value:  ${noItemErrorTemp} --  ${duplicateItemErrorTemp}`)

        if (this.state.option == "") {

            this.setState({
                option: "",
                noItemError: true,
                duplicateItemError: false
            })

            noItemErrorTemp = true
            duplicateItemErrorTemp = false

        }
        else if (true) {

            this.props.options.map(option => {
                if (this.state.option == option) {

                    this.setState({
                        option: "",
                        noItemError: false,
                        duplicateItemError: true
                    })

                    noItemErrorTemp = false
                    duplicateItemErrorTemp = true

                }
            })
        }


        console.log(`child_ValidateInput Value(BeforeAdd):  ${noItemErrorTemp} --  ${duplicateItemErrorTemp}`)
        if (noItemErrorTemp == false && duplicateItemErrorTemp == false) {
            this.addOneFunc()
        }

    }

    addOneFunc = () => {
        console.log(`child_addOneFunc_Option Value:  ${this.state.option}`)
        this.props.addOne(this.state.option)
    }


    render() {

        console.log(`child_Render_noItemErrorVduplicateItemError Value:  ${this.state.noItemError} --  ${this.state.duplicateItemError}`)

        return (
            <div className={style.list_form}>
                {this.state.noItemError == true && <p>Enter valid value to add item.</p>}
                {this.state.duplicateItemError == true && <p>The item already exists.</p>}
                <div className='d-flex justify-content-between'>
                    <input type="text" onChange={this.optionHandler} value={this.state.option}></input>
                    <button onClick={() => this.validateInput(this.state.noItemError, this.state.duplicateItemError)}>Add Option</button>
                </div>
            </div>

        )
    }

}

export default Form
