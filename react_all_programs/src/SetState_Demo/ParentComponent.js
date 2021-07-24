import React, { Component } from 'react';
import ChildComponent from './ChildComponent'


class ParentComponent extends Component {
    constructor(props){
        super(props)
        this.state={
            counter: 0,
            value: 10
        }
    }


    incrementCounter=()=>{
        this.setState({
            counter: this.state.counter+1
            // counter: 100
        })
    }

    chnageValue=()=>{
        // this.setState({
        //     value: 50
        // })

        // this.setState({
        //     value:this.state.value+10
        // })
        // this.setState({
        //     value:this.state.value+10
        // })
        // this.setState({
        //     value:this.state.value+10
        // })
        // this.setState({
        //     value:this.state.value+10
        // })

        // ALTOGH WE HAVE ADDED THREE TIMES IT WILL GET ADDED ONLY ONE TIME 
        // PLESE CHECK THE DOC ON NOTION THAT WHY IS SETSTATE IS ASYNCHRONOUS
        //THIS IS THE REASON WE ARE USING 2ND FORM OF SETSTATE IN REACTJS


        this.setState((state, props)=>({
            value: state.value+100
        }))
    }
    render() {
        return (
            <div>
                <button onClick={this.incrementCounter}><h1>+</h1></button>
                <button onClick={this.chnageValue}>CHANGE VALUE</button>
                <h1>{this.state.value}</h1><br/>
                <ChildComponent increment={this.state.counter}/>

            </div>
        );
    }
}

export default ParentComponent;