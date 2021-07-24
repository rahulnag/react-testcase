import React, { useState } from 'react';

const Child2 = () => {
    console.log("child2 renders")
    let[counter, incrementCounter] = useState(10)
    let clickHandler=()=>{incrementCounter(counter=counter+1)}
    return (
        <div>
            <h1>{`counter value from child2 ${counter}`}</h1>
            <button onClick={clickHandler}>CLICK BUTTON FROM CHILD2</button>
            <button onClick={()=>{incrementCounter(counter=counter+10)}}>CLICK BUTTON FROM CHILD2 -- increment 10</button>
        </div>
    );
};

export default Child2;