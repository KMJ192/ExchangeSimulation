import React from 'react';

function MyProperty(myProperty: any) {
    console.log(myProperty);
    return (
        <div>
            
        </div>
    )
}

export default React.memo(MyProperty);