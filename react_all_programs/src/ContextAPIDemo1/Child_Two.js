import React, { Component } from 'react';
import {MyContext} from './ContextAPIDemo'
class Child_Two extends Component {
    render() {
        return (
            <div>
            <h1> this is child two Component </h1>
            <MyContext.Consumer>
                {(contectValue)=>{
                    return (
                    <div>
                        <h1>Name:{contectValue.state.name}</h1>
                        <h1>counter form child two: {contectValue.state.counter}</h1>
                        <button onClick={contectValue.handleClick}>CLICK TO INCREMENT</button>
                    </div>  
                    )
                }}
            </MyContext.Consumer>
            </div>
        );
    }
}

export default Child_Two;