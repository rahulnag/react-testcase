import React, { Component } from 'react';

class ChildComponent extends Component {
    constructor(props){
        super(props)
        this.state={
            childCounter: 10
        }
    }

    checkValue=()=>{
        // console.log("llllllllllll")
        this.setState({
            childCounter: this.state.childCounter+this.props.increment
        })
    }
    render() {
        return (
            <div>
                <h1>{this.state.childCounter}</h1>
                <button onClick={this.checkValue}>CLICK TO CHECK</button>
            </div>
        );
    }
}

export default ChildComponent;