import React, { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../redux-module/RootReducer';
import Buy from './Buy';
import Sell from './Sell';

import { SellBuySt } from './SellBuyStyle';

interface SellBuyFunction {
    first: () => void;
    second: () => void;
    third: () => void;
    forth: () => void;
    input: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface SellBuyProps{
    per: SellBuyFunction;
    price: number;
    mockData: {prev: number, next: number};
    percent: number;
    itemCount: number;
    setProperty: (e: React.ChangeEvent<HTMLInputElement>) => void;
    setting: () => void;
    initData: () => void;
}

function SellBuy() {
    const [selected, setSelected] = useState(true);
    const [price, setPrice] = useState(0);
    const [percent, setPercent] = useState(0);
    const [itemCount, setItemCount] = useState(0);
    const [mockData, setMockData] = useState({
        prev: 0,
        next: 0
    });
    const selectedPrice = useSelector((state: RootState) => Number(state.selected_price.price));

    useEffect(() => {
        if(price !== selectedPrice) setPrice(selectedPrice);
    }, [price, selectedPrice]);

    const calPercent = useCallback((percentage: number) => {
        const val = price * percentage / 100;
        setPercent(val);
        if(price) setItemCount(percentage / 100);
    }, [price])

    const per: SellBuyFunction = {
        first: useCallback(() => {
            calPercent(10);
        },[calPercent]),
        second: useCallback(() => {
            calPercent(25);
        },[calPercent]),
        third: useCallback(() => {
            calPercent(50);
        }, [calPercent]), 
        forth: useCallback(() => {
            calPercent(100)
        },[calPercent]),
        input: useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
            const val = isNaN(Number(e.target.value)) ? 0 : price * Number(e.target.value) / 100;
            if(price) setItemCount(Number(e.target.value) / 100);
            setPercent(val);
        }, [price])
    }
    const setProperty = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const val = isNaN(Number(e.target.value)) ? 0 : Number(e.target.value);
        setMockData({
            ...mockData,
            prev: val
        });
    }, [mockData]);

    const setting = useCallback(() => {
        //inputbox 내용 초기화 시키기
        setMockData({
            ...mockData,
            next: mockData.prev
        });
    },[mockData]);

    const initData = useCallback(() => {
        setMockData({
            prev: 0,
            next: 0
        });
        setPercent(0);
        setPrice(0);
        setItemCount(0);
    }, []);

    const SellContents = () => {
        setSelected(true);
    }
    const buyContents = () => {
        setSelected(false);
    }

    return (
        <SellBuySt.Container>
            <SellBuySt.Header>
                <SellBuySt.SellButton
                    onClick={SellContents}
                    toggle={selected}
                    {...selected}
                >
                    매수
                </SellBuySt.SellButton>
                <SellBuySt.BuyButton
                    onClick={buyContents}
                    toggle={selected}
                    {...selected}
                >
                    매도
                </SellBuySt.BuyButton>
            </SellBuySt.Header>
            {selected ? 
                <Sell
                    per={per}
                    price={price}
                    mockData={mockData}
                    percent={percent}
                    itemCount={itemCount}
                    setProperty={setProperty}
                    setting={setting}
                    initData={initData}
                /> :
                <Buy
                    per={per}
                    price={price}
                    mockData={mockData}
                    percent={percent}
                    itemCount={itemCount}
                    setProperty={setProperty}
                    setting={setting}
                    initData={initData}
                />
            }
        </SellBuySt.Container>
    )
}

export default React.memo(SellBuy);
