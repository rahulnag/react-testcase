import {React, useEffect, useState} from 'react'

function HooksDemo(params) {
    console.log(useState("rahul"))


    var a=useState("mohit")
    console.log(a[0])
    console.log(a[1])

    //most reliable and usable way to use hooks
    var[name, setName] = useState("rahul")
    console.log(name)
    console.log(setName)

    //NOTE: hooks can contain any value number, string, array, object etc 

    var [count, setCount] = useState(0)


    var clickHandler=()=>{
        setCount(count+1)
    }


    useEffect(()=>{
        console.log("use effect called")
    })
    return(
        <div>
            <h2> this is hooks demo</h2>
            <h2>Count is {count}</h2>
            <button onClick={clickHandler}>CLICK</button>
        </div>
    )
}

export default HooksDemo