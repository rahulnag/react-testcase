import React from 'react';

function ParentToChildSyncing(props) {

    /**
     when state is passes from one component to another and in another component if it is being used
     directly as props in another component then it is fine, no need to use getDerivedStatefromProps.
     but if
     that state is assigned to another state variable in anotheher comp, then if the value from 1st comp
     changes, in 2nd comp it wont change directly. we have to use getDerivedStatefromProps
     */
    return (
        <div>
            <h1>From Child : {props.num}</h1>
        </div>
    );
};

export default ParentToChildSyncing;