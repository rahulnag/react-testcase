import React from 'react';

class EventHandlerComp extends React.Component{
    // that = this;
    constructor(){
        super()
        console.log(this)
        this.state={
            id: 10
        }
    }

    

    

    clickHandler =(id,e)=> {
            console.log("hey someone clicked the button")
            console.log(this)
            // console.log(this.that)
            console.log(id)
            console.log(e)
        }
    

    clickHandlerArg = (e)=>{
        console.log(e) //e is reacct event object
        return this.clickHandler(this.state.id, e)//we can or cannot pass e here but if we pass e then e must be the 2nd argument
        //we can pass as many argument as we want here but the last argument should be e
    }
     render(){
        return(
            <>            
                <button onClick={this.clickHandler}>Click me</button>

                
                {/* calling button like this means different.. please check in CheckingThis.js file */}
                {/* <button onClick={this.someFunction()}>CLICK here to check log</button>
                <button onClick={this.someFunction}>CLICK here to check log</button> */}
            
                {/* PASSING ARGUMENT TO EVENT HANDLER */}
                {/* <button onClick={(e) => this.clickHandler(id, e)}>Delete Row</button>
                <button onClick={this.clickHandler.bind(this, id)}>Delete Row</button> */}
                {/*
                this approach will not work as this will directly call the handler function with the argument passes to it
                we have many approches to make it work only when we click the button so lets see those approches.

                */}
                <button onClick={this.clickHandlerArg}>Delete Row</button>
                {/* or */}
                <button onClick={(e)=>this.clickHandler(this.state.id, e)}>Delete Row</button>


            </>

        )
    }
}

export {EventHandlerComp};