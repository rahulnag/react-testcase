import React, { Component } from 'react';

class ChildToChildSyncing2 extends Component {
    render() {
        return (
            <div>
                <h1> this is 2nd comp</h1>
                <h1>{this.props.num}</h1>
            </div>
        );
    }
}

export default ChildToChildSyncing2;