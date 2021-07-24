import React from 'react'


class GetDerivedStateFromProps extends React.Component{
    constructor(props){
        super(props)
        this.state={
            d_counter: this.props.c_props
        }
    }


    static getDerivedStateFromProps(props, state){
        console.log(props, state)
        if(props.c_props!== state.d_counter)
            return {d_counter: props.c_props}
        return null
    }


    shouldComponentUpdate(nextProps, nextState){
        console.log("shouldComponentUpdate")
        if(this.state.d_counter < 5)
            return true
        return false;
    }


    getSnapshotBeforeUpdate(prevProp, prevState){
        console.log("inside getSnapshotBeforeUpdate")
        console.log(prevProp, prevState)
        return "the sanpshot is returned"
    }


    componentDidUpdate(prevProp, prevState, sanpshot){
        console.log("componentDidUpdate")
        console.log(prevProp, prevState, sanpshot)
    }

    
    render(){
        console.log("inside getDervideStateFromProps render")
        return(
            <div>
                <h1>RAHUL</h1>
                <h1>{this.state.d_counter}</h1>
            </div>
        )
    }
}

export {GetDerivedStateFromProps}