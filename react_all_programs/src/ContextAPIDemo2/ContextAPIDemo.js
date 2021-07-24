import React, { Component } from 'react';
import Child_One from './Child_One'
import {Provider, Provider2} from './MyContextFile'


class ContextAPIDemo extends Component {
    constructor(props){
        super(props)
        this.state={
            name:"rahulnag",
            company:"bi2i"
        }
    }
    render() {
        return (
         <>   
        <h1>THIS IS THE PARENT COMPONENT</h1>
            <Provider value={this.state.name}>
            <Provider2 value={this.state.company}> 
                <Child_One/>
            </Provider2>
            </Provider>
        </>
        );
    }
}

export default ContextAPIDemo;
// export {MyContext}