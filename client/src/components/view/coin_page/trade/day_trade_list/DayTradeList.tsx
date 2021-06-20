import React from 'react'

interface Props{
    coinCode: string;
}

function DayTradeList({ coinCode }: Props) {
    return (
        <div className="trade-list-container">
            일별
        </div>
    )
}

export default React.memo(DayTradeList);
