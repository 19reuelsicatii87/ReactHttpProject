import React, { Component } from 'react'
import Header from './Header'
import BigButton from './BigButton'
import OptionList from './OptionList'
import '../00_cssComponents/appStyle.css'

class IndecisionApp extends Component {

  

    render() {
        return (
            <div>
                <div className='row header'>
                    <div className='col-2'></div>
                    <div className='col-8'>
                        <div className='row'>
                            <div className='col'>
                                <Header></Header>
                            </div>
                        </div>
                    </div>
                    <div className='col-2'></div>
                </div>
                <div className='row'>
                    <div className='col-2'></div>
                    <div className='col-8'>
                        <div className='row'>
                            <div className='col'>
                                <OptionList/>
                            </div>
                        </div>
                    </div>
                    <div className='col-2'></div>
                </div>
            </div>
        );
    }
}

export default IndecisionApp
