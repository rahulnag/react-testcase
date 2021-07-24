import React, {memo, Component } from 'react';

// class ChildComponent extends React.PureComponent {
//     constructor(props){
//         super()
//     }
//     render() {
//         console.log("child component renders")
//         return (
//             <div>
//                 <h2>CHILD COMPONENT</h2>
//             </div>
//         );
//     }
// }

// // export default memo(ChildComponent);
// export default (ChildComponent);


const ChildComponent = () => {
    return (
        <div>
            {console.log('inside child component')}
            <h2>CHILD COMPONENT</h2>
        </div>
    );
};

export default memo(ChildComponent);