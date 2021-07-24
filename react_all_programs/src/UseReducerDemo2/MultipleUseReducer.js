import React, { useReducer } from 'react';

const MultipleUseReducer = () => {
    let initialValue=0
    // let [count, dispatch] = useReducer(reducer, initialValue)
    // let [count2, dispatch2] = useReducer(reducer, initialValue)

    let reducer = (state, action)=>{
        switch (action){
            case 'increment':{
                return state + 1;
            }

            case 'decrement':{
                return state-1;
            }

            case 'reset': {
                return initialValue;
            }
        }
    }

    let [count, dispatch] = useReducer(reducer, initialValue)
    let [count2, dispatch2] = useReducer(reducer, initialValue)


    return (
        <div>
            <h3>Count 1 = {count}</h3>
            <button onClick={()=>dispatch('increment')}>INCREMENT</button>
            <button onClick={()=> dispatch('decrement')}>DECREMENT</button>
            <button onClick={()=> dispatch('reset')}>RESET</button>

            <h3>Count 2 = {count2}</h3>
            <button onClick={()=> dispatch2('increment')}>INCREMENT</button>
            <button onClick={()=> dispatch2('decrement')}>DECREMENT</button>
            <button onClick={()=> dispatch2('reset')}>RESET</button>
        </div>
    );
};

export default MultipleUseReducer;