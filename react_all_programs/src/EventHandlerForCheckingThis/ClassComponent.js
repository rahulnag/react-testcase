import React, { Component } from 'react';

class ClassComponent extends Component {
    constructor(props){
        super(props)
        console.log("value of this inside constructor")
        console.log(this) //ClassComponent object
    }
    
    

    clickHandlerFunction(){
        console.log(this) //undefined
    }

    clickHandlerArrow = ()=>{
        console.log(this) //ClassComponent object
    }


    render() {
        console.log("this inside render")
        console.log(this) //ClassComponent object
        return (
            <div>
                <button onClick={this.clickHandlerArrow}>CLICK ME TO CLICK ARROW FUNCTION</button>
                <button onClick={this.clickHandlerFunction}>CLICK ME TO CLICK NORMAL FUNCTION</button>
            </div>
        );
    }
}

export default ClassComponent;