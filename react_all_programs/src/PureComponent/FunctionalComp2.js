
function FunctionalComp2(props) {
    console.log("hey there, function component is running")
    var a=10;

    var clickHandler=()=>{
        a=a+10;
    }
    
    return(
        <div>
            <h1>{a}</h1>
            <button onClick={clickHandler}>CLICK ME</button>
        </div>
    )    
}

export default FunctionalComp2;