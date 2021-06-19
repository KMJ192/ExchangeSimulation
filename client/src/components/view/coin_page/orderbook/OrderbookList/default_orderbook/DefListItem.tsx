import React from 'react'

function DefList() {
    return (
        <>
            <div className="orderbook-list-item">
                매도/매수
            </div>
            <div className="orderbook-list-item">
                잔량
            </div>
        </>
        
    )
}

export default React.memo(DefList);
