import React, { Component, useContext } from 'react';
// import {MyContext} from './ContextAPIDemo'
import {Consumer, Consumer2} from './MyContextFile'

// class Child_Two extends Component {
//     render() {
//         return (
//             <div>
//             <h1> this is child two Component </h1>
//             <Consumer>
//                 {(name)=>{
//                     return ( 
//                         <Consumer2>
//                             {
//                             (company)=>{
//                                 return( <><h1>company: {company}</h1>
//                                     <h1>hey: {name}</h1></>)
//                             }
//                         }
//                         </Consumer2>
//                     ) 
//                 }}
//             </Consumer>

//             {/* THIS IS GOING TO NESTED HELL WHIHC CAN CREATE PROBLEM IN LONGER RUN.
//             SO FOR THIS WE WILL USE HOOK i.e - useContext() */}
//             </div>
//         );
//     }
// }


import {MyContext, MyContext2} from './MyContextFile'

function Child_Two(params) {
    const name = useContext(MyContext)
    const company = useContext(MyContext2)
    return(
        <>
            <h1>name: {name}</h1>
            <h1>company: {company}</h1>
        </>
    )      
    // YOU CAN SEE THAT WE HAVE VERY LESS CODE AND NO DETH WELL
}

export default Child_Two;