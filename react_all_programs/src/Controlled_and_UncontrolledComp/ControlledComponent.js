import React, { Component } from 'react';

class ControlledComponent extends Component {
    constructor(props){
        super(props)
        this.state={
            inputValue1:"",
            inputValue2:''
        }
    }

    onChangeHandler=(e)=>{
        this.setState({
            inputValue2: e.target.value
        })
    }

    checkInput=()=>{
        console.log(this.state.inputValue2)
    }


    render() {
        return (
            <div>
                <h3>THIS IS CONTROLLED COMPONENT</h3>
                <input value={this.state.inputValue1} />
                <br/>
                <input value={this.state.inputValue2}  onChange={this.onChangeHandler}/>
                <br/>
                <button disabled={!this.state.inputValue2.length} onClick={this.checkInput}>CLICK HERE</button>
                <br/>
                {/* here we have control over the input text so that we can detect the length and a/c to that we can make button enable or disable. */}
            </div>
        );
    }
}

export default ControlledComponent;