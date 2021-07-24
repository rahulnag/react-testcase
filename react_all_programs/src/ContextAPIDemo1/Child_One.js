import React, { Component } from 'react';
import Child_Two from './Child_Two'

class Child_One extends Component {
    render() {
        return (
            <div>
                <h1>this is child one Component</h1>
                <Child_Two/>
            </div>
        );
    }
}

export default Child_One;