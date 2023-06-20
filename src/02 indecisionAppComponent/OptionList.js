import React, { Component } from 'react'
import style from '../00_cssComponents/list.module.css'
import List from './List'
import Form from './Form'
import BigButton from './BigButton'

class OptionList extends Component {

    constructor(props) {
        super(props)

        this.state = {
            options: ['write', 'read', 'eat', 'sleep'],
            removeAllError: false,
        }
    }


    removeOne = (option) => {
        this.setState({
            options: this.state.options.filter(val => val !== option)
        })
    }

    removeAll = () => {
        this.setState({
            options: [],
            removeAllError: true
        })
    }

    addOne = (option) => {       
        this.setState({ options: [...this.state.options, option] }) 
        this.state.options.push(option)

        this.setState({
            removeAllError: false
        })

    }

    render() {

        const OptionList = this.state.options.map((option, index) =>
            <List key={index} index={index} option={option} removeOne={this.removeOne}
                removeAllError={this.state.removeAllError}></List>
        )

        return (
            <div>
                <BigButton></BigButton>
                <div className={`d-flex justify-content-between ${style.list_header}`}>
                    <h4>Your Options</h4>
                    <h4>
                        <a type='button' onClick={this.removeAll}>Remove All</a>
                    </h4>
                </div>
                {OptionList}

                {
                    this.state.removeAllError == true &&
                    <div className={style.list_form_removeAll}>
                        <p>Please add an option to get started!</p>
                    </div>
                }

                <Form addOne={this.addOne} options={this.state.options}></Form>
            </div>
        )
    }
}

export default OptionList
