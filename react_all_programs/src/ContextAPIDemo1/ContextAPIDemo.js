import React, { Component } from 'react';
import Child_One from './Child_One'

let MyContext = React.createContext();
// let MyContext = React.createContext("some default value");
//this default value is used when we dont have provider but we have a consumer who is consuming data then this default value has been used.


class ContextAPIDemo extends Component {
    constructor(props){
        super(props)
        this.state={
            name:"rahul",
            counter: 0
        }
    }

    handleClick=()=>{
        this.setState({
            counter: this.state.counter+1})
    }


    render() {

        
        let contextValue={
            state: this.state,
            handleClick: this.handleClick
        }


        return (
            <MyContext.Provider value={contextValue}>
                <h1>THIS IS THE PARENT COMPONENT</h1>
                <h1>counter value from parent:{this.state.counter}</h1>
                <Child_One/>
            </MyContext.Provider>
        );
    }
}

export default ContextAPIDemo;
export {MyContext}