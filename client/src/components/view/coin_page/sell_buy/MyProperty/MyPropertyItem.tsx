import React from 'react'

interface Props{
    code: string;
    myProperty: any;
}

function MyPropertyItem({ code, myProperty }: Props) {
    return (
        <div>
            {code} : {myProperty[code]}
        </div>
    )
}

export default React.memo(MyPropertyItem);