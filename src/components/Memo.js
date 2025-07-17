import React, {memo} from 'react';

const Memo = ({name, children}) => {
    console.log("rendering memo");
    return (
        
        <div>
           <h1> My name is {name}.</h1>
            {children}
        </div>
    );
}

export default React.memo(Memo);
