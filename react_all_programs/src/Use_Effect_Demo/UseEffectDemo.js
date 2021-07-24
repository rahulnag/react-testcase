import React, { useEffect } from 'react';
import ReactDOM from 'react-dom'


const UseEffectDemo = () => {
    const [counter, setCounter] = React.useState(1)
    const [counter1, setCounter1] = React.useState(1)

    //EFFECT WILL RUN AFTER RENDER AND AFTER EVERY RE-RENDERS
    useEffect(() => {
        console.log("useEffect 1 is called")
    })

    //EFFECT WILL RUN ONLY ONCE AFTER THE FIRST RENDER, BEHAVE LIKE ComponentDidMount
    useEffect(() => {
        console.log("useEffect 2 is called")
        //
    }, [])


    //EFFECT WILL RUN AFTER FIRST RENDER AND AFTER EVERY STATE CHANGE OF COUNTER, 
    //BEHAVE LIKE ComponentDidUpdate
    useEffect(() => {
        console.log("useEffect 3 is called")
        // console.log(counter)
    }, [counter])


    //EFFECT WILL RUN AFTER FIRST RENDER AND AFTER EVERY RE-RENDERS
    //CLEANUP FUNCTION WILL RUN BEFORE THE EFFECT, BUT CLEANUP WILL NOT RUN IN 
    //THE FIRST RENDER AS THERE IS NOTING TO CLEANUP
    //CLEANUP WILL RUN AFTER ANY STATE CHANGE AS THIS USEEFFECT IS RUNNING EVERYTIME AFTER RE-RENDERS
    //CLEANUP WILL ALSO RUN AFTER UNMOUNTING THE COMP, AND ITS NOT DEPENDING ON COUNTER
    useEffect(() => {
        console.log("useEffect 4 is called")
        return (() => { console.log('cleanup function 1') })
    })

    //EFFECT WILL RUN ONLY AFTER FIRST RENDER AND NOT ON ANY OF THE RE-RENDERS
    //CLEANUP WILL NOT RUN ANYTHIME HERE ON ANY OF THE STATE CHANGE OR AFTER FIRST RENDER
    //BUT CLEANUP WILL RUN JUST BEFORE UNMOUNTING THE COMP, AND ITS NOT DEPENDING ON STATE
    //HERE THE EFFECT FUNCTION AND CLEANUP WILL RUN ONCE
    //THIS WILL BEHAVE LIKE COMPONENT WILL UNMOUNT 
    useEffect(() => {
        console.log("useEffect 5 is called")
        return (() => {
            console.log('cleanup function 2')
        })
    }, [])


    //EFFECT WILL RUN AFTER RENDER AND AFTER EVERY STATE CHANGE OF COUNTER STATE
    //CLEANUP WILL RUN AFTER EVERY STATE OF COUNTER
    //CLEANUP WILL ALSO RUN AFTER UNMOUNTING THE COMP, AND ITS NOT DEPENDING ON COUNTER
    useEffect(() => {
        console.log("useEffect 6 is called")
        return (() => {
            console.log('cleanup function 3')
            // setCounter(0)
        })
    }, [counter])

    const onClickHandler = () => {
        console.log('button is clicked')
        setCounter(counter + 1)
    }

    const UnmountComp=()=>{
        ReactDOM.unmountComponentAtNode(document.getElementById('root'))
    }
    return (
        <>
            {console.log("inside return")}
            <div>
                <h1>{counter}</h1>
                <button onClick={onClickHandler}>INCREMENT COUNTER</button>
                <button onClick={UnmountComp}>UNMOUNT COMPONENT</button>
            </div>
        </>
    );
};

export default UseEffectDemo;