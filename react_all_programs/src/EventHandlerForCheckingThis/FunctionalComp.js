import React from 'react';

const FunctionalComp = () => {
    console.log("this is top")
    console.log(this) //undefined


    function clickHandlerFunction(){
        console.log(this) //undefined
    }

    var clickHandlerArrow=()=>{
        console.log(this) //undefined
    }

    return (
        <div>
            <button onClick={clickHandlerArrow}>CLICK ME TO CLICK NORMAL FUNCTION</button>
            <button onClick={clickHandlerFunction}>CLICK ME TO CLICK ARROW FUNCTION</button>
        </div>
    );
};

export default FunctionalComp;