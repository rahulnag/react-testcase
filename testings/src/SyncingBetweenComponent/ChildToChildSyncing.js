import React, { Component } from 'react';

class ChildToChildSyncing extends Component {
    
    constructor(props){
        super(props)
        this.state={
          num: 1,
        }
      }
    render() {
        return (
            <div>
                <button onClick={()=> {this.props.childHandler(this.state.num)}}>CLICK HERE FROM CHILD 1</button>
            </div>
        );
    }
}

export default ChildToChildSyncing;