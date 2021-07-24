
function FunctionalComp(props) {
    console.log("hey there, function component is running")
    
    var a=props.send_counter
    // var a=10;
    //so whether the value of a is fixed or not, whenever parent component renders child component will definitly renders.

    return(
        <div>
            <h1>{a}</h1>
        </div>
    )    
}

export default FunctionalComp;