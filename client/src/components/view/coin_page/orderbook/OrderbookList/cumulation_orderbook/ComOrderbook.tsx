import React from 'react'

interface Props{
    coinCode: string;
}

function ComOrderbook({ coinCode }: Props) {
    return (
        <div>
            준비중입니다.
        </div>
    )
}

export default React.memo(ComOrderbook);
