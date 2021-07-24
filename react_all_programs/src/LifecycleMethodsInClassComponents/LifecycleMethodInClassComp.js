import React, { Component, useEffect } from 'react';

class LifecycleMethodInClassComp extends Component {
    constructor(props){
        super(props)
        console.log("constructor is called")
        this.state={
            name: "rahul old value",
            counterFromParentInProps: this.props.send_counter,
        }

        this.setState({
            name:"mohit new value"
        })
        console.log(`${this.state.name} from constructor`)
    }


    componentWillMount(){
        console.log("DEPRICATED: componentWillMount is called")
    }


    static getDerivedStateFromProps(props, state){
        // in mounting phase it is of no use;
        //this method is called before every render.(or re-render)
        console.log("getDerivedStateFromProps is called")
        if(props.send_counter!==state.counterFromParentInProps){
            return {counterFromParentInProps: props.send_counter}
            // return null
            //this method is called on every render happen, but here if we return null then the value will not get changed in the UI. 
            //This method is only used to set the changed props coming as props and set to state in child component, otherwise no use of this method. as this method is called before every rendering (or re-rendering) and this is the only place where we can set the chngaed props to the state in the current comp.
            //if we comment this method then we will not see changes in the state counterFromParentInProps
        }
        return null
    }

    

    
    render() {
        console.log("render is called")
        return (
            <div>
                <h1>below are the lifecycle methods of class components</h1>
                <h1>{this.state.name}</h1>
                <h1>{`value from parent coming in state as props: ${this.state.counterFromParentInProps}`}</h1>
            </div>
        );
    }


    componentDidMount(){
        console.log("component did mount is called")
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log("shouldComponentUpdate is called")
        console.log(nextProps)
        console.log(nextState)
        //this method is responsible for re-render, whether to re-render or not ?

        if(this.state.counterFromParentInProps<5){
            return true;
        }
        return false;
        //if this method returns false then render >> getSnapshotBeforeUpdate >> componentDidUpdate will not be called
    }

    componentWillUpdate(){
        console.log("DEPRICATED: componentWillUpdate is called")
    }

    getSnapshotBeforeUpdate(prevProp, prevState){
        console.log("getSnapshotBeforeUpdate is called")
        console.log(prevProp, prevState)
        return "the sanpshot is returned and is going to snapshot parameter in componentDidUpdate "
    }


    componentDidUpdate(prevProp, prevState, sanpshot){
        //this method will not be invoked if shouldComponentUpdate is returning false
        console.log("componentDidUpdate is called")
        console.log(prevProp, prevState, sanpshot)
    }

    componentWillUnmount(){
        console.log("componentWillUnmount is called")
    }
}


/**
below is the theory
three phase
1. mounting
2. updating
3. unmounting

1. mounting:
    constructor >> getDerivedStateFromProps >> render >> componentDidMount
2. updating:
    getDerivedStateFromProps >> shouldComponentUpdate >> componentWillUpdate >> render >> getSnapshotBeforeUpdate >> componentDidUpdate
3. unmounting:
    componenetWillUnmount 

*/
export default LifecycleMethodInClassComp;