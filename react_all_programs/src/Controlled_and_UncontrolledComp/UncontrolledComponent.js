import React, { Component } from 'react';

class UncontrolledComponent extends Component {

    showInput=()=>{
        console.log(this.entered_value.value)
        console.log(this.entered_value2.value)
        console.log(this.entered_value3.value)
    }

    render() {
        return (
            <div>
                <h3>THIS IS UNCONTROLLED COMPONENT</h3>
                <input type="text" value="rahul" />
                <br/>
                <input type="text" defaultValue="rahul" />
                <br/>
                <input  ref={(input)=>{this.entered_value=input}}/>
                <br/>
                <button onClick={this.showInput}>CLICK HERE</button>
                <br/>
                {/* also check react doc for the example using ref.
                we can also do like i did, no need to create a ref using React.createRef */}
                <input defaultValue="rahul" ref={(input)=>{this.entered_value2=input}}/>
                <input value="rahul" ref={(input)=>{this.entered_value3=input}}/>
                <br/>
                {/* if we give value attribute then this will become read only input comp, but if this input tag is defined on html and not in react then we can able to edit it and write on it; */}
            </div>
        );
    }
}

export default UncontrolledComponent;