import React from 'react';

const ChildComponent = ({message, messageChangeHandler}) => {
    const age = 550
    return (
        <div>
            <h1>{message}</h1>
            <button onClick={()=>messageChangeHandler(age)}>Click Me Please</button>
        </div>
    );
}

export default ChildComponent;
