useRef is not only be useful for accessing DOM Element
but also for persisting values across renders, whihc is not causing re-render so that we can get the render
count or the previous value entered in the the input field

cross check the below 2 points:
1. in functional component there is no way to persist value between render 
2. in class Component we can use class variables to persist values between renders 

===================================================================================================
There are 2 rules to remember about references(useRef):
1. The value of the reference is persisted (stays the same) between component re-renderings;
2. Updating a reference doesn’t trigger a component re-rendering.
