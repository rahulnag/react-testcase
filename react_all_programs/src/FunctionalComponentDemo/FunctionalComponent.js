import React from 'react';
import ChildFunctionalComponent from './ChildFunctionalComponent'



function FunctionalComponent (props) {
    var val=100

    var counter = 10
    console.log(this+"from.........") //undefined
    //in this tutorial we will see how to use/pass data from child to parent 
    //for that we will create 1 callback function and pass it using props to the child and the again we will pass some data from child using that callback function

    var callback= (x)=>{
        console.log("this is callback function: "+ x)
        val=x
        console.log(val) //10
    }
    

    var increment_counter=()=>{
        counter=counter+1
        console.log(counter)
        //what this function is showing that, on change of counter value the functional component is not rendering again and again.
        //but if the parent component renders, its child component will render
    }

    console.log("just before return")
    return (
        <div>
            <ChildFunctionalComponent callbackfunc={callback}/>
            <h1>value passes from child to parent is {val} which is not correct</h1>
            {/* here the chnged value whihc is coming from child to parent will not be visible in parent comp */}

            <button onClick={increment_counter} >incerement</button>
            <h1>{counter}</h1>
            {/* in h1 it will show only old value and not render again and again with changed value */}
        </div>
    );
};

export default FunctionalComponent;