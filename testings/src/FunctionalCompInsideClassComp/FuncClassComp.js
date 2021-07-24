import React from 'react';

let MyList =(props) => {
    // console.log("///////////"+props.pro)
       return <h1 key={props.i}>{props.pro}</h1>
}

var arr=[1,2,3,4,5,6,7,8,9,10,11,1222,,2,2,2,2,2,2,];

class FuncClassComp extends React.Component{
    render(){
        return(
            <>            
                <button onClick={this.clickHandler}>Click me</button>
                {
                    arr.map((e,i)=>{
                        return <MyList pro = {e,i}/>
                        // we can also do it as <MyList pro = {e} key = {i}/>
                    })
                }
            </>

        )
    }
}


export {FuncClassComp}