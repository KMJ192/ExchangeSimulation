import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../redux-module/RootReducer';
import { SellBuyProps } from './SellBuy';

import { SellCompoSt } from './SellBuyStyle';
import './SellBuy.scss';

interface Props extends SellBuyProps{
    ask_bid: "매도" | "매수";
}

function SellBuyUI({ ask_bid, per, price, mockData, percent, itemCount, selectPer, setProperty, setting, initData }: Props) {
    const code = useSelector((state: RootState) => state.selected_coin.coinCode);

    return (
        <SellCompoSt.Container>
            <SellCompoSt.Row1>
                <SellCompoSt.PropertySet>
                    <SellCompoSt.SellBuyCell>
                        자산설정
                    </SellCompoSt.SellBuyCell>
                    <SellCompoSt.SellBuyCell>
                        주문가능
                    </SellCompoSt.SellBuyCell>
                </SellCompoSt.PropertySet>
                <SellCompoSt.SellBuyCell>
                    {ask_bid}가격(KRW)
                </SellCompoSt.SellBuyCell>
                <SellCompoSt.SellBuyQuantity>
                    <div className="quantity">주문수량({code.split("-")[1]})</div>
                </SellCompoSt.SellBuyQuantity>
                <SellCompoSt.SellBuyCell>
                    주문총액(KRW)
                </SellCompoSt.SellBuyCell>
                <SellCompoSt.InitializeButton>
                    <button
                        onClick={initData}
                    >
                        초기화
                    </button>
                </SellCompoSt.InitializeButton>
            </SellCompoSt.Row1>
            <SellCompoSt.Row2>
                <SellCompoSt.PropertySet>
                    <SellCompoSt.PropertySetInput>
                        <input 
                            placeholder="자산설정(KRW)"
                            onChange={setProperty}
                            value={mockData.init}
                        />
                        <button
                            onClick={setting}
                        >확인</button>
                    </SellCompoSt.PropertySetInput>
                    <SellCompoSt.PropertySettedVal>
                        {mockData.setting} KRW
                    </SellCompoSt.PropertySettedVal>
                </SellCompoSt.PropertySet>
                <div>
                    <SellCompoSt.SellBuyInput
                        value={price}
                        readOnly
                    />
                </div>                
                <SellCompoSt.SellBuyQuantity>
                    <SellCompoSt.SellBuyQuantityInput
                        value={`${String(itemCount)} ${code.split("-")[1]}`}
                        readOnly
                    />
                    <SellCompoSt.SellBuyQuantityPer>
                        <button
                            onClick={per.first}
                        >10%</button>
                        <button
                            onClick={per.second}
                        >25%</button>
                        <button
                            onClick={per.third}
                        >50%</button>
                        <button
                            onClick={per.forth}
                        >100%</button>
                        <input placeholder="입력(%)"
                            onChange={per.input}
                            value={selectPer}
                        />
                    </SellCompoSt.SellBuyQuantityPer>
                </SellCompoSt.SellBuyQuantity>
                <div>
                    <SellCompoSt.SellBuyInput
                        value={percent}
                        readOnly
                    />
                </div>
                <SellCompoSt.SellBuyButton
                    ask_bid={ask_bid}
                    {...ask_bid}
                >
                    {ask_bid === "매수" ? 
                        <button
                            onClick={per.sell}
                        >{ask_bid}</button> :
                        <button
                            onClick={per.buy}
                        >{ask_bid}</button>
                    }
                </SellCompoSt.SellBuyButton>
            </SellCompoSt.Row2>
        </SellCompoSt.Container>
    )
}

export default React.memo(SellBuyUI);
