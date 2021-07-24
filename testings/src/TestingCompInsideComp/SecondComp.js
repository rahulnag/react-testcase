import React from 'react';

class SecondComp extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div style={{backgroundColor:'blue', height:'50vh'}}>
                <button onClick={()=>{}}>Click me</button>
            </div>
        )
    }
}

export {SecondComp}