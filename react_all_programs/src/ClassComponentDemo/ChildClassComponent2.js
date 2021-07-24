import React, { Component } from 'react';

class ChildClassComponent2 extends Component {

    constructor(props){
        super(props)
        this.state={
            child_counter: this.props.child_counter,
        }
    }

    static getDerivedStateFromProps(props, state){
        console.log(props, state)
        if(props.child_counter!== state.child_counter)
            // return {child_counter: props.child_counter}
        return null
    }

    render() {
        return (
            <div>
                <h1>counter value of parent2 from child is {this.state.child_counter}</h1>
                {/* this value will not change directly, to reflect the chaged value we have to use the lifecycle method "getDerivedStateFromProps" */}
            </div>
        );
    }
}

export default ChildClassComponent2;