import React from 'react'

class InputHandler extends React.Component{
    constructor(props){
        super(props)
        this.state={
            name: '',
            pass: ""
        }
//this is the example of ref
        this.my_refs = React.createRef()
    }

    changeHandler_Name=(event)=>{
        this.setState({
            name: event.target.value,
        })
    }

    changeHandler_Pass=(event)=>{
        this.setState({
            pass: event.target.value,
        })
    }
    render(){
        return(
            <>
                <p>ENTER YOUR NAME:</p>
                <input 
                     type= "TEXT"
                    value= {this.state.name}
                    onChange={this.changeHandler_Name}
                    ref={this.my_refs}
                />
                <p>YOU ARE ENTERING</p>
                <p>{this.state.name}</p>

                <p>ENTER YOUR PASSWORD:</p>
                <input 
                     type= "password"
                    value= {this.state.pass}
                    onChange={this.changeHandler_Pass}
                />
                <p>YOU ARE ENTERING</p>
                <p>{this.state.pass}</p>
            </>
        )
    }

    componentDidMount(){
        //we can also use ref on click handlers to do something with them
        console.log(this.my_refs)
        this.my_refs.current.focus()
    }
}

export {InputHandler}