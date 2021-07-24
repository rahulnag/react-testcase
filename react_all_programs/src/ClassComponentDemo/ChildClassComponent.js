import React, { Component } from 'react';

class ChildClassComponent extends Component {
    render() {
        return (
            <div>
                <h1>counter value of parent from child is {this.props.passed_counter}</h1>
                {/* IF WE ARE USING CHNAGED PROPS DIRECTLY USING this.props.passed_counter THEN THE CHANGE WILL REFLECT IN THE DOM OF CHILD */}
                {/* but when we are using that incoming props to assing it to state then where we can change the value of state ? */}
            </div>
        );
    }
}

export default ChildClassComponent;