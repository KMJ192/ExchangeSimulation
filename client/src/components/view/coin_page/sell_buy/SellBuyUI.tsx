import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../redux-module/RootReducer';

import { SellCompoSt } from './SellBuyStyle';
import './SellBuy.scss';

interface Props{
    ask_bid: "매도" | "매수";
}

function SellBuyUI({ ask_bid }: Props) {
    const [price, setPrice] = useState(0);
    const [percent, setPercent] = useState(0);
    const [mockData, setMockData] = useState({
        prev: 0,
        next: 0
    });

    const code = useSelector((state: RootState) => state.selected_coin.coinCode);
    const selectedPrice = useSelector((state: RootState) => Number(state.selected_price.price));

    useEffect(() => {
        if(price !== selectedPrice) setPrice(selectedPrice);
    }, [price, selectedPrice]);

    const per = {
        first: () => {
            const val = price * 10 / 100;
            setPercent(val);
        },
        second: () => {
            const val = price * 25 / 100;
            setPercent(val);
        },
        third: () => {
            const val = price * 50 / 100;
            setPercent(val);
        }, 
        forth: () => {
            const val = price;
            setPercent(val);
        },
        input: (e: React.ChangeEvent<HTMLInputElement>) => {
            const val = isNaN(Number(e.target.value)) ? 0 : price * Number(e.target.value) / 100;
            setPercent(val);
        }
    }
    const setProperty = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = isNaN(Number(e.target.value)) ? 0 : Number(e.target.value);
        setMockData({
            ...mockData,
            prev: val
        });
    }

    const setting = () => {
        setMockData({
            ...mockData,
            next: mockData.prev
        })
    }

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
            </SellCompoSt.Row1>
            <SellCompoSt.Row2>
                <SellCompoSt.PropertySet>
                    <SellCompoSt.PropertySetInput>
                        <input 
                            placeholder="자산설정(KRW)"
                            onChange={setProperty}
                        />
                        <button
                            onClick={setting}
                        >확인</button>
                    </SellCompoSt.PropertySetInput>
                    <SellCompoSt.PropertySettedVal>
                        {mockData.next} KRW
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
                        value={percent}
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
                        />
                    </SellCompoSt.SellBuyQuantityPer>
                </SellCompoSt.SellBuyQuantity>
                <div>
                    <SellCompoSt.SellBuyInput/>
                </div>
            </SellCompoSt.Row2>
        </SellCompoSt.Container>
    )
}

export default React.memo(SellBuyUI);
