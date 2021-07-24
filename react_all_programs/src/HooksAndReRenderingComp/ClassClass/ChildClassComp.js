import React, { PureComponent, memo, Component } from 'react';
import {MyProvider} from './ClassComp'
class ChildClassComp extends Component {
    constructor(props){
        super(props)
        console.log("inside child constructor");
    }
    EvenOddChecking = ()=>{
        console.log("inside even odd checking function");
        // Context%2 == 0 ? console.log("even") : console.log("ODD");
    }
    render() {
        return (
            <>
            {this.EvenOddChecking()}
            <h1>class class demo</h1>
            {console.log("child render method is running")}
            <MyProvider.Consumer>     
            {
                (contextValue)=>{
                    return(
                        <>
                            <h2>Inside child component</h2>
                            {contextValue >3 ? <h1 style={{backgroundColor:'red'}}>CONTEXT{contextValue}</h1> : <h1 style={{backgroundColor:'blue'}}>CONTEXT{contextValue}</h1>}
                            {this.EvenOddChecking()}
                            <h1>PROPS:{this.props.propsCounter}</h1>
                        </>
                    )
                }
            }
            </MyProvider.Consumer>
            </>
        );
    }
}

export default memo(ChildClassComp);