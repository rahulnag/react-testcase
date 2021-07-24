import React, { memo, Component } from 'react';
import {MyProvider} from './ClassComp'
class ChildClassComp extends Component {
    constructor(props){
        super(props)
        console.log("inside child constructor");
    }

    state={
        propsValue:0
    }
    render() {
        return (
            <>
            {console.log("child render method is running")}
            <MyProvider.Consumer>     
            {
                (contextValue)=>{
                    return(
                        <>
                            <h2>Inside child component</h2>
                            {/* {this.setState({propsValue:contextValue})} */}
                            {contextValue >3 ? <h1 style={{backgroundColor:'red'}}>CONTEXT{contextValue}</h1> : <h1 style={{backgroundColor:'blue'}}>CONTEXT{contextValue}</h1>}
                        </>
                    )
                }
            }
            </MyProvider.Consumer>
            <h1>PROPS:{this.props.propsCounter}</h1>
            </>
        );
    }
}

export default memo(ChildClassComp);