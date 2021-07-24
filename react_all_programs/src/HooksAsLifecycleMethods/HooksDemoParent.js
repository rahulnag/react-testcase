import React, { useEffect, useState } from 'react';
import HooksDemo from './HooksDemo';
const HooksDemoParent = () => {
    var [counter, CounterHandler] = useState(0)

    var incrementHandler=()=>{
        CounterHandler(
            counter=counter+1
        )
    }

    var decrementHandler =()=>{
        CounterHandler(
            counter=counter-1
        )
    }

    useEffect(()=>{
        console.log("Similar to componentDidMount and componentDidUpdate: i.e this will be called on every state changed and once after component is mount in DOM")
    })


    useEffect(()=>{
        console.log("Similar to componentDidMount")
    },[])

    useEffect(()=>{
        console.log("Similar to componentDidMount & componentDidUpdate and behaves like componentDidUpdate only when counter is changed")
    },[counter])
    //we can have as many value as we want in this array
  
    useEffect(()=>{
        console.log("Similar to componenetWillUnmount")
        return ()=>{console.log("mmmmmmmmmmmmmmmmmm")}
    },[])
       

    return (
        <div>
            <h1>IN THIS TUTORIAL WE WILL SEE BASIC HOOKS LIKE useState, useEffect</h1>
            <button onClick={incrementHandler}><h1>+</h1></button>
            <button onClick={decrementHandler}><h1>-</h1></button>
            <h1>COUNTER: {counter}</h1>
        </div>
    );

};

export default HooksDemoParent;