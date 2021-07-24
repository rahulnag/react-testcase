import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Parent extends Component {
    focusRef= React.createRef()
    appendChildsNode_ref = React.createRef()
    constructor(props) {
        super(props);
        
    }

    clickHandler = ()=>{
        console.log(this.focusRef)
        console.log(this.focusRef.current)


        let doc = document.createElement('button')
        doc.innerHTML="LOVE"
        console.log(this.appendChildsNode_ref.current.appendChild(doc))
    }
    
    render() {
        console.log('render is running')
        return (
            <div>
                <input ref={this.focusRef}/>
                <button onClick={this.clickHandler}>CLICK</button>
                <div ref={this.appendChildsNode_ref}></div>
            </div>
        );
    }
}


export default Parent;