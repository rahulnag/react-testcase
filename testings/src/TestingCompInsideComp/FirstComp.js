import React from 'react';
import {SecondComp} from './SecondComp'
class FirstComp extends React.Component{
    constructor(props){
        super(props)
    }

    loadComp=()=>{

        return  <SecondComp /> 
    }
    render(){
        return(
            <div style={{backgroundColor:'red', height:'100vh'}}>
                <button onClick={this.loadComp}>Click me</button>
            </div>
        )
    }
}

export {FirstComp}