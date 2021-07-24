import React, { Component } from 'react';

class Child1 extends Component {
    constructor(props){
        super(props)
    }
    render() {
        console.log("child1 renders")
        return (
            <div>
                <h3>{`counter value from child1 comp of parent comp ${this.props.counterValue}`}</h3>
                <button onClick={this.props.counterHandler}>CLICK BUTTON FROM CHILD1</button>
            </div>
        );
    }
}

export default Child1;