import React from 'react'

interface Props{
    coinCode: string;
}

function ComOrderbook({ coinCode }: Props) {
    return (
        <div>
            누적호가
        </div>
    )
}

export default React.memo(ComOrderbook);
