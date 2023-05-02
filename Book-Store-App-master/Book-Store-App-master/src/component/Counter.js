import React, { Component } from "react";
// import '../App.css';

class Counter extends Component {
    constructor() {
        super()
        this.state = {
            number: 10,
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState({
            number: this.state.number + 4,
        })
    }
    render() {
        return (
            <>
                <h1>Counter Value : {this.state.number}</h1>
                <input type="button" value="Increment Value" onClick={this.handleClick} id="button" />
            </>
        );
    }
}
export default Counter;