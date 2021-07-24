import React, { useEffect, useState } from 'react';

var c;
var myref= React.createRef();
const Test = () => {
    

    var [ob, func] = useState([])
    useEffect(()=>{
        console.log(myref.current.value)
        fetch("https://api.github.com/users")
        .then(re=>{return re.json()})
        .then(result=>{
            console.log(result)
            // func(result)
            c=result
        })
    },[])


    var check = ()=>{
        console.log(myref.current.value)
    }
    return (
        <div>
            <input ref={myref} onChange={check}/>
        {
            ob.map((e)=>{
                return <h1>{e.login}</h1>
            })
        }
            
        </div>
    );
};

export default Test;