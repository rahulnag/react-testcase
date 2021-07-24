import React from 'react'

class UncontrolledComponent extends React.Component{

    constructor(props){
        super(props);
        this.inputRefs=React.createRef()

    }



    render(){
        return(
            <form>
                Username:<input 
                    type="text"
                    // autoFocus //this will create autofocus on load
                />
                <br/>
                Username:<input 
                    type="text"
                    
                />
                <br/>
                Password: <input
                    type="text"
                    ref={this.inputRefs}
                />
            </form>
        )
    }



    componentDidMount(){
        console.log(this.inputRefs)
        // or
        console.log(this.inputRefs.current)//this will return DOM element
        this.inputRefs.current.focus()
    }
}

export default UncontrolledComponent