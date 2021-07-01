import React from 'react'
import SellBuyUI from './SellBuyUI';

function Buy() {
    return (
        <SellBuyUI
            ask_bid="매도"
        />
    )
}

export default React.memo(Buy);