import React, { Component } from 'react';
import ChildClassComponent from './ChildClassComponent'
import ChildClassComponent2 from './ChildClassComponent2'


class ParentClassComponent extends Component {

    constructor(props){
        super(props)
        this.state={
            counter: 0,
        }
    }


    increment_counter=()=>{
        this.setState({
            counter: this.state.counter+1
        })
    }
    render() {
        return (
            <div>
                <button onClick={this.increment_counter}><h1>+</h1></button>
                <h1>counter value from parent is{this.state.counter}</h1>
                <ChildClassComponent passed_counter={this.state.counter}/>
                <ChildClassComponent2 child_counter={this.state.counter}/>
            </div>
        );
    }
}

export default ParentClassComponent;