import React from 'react'
import { GetDerivedStateFromProps } from './getDerivedSateFromPropsDemo'

class ParentDerived extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            counter: 1
        }
    }

    clickHandler = ()=>{
        console.log("button clicked")
        this.setState({
            counter: this.state.counter+1
        })
    }


   

    render(){
        console.log("inside ParentDerived render")
        return(
            <div>
                <GetDerivedStateFromProps c_props = {this.state.counter}/>
                <button onClick={this.clickHandler} >CLCIK HERE</button>
                <h1>counter from parent : {this.state.counter}</h1>
            </div>
        )
    }
}

export {ParentDerived}