import React, { useState, memo, Component } from 'react';
import ChildComponent from './ChildComponent';
// class PureClassComponent extends Component {
//     state={
//         counter1:0,
//         counter2:0
//     }
//     render() {
//         console.log('parent component renders')
//         return (
//             <div>
//                 <ChildComponent />
//                 <button onClick={()=>this.setState({counter1:this.state.counter1+1})}>{this.state.counter1}</button>      
//                 <button onClick={()=>this.setState({counter2:this.state.counter2+1})}>{this.state.counter2}</button>      
//             </div>
//         );
//     }
// }

const PureClassComponent = () => {
    const [counter1, setCounter1]=useState(0)
    const [counter2, setCounter2]=useState(0)
    return (
        <div>
            {console.log('inside parent component')}
            <ChildComponent />
            <button onClick={() => setCounter1(counter1 + 1)}>{counter1}</button>
            <button onClick={() => setCounter2(counter2 + 1 )}>{counter2}</button>

        </div>
    );
};

export default PureClassComponent;

// export default (PureClassComponent);