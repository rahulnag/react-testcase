import React from 'react';

class MethodAsProps extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div style={{backgroundColor:'red', height:'100vh'}}>
                <button onClick={()=>{this.props.parent("RAHUL")}}>Click me</button>
            </div>
        )
    }
}

export {MethodAsProps}