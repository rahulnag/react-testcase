import React, { Component } from 'react';
import Child1 from './Child1'
import Child2 from './Child2'
class Parent extends Component {
    state={
        counter: 0,
    }

    counterHandler=()=>{
        this.setState({
            counter: this.state.counter+1,
        })
    }
    render() {
        console.log("parent render");
        return (
            <div>
                <h1>{`Counter Value from parent: ${this.state.counter}`}</h1>
                <Child1 counterHandler={this.counterHandler} counterValue={this.state.counter}/>
                <Child2/>
            </div>
        );
    }
}

export default Parent;