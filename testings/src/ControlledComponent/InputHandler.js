import React from 'react'

class InputHandler extends React.Component{

    state={
        value: "rahulnag"
    }


    handleChange=(e)=>{
        console.log(e.target.value)
        this.setState({
            value: e.target.value
        })
    }
    render(){
        return(
            <div>
                <h2>this is controlled Component</h2>
                <input 
                    type="text"
                    value={this.state.value}
                    onChange={this.handleChange}
                />
            </div>
        )
    }
}

/*
    in both controlled and non controlled comp we can assign values
    when we add value attribute, we can see the difference between them as in controlled we cannot able to see the values entered or deleted, but in non controlled comp, we can see the changes made to the value
    in that case we use defaultValue attribute, but if we use default value attribute is not a good practice as we can not define it by default as this is read only.
    as these are read only prop, to change it we need to call onChange
    when we want to change the event onChnage is fired but changes will not reflect in the input area
    we will take event object "e"
    
    
    
    
    */

export default InputHandler
