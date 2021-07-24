import React, { Component } from 'react';
import ClassComp from './ClassComp'
import FunctionalComp from './FunctionalComp'
import FunctionalComp2 from './FunctionalComp2'

class ParentPureCompDemo extends Component {
    render() {
        return (
            <div>
                <FunctionalComp2/>
            </div>
        );
    }
}

export default ParentPureCompDemo;