import React from 'react'
import { SellBuyProps } from './SellBuy';

import SellBuyUI from './SellBuyUI';

interface Props extends SellBuyProps{}

function Sell({per, price, mockData, percent, setProperty, setting, initData, itemCount}: Props) {
    return (
        <SellBuyUI
            ask_bid="매수"
            per={per}
            price={price}
            mockData={mockData}
            percent={percent}
            itemCount={itemCount}
            setProperty={setProperty}
            setting={setting}
            initData={initData}
        />        
    );
}

export default React.memo(Sell);
