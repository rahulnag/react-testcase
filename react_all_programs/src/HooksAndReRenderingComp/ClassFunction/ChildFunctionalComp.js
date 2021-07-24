import React, { memo, Component, useContext } from 'react';
import {MyProvider} from './ClassComp'


//in this we have used the traditional way to use the context value in the child comp
const ChildFunctionalComp=({propsCounter})=>{
    // const Context = useContext(MyProvider)

    const EvenOddChecking = ()=>{
        console.log("inside even odd checking function");
        // Context%2 == 0 ? console.log("even") : console.log("ODD");
    }
        return (
            <>
            <h2>class function demo</h2>
            {EvenOddChecking()}
            {console.log("child render method is running")}
            <MyProvider.Consumer>     
            {
                (contextValue)=>{
                    return(
                        <>
                            <h2>Inside child component</h2>
                            {contextValue >3 ? <h1 style={{backgroundColor:'red'}}>CONTEXT{contextValue}</h1> : <h1 style={{backgroundColor:'blue'}}>CONTEXT{contextValue}</h1>}
                            <h1>PROPS:{propsCounter}</h1>
                            {EvenOddChecking()}
                        </>
                    )
                }
            }
            </MyProvider.Consumer>
            </>
        );
}

export default memo(ChildFunctionalComp);