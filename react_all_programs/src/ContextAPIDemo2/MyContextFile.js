import React from 'react'

let MyContext = React.createContext()
let Provider = MyContext.Provider
let Consumer = MyContext.Consumer 

let MyContext2 = React.createContext();
let Provider2 = MyContext2.Provider
let Consumer2 = MyContext2.Consumer

export {Provider, Consumer, Provider2, Consumer2, MyContext, MyContext2}