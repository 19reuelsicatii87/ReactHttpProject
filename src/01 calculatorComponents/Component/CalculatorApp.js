import React, { Component } from 'react'
import NumberButton from './NumberButton'
import OperButton from './OperButton'
import '../CSS/calcAppStyle.css'



class CalculatorApp extends Component {

    constructor(props) {
        super(props)

        this.state = {
            displayText: "0"
        }
    }

    optionHandler = (event) => {
        // Do nothing
    }

    clearDisplayText = (number) => {

        this.setState({
            displayText: "0"
        })
    }

    changeDisplayText = (number) => {

        
        console.log("changeDisplayText")
        console.log(`State: ${this.state.displayText}`)

        const regex = new RegExp('^[0]');
        if (regex.test(this.state.displayText)) {

            this.setState({
                displayText: number
            })

        }
        else {

            this.setState({
                displayText: this.state.displayText + number
            })
        }
    }

    equalDisplayText = () => {

        const regex = new RegExp('^[0-9]*(.)[0-9]*(\\+|\\-|\\*|\\/)[0-9]*(.)[0-9]*$');
        console.log("equalDisplayText")
        console.log(this.state.displayText)

        if (regex.test(this.state.displayText)) {

            // this.setState({
            //     displayText: "No Syntax Error"
            // })

            let temp = this.state.displayText;
            let tempsplit, result;

            if (temp.includes("+")) {

                tempsplit = temp.split("+");
                result = Number(tempsplit[0]) + Number(tempsplit[1])
                this.setState({
                    displayText: result
                })


            }

            else if (temp.includes("-")) {

                tempsplit = temp.split("-");
                result = Number(tempsplit[0]) - Number(tempsplit[1])
                this.setState({
                    displayText: result
                })


            }

            else if (temp.includes("*")) {

                tempsplit = temp.split("*");
                result = Number(tempsplit[0]) * Number(tempsplit[1])
                this.setState({
                    displayText: result
                })

            }

            else if (temp.includes("/")) {

                tempsplit = temp.split("/");
                result = Number(tempsplit[0]) / Number(tempsplit[1])
                this.setState({
                    displayText: result
                })

            }

        }
        else {
            this.setState({
                displayText: "Syntax Error"
            })
        }
    }




    render() {
        return (

            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                    </div>
                    <div className="col-md-6">
                        <div className="Calculator">
                            <div className="Display">
                                <input type="text" onChange={this.optionHandler} value={this.state.displayText}></input>
                            </div>
                            <div className="Keypad">
                                <div className="Keypad-Center">
                                    <div className="d-flex justify-content-between Row1">
                                        <NumberButton number="7" changeDisplayText={this.changeDisplayText} />
                                        <NumberButton number="8" changeDisplayText={this.changeDisplayText} />
                                        <NumberButton number="9" changeDisplayText={this.changeDisplayText} />
                                        <OperButton number="+" changeDisplayText={this.changeDisplayText} />
                                    </div>
                                    <div className="d-flex justify-content-between Row2">
                                        <NumberButton number="4" changeDisplayText={this.changeDisplayText} />
                                        <NumberButton number="5" changeDisplayText={this.changeDisplayText} />
                                        <NumberButton number="6" changeDisplayText={this.changeDisplayText} />
                                        <OperButton number="-" changeDisplayText={this.changeDisplayText} />
                                    </div>
                                    <div className="d-flex justify-content-between Row3">
                                        <NumberButton number="1" changeDisplayText={this.changeDisplayText} />
                                        <NumberButton number="2" changeDisplayText={this.changeDisplayText} />
                                        <NumberButton number="3" changeDisplayText={this.changeDisplayText} />
                                        <OperButton number="*" changeDisplayText={this.changeDisplayText} />
                                    </div>
                                    <div className="d-flex justify-content-between Row4">
                                        <NumberButton number="0" changeDisplayText={this.changeDisplayText} />
                                        <NumberButton number="." changeDisplayText={this.changeDisplayText} />
                                        <button className="operbutton" onClick={this.clearDisplayText}>C</button>
                                        <OperButton number="/" changeDisplayText={this.changeDisplayText} />
                                    </div>
                                    <div className="d-flex justify-content-between Row5">
                                        <button className="Equals" onClick={this.equalDisplayText}>=</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3"></div>
                </div>
            </div>



        );
    }
}

export default CalculatorApp
