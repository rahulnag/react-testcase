import React, { useReducer } from 'react';

const Parent = () => {
    let initialValue = 0;
    let reducer =(state, action)=>{
        //based on action, it will return the new state
        //return state+1 // this is the new state
        switch(action){
            case 'increment':{
                return state+1
            }
            case 'decrement':{
                return state-1
            }
            case 'reset':{
                return initialValue
            }
            default: {
                return state
            }
        }
    }
    let [count, dispatch] = useReducer(reducer, initialValue)
    return (
        <div>
            <h1>Counter {count}</h1>
            <button onClick={()=> dispatch('increment')}>Increment</button>
            <button onClick={()=> dispatch('decrement')}>Decrement</button>
            <button onClick={()=> dispatch('reset')}>Reset</button>
        </div>
    );
};

export default Parent;