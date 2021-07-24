import React, { Component } from 'react';
import FunctionalComp from './FunctionalComp'
import ClassComponent from './ClassComponent'

class ParentHandler extends Component {
    render() {
        return (
            <div>
                <FunctionalComp/>
                <ClassComponent />

            </div>
        );
    }
}

export default ParentHandler;