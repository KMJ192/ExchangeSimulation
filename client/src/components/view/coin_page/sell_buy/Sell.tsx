import React from 'react'
import SellBuyUI from './SellBuyUI';

function Sell() {
    return (
        <SellBuyUI
            ask_bid="매수"
        />        
    );
}

export default React.memo(Sell);
