import React from 'react';

const ChildFunctionalComponent = (props) => {
    console.log("value of this"+this)//UNDEFINED
    var x=10;
    return (
        <div>
            <h1>THIS IS CHILD FUNCTIONAL COMPONENT{props.callbackfunc(x)}</h1>
        </div>
    );
};

export default ChildFunctionalComponent;