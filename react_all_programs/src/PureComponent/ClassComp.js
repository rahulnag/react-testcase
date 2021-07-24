import React, { Component } from 'react';
import FunctionalComp from './FunctionalComp'
class ClassComp extends Component {
    constructor(props){
        super(props)
        
        this.state={
            counter: 10,
        }
    }


    IncrementCounter=()=>{
        this.setState({
            counter: this.state.counter+0,
        })
    }


    render() {
        console.log("hey there, class component is running")
        return (
            <div>
                <button onClick={this.IncrementCounter}><h1>+</h1>{this.state.counter}</button>
                <FunctionalComp send_counter={this.state.counter}/>
            </div>
        );
    }
}

export default ClassComp;