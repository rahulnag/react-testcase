import React, { useEffect, useState } from 'react';

const UseEffectDemo2 = () => {

    const [count, setCount] = useState(0)
    const tick=()=>{
        console.log("inside tick")
        setCount(count+1)
    }

    //when we use this useEffect we will not see any increment in the UI but the state keeps on changin
    // after every 1 sec. this is because this useEffect with empty array will run only once 
    //so if u want to call return every time then you need to add count in dependency array

    // The rule of thumb is that if you use a variable in useEffect, you must declare it in the useEffect dependency array (or omit the array entirely).
    useEffect(()=>{
        const interval=setInterval(tick, 5000)
        return ()=>{
            clearInterval(interval)
        }
    },[])

    //this is the correct way to do....as we are using count inside the useEffect in tick function so 
    //we need to put count in dependency array
    useEffect(()=>{
        const interval=setInterval(tick, 1000)
        return ()=>{
            clearInterval(interval)
        }
    },[count])


    return (
        
        <h2>
            {console.log('inside return')}
            {count}
        </h2>
    );
};

export default UseEffectDemo2;