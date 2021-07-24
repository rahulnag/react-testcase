import React from 'react'


class CheckingThis extends React.Component{
   
    constructor(props){
        super(props)
        console.log(this)//CheckingThis object
        this.name="rahul"
        this.state={
            n: 10,
        
        }
    }
    someFunction(){
        console.log(this)//CheckingThis object
        console.log(this.name)
        console.log("........"+this.state.n)
    }

    render(){
        console.log(this)//CheckingThis object
        // this.someFunction()
        return(
            
            <div>
                <h1>CHECKING THIS</h1>
                <button onClick={console.log("mmmmmmmmm")}>CLICK here to check log</button>
                <button onClick={this.someFunction()}>CLICK here to check log</button>
                {/* <button onClick={this.someFunction}>CLICK here to check log</button> */}
            </div>
        )
    }
}

export default CheckingThis