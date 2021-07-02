import React from 'react'
import { SellBuyProps } from './SellBuy';
import SellBuyUI from './SellBuyUI';

interface Props extends SellBuyProps{}

function Buy({per, price, mockData, percent, setProperty, setting}: Props) {
    return (
        <SellBuyUI
            ask_bid="매도"
            per={per}
            price={price}
            mockData={mockData}
            percent={percent}
            setProperty={setProperty}
            setting={setting}
        />
    )
}

export default React.memo(Buy);