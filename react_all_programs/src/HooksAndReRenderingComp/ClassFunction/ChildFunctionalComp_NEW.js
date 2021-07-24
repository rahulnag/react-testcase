import React, { memo, Component, useContext, useMemo } from 'react';
import {MyProvider} from './ClassComp'


//in this we have used the new way to use the context value in the child comp i.e using useContext hooks
const ChildFunctionalComp_NEW=({propsCounter})=>{
    const Context = useContext(MyProvider)


    const EvenOddChecking = useMemo(()=>{
        console.log("inside even odd checking function");
        // Context%2 == 0 ? console.log("even") : console.log("ODD");
    },[propsCounter])
        return (
            <>
            {EvenOddChecking}
            {console.log("child render method is running")}
            <h2>Inside child component</h2>
            {Context >3 ? <h1 style={{backgroundColor:'red'}}>CONTEXT{Context}</h1> : <h1 style={{backgroundColor:'blue'}}>CONTEXT{Context}</h1>}
            <h1>PROPS:{propsCounter}</h1>
            </>
        );
}

export default memo(ChildFunctionalComp_NEW);