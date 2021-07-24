import React from 'react'
import {EventHandlerComp} from './TestingComponents/EventHandler';
import {MethodAsProps} from './CallingParentMethodFromChild/MethodAsProps'
// import {FirstComp} from './TestingCompInsideComp/FirstComp'
// import {SecondComp} from './TestingCompInsideComp/SecondComp'
import {FuncClassComp} from './FunctionalCompInsideClassComp/FuncClassComp'
// import {InputHandler} from './TestingComponents/InputHandler'
import {ParentDerived} from './GetDerivedStateFromPropsDemo/ParentDerived'
import HooksDemo from './HooksDemo/HooksDemo'
import CheckingThis from './CheckingThis/CheckingThis'
import InputHandler from './ControlledComponent/InputHandler'
import UncontrolledComponent from './UncontrolledComponent/UncontroledComp'
import ParentToChildSyncing from './SyncingBetweenComponent/ParentToChildSyncing'
import ChildToChildSyncing from './SyncingBetweenComponent/ChildToChildSyncing'
import ChildToChildSyncing2 from './SyncingBetweenComponent/ChildToChildSyncing2'
import Test from './Testing/Test'
class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      num: 0,
      someNum:0
    }
  }
  childToChildSyncingHandler=(n)=>{
      this.setState({
        someNum : this.state.someNum+n
      })
      console.log(n)
  }
  // IncrementCounter=()=>{
  //   this.setState({
  //     num: this.state.num+1
  //   })
  // }


  parentFunction(params) {
    console.log("this is parent function "+params)
  }
  render(){
    return (
      <div>
        <Test/>

        {/* <ChildToChildSyncing childHandler={this.childToChildSyncingHandler}/>
        <ChildToChildSyncing2 num={this.state.someNum}/> */}



        {/* <ParentToChildSyncing num={this.state.num}/> */}
        {/* <button onClick={this.IncrementCounter}></button> */}


        
        {/* <UncontrolledComponent/> */}
        {/* <InputHandler/> */}
        {/* <CheckingThis/> */}
        {/* <HooksDemo/> */}
        {/* <ParentDerived/> */}
        {/* <InputHandler/> */}
        {/* <EventHandlerComp/> */}
        {/* <MethodAsProps parent={this.parentFunction}/> */}
        {/* <FirstComp/> */}
        {/* <SecondComp/> */}
        {/* <FuncClassComp/> */}
      </div>
  );
}
}

export default App;
