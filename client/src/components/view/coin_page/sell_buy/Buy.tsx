import React from 'react'
import { SellBuyProps } from './SellBuy';
import SellBuyUI from './SellBuyUI';

interface Props extends SellBuyProps{}

function Buy({per, price, mockData, percent, itemCount, selectPer, setProperty, setting, initData, }: Props) {
    return (
        <SellBuyUI
            ask_bid="매수"
            per={per}
            price={price}
            mockData={mockData}
            percent={percent}
            itemCount={itemCount}
            selectPer={selectPer}
            setProperty={setProperty}
            setting={setting}
            initData={initData}
        />
    )
}

export default React.memo(Buy);