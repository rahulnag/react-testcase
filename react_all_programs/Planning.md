```diff
-14.functional components with details of props -- FunctionalComponentDemo

-what will happen if we pass changed state from class comp to functional comp, will the functional component will rerender(YES) and will functional comp will show the changed value(YES) and what if the child will call the parent function method, will the changed value will reflect in parent or not?(NO)
-what if we make counter and increment any value withtin fnctional comp ? the chnaged value will not shown up in functional comp i.e it will not rerender -- NO IT WILL NOT RERENDER


NOTE: FunctionalComponentDemo
class components with state details -- ClassComponentDemo and SetState_Demo
TODO: different type of exports and import in react.
passing props form one comp to other -- FunctionalComponentDemo
passing state from one comp to other -- ClassComponentDemo

2nd form of setState() -- SetState_Demo

*****************************************************************************************************

18 - event handler - 
value of this in handler, normal function & arrow function. -- EventHandlerForCheckingThis
what is the vale of this in each palces and methods in class as well as functional components -- EventHandlerForCheckingThis
use of this keyword in arrow function, binding, why normal function doesnot work -- EventHandlerForChckingThis
List and keys -- ListDemo


NOTE: if we are changing state from class comp and passing that value to functional comp.
then wether the value will change inside functional components.  --- yes in functional comp it will change the value
then what is pure components --check notion (TODO: as of now making of pure comp is pending , will do at end)


19 - passing props or state and use that in other comp as props and change it using GetDerivedStateFromProps
syncing data change from child to parent
syncing data change from child to child components
-calling parent method from child, -- ParentChildCommunicationDemo1
calling child method from parent
calling child method from parent (check wether we can do it using forwardingRef or not)
how to pass data from child to parent 
-how to pass data from parent to child components -- ParentChildCommunicationDemo1
passing parameter from child to parent 
-passing parameter from parent to child -- ParentChildCommunicationDemo1
passing function from child to parent 
-passing function from parent to child -- ParentChildCommunicationDemo1


20 - controlled and uncontrolled components -- Controlled_and_UncontrolledComp
https://www.youtube.com/watch?v=nc4uFuyrfUI&t=215s

21-
-lifecycle methods in class component -- LifecycleMethodsInClassComponents
-lifecycle methods in functional component -- HooksAsLifecycleMethods

TODO: {lifting ,
-ref(createRef), -- CreateRef_Demo1
-append dom element using ref -- CreateRef_Demo1
forwardingRef, 
useRef(https://www.youtube.com/watch?v=ZGL9XiveFHs), 
callbackref, 
HOC,
useCallback()
}

22 - Hooks -- HooksAsLifecycleMethods
TODO: portals
TODO: profilers

23 - 
-CONTEXT API -- ContextAPIDemo1 (in this we have not created the seperate file for context)
     -CONTEXT API -- ContextAPIDemo2 (in this we have created the seperate file for context)
     useContext -- ContextAPIDemo2 (in Child_Two.js file)
     useReducer -- useReducerDemo1
     useReducer (state and action as a object -- very important) -- https://www.youtube.com/watch?v=uX7lxFrWUbA
     useReducer along with useContext -- https://www.youtube.com/watch?v=BCD2irXaVoE
     multiple useReducer -- useReducerDemo2-- https://www.youtube.com/watch?v=5DsCKNRA8s4&list=PLC3y8-rFHvwisvxhZ135pogtX7_Oe3Q3A&index=21    

24 - make 2 comp parent and child, & do 2 thing:
    1. make counter and increment, decrement function in parent and then decrement it from child and show it in both comp
    2. make counter and incre, decrement function in child and then decrement it form parent and show it in both comp

24 - which all methods are called while re-rendering of a component in functional and class components


25 - How to make ClassComponent a pure component and a FunctionalComponent a pure component(using useMemo)

-26 - passing counter value and counterIncrement Function from Parent to child and from child onClick of button increase the counter and show it in parent and child component -- ParentChildCommunicationDemo1


-What happen to other components and other child components in parent components if any one child components re - renders == ParentChildCommunicationDemo1 (basically done with Child2)

27 - <Child1 clickHandler={this.state.clickHandler}/>
     <Child1 clickHandler={this.state.clickHandler()}/>
     <Child1 clickHandler={()=>this.clickHandler()}/>
     difference between these



28: Type Checking using propsType 

29: defaultProps

30: can we access props without constructor & super in class comp

31: how to pass argument on onClick event of button(in functional component and also in class component ) --
     within the component
     from parent to child
     from child to parent

32: value of this inside click handler, in FUNCTIONAL COMPONENT


33: useEffect -- different types and its comparision



34: RENDER OPTIMIZATION
a) PureComponent - PureComponent
b) PureComponent and memo as child component (sending props, no props and updated props and updating counter2 in parent and passing only counter1 to child) -- PureComponentDemo
c) Context API handling using PureComponent and memo
case1: parent as class component and child as class, check if child re-render on state update and passing it with Provider when Child is PureComponent -- if child is PureComponent then it wont re-render if context value changes(constructor is not called and render will also not called) bu then also Child will render the UI depending on the condition in the UI/ Comp
     -- HookAndReRendering -- ClassClass

case2: parent as class component and child as class, check if child re-render on state update and passing it with Provider when Child is retuned with Memo -- answer is same as above
     -- HookAndReRendering -- ClassClass

case3: wrap child in memo, pass props to it, change context provider value in parent, then see whether the child re-rendered or not

case3: make child a pure component, pass props to it, change context provider value in parent, then see whether the child re-rendered or not
 -----in all the above 3 cases, whever props changes child component re-renders, but whever context value changes child wont re-render but child component will show updated result in the UI and also if we put conditional operator in the value and change the background color accordingly that will also change in the ui altough child is not- rendering...
 BUT IF THE CHILD IS FUNCTIONAL COMPONENT AND WE ARE USING useContext HOOK THEN WHENEVER CONTEXT VALUE CHANGED CHILD WILL RE-RENDERS
 but this is not in the case of class comp.
 ==HooksAndReRenderingComp

case4: attach props value in state and make child comp pure
1. using PureComponent
2. using memo

case5: change state on context value change 


case6: make 1 provider, 2 child comp, and check whehter on change of any context value whether both the child comp will re-render or not
also check this by making chidl comp pure and memo
and also check this by using useContext hook in child comp

case7: make 2 provider, 2 child comp, and check whehter on change of any context value whether both the child comp will re-render or not
also check this my making chidl comp pure and memo
and also check this by using useContext hook in child comp

35. useMeme Demo

```