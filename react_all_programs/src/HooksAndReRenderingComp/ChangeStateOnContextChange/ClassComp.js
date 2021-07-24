import React, { Component } from 'react';
import ChildClassComp from './ChildClassComp';


const MyProvider = React.createContext()

class ClassComp extends Component {
    state={
        stateCounter:0,
        propsCounter:0,
        contextCounter:0
    }

    render() {
        return (
            <>
            {console.log("parent render method is running")}
                <MyProvider.Provider value={this.state.contextCounter}>
                    <ChildClassComp propsCounter={this.state.propsCounter}/>
                </MyProvider.Provider>
                <h2>Inside Parent Component</h2>
                <h1>STATE:{this.state.stateCounter}</h1>
                <h1>PROPS:{this.state.propsCounter}</h1>
                <h1>CONTEXT:{this.state.contextCounter}</h1>
                <button onClick={()=>this.setState({stateCounter:this.state.stateCounter+1})}>UPDATE STATE</button>
                <button onClick={()=>this.setState({propsCounter:this.state.propsCounter+1})}>UPDATE PROPS</button>
                <button onClick={()=>this.setState({contextCounter:this.state.contextCounter+1})}>UPDATE CONTEXT</button>
            </>
        );
    }
}

export {MyProvider}
export default ClassComp;