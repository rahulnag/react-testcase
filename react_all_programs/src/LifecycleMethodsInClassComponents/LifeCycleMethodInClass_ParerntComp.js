import React, { Component } from 'react';
import LifecycleMethodInClassComp from './LifecycleMethodInClassComp'

class LifeCycleMethodInClass_ParerntComp extends Component {
    constructor(props){
        super(props)
        this.state={
            counter: 0
        }
    }

    incrementCounter=()=>{
        this.setState({
            counter: this.state.counter+1
        })
    }
    decrementCounter=()=>{
        this.setState({
            counter: this.state.counter-1
        })
    }
    render() {
        return (
            <div>
                <button onClick={this.incrementCounter}><h1>+</h1></button>
                <button onClick={this.decrementCounter}><h1>-</h1></button>
                <LifecycleMethodInClassComp send_counter={this.state.counter}/>
            </div>
        );
    }
}

export default LifeCycleMethodInClass_ParerntComp;