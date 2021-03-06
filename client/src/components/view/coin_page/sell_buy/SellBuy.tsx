import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectedPrice } from '../../../../redux-module/coin/selected_price';
import { RootState } from '../../../../redux-module/RootReducer';
import Buy from './Buy';
import MyProperty from './MyProperty/MyProperty';
import Sell from './Sell';

import { SellBuySt } from './SellBuyStyle';

interface SellBuyFunction {
    first: () => void;
    second: () => void;
    third: () => void;
    forth: () => void;
    input: (e: React.ChangeEvent<HTMLInputElement>) => void;
    sell: () => void;
    buy: () => void
}

export interface SellBuyProps{
    per: SellBuyFunction;
    price: number;
    mockData: {init: number, setting: number};
    percent: number;
    itemCount: number;
    selectPer: string;
    setProperty: (e: React.ChangeEvent<HTMLInputElement>) => void;
    setting: () => void;
    initData: () => void;
}

function SellBuy() {
    const [selected, setSelected] = useState(0);
    const [price, setPrice] = useState(0);
    const [percent, setPercent] = useState(0);
    const [itemCount, setItemCount] = useState(0);
    const [selectPer, setSelectPer] = useState("");
    const myProperty = useState<any>({})[0];
    const [mockData, setMockData] = useState({
        init: 0,
        setting: 0
    });
    const orderbookPrice = useSelector((state: RootState) => Number(state.selected_price.price));
    const code = useSelector((state: RootState) => state.selected_coin.coinCode);
    const dispatch = useDispatch();

    const initData = useCallback(() => {
        setPercent(0);
        setItemCount(0);
        dispatch(selectedPrice("0"));
        setSelectPer("");
    }, [dispatch]);

    useEffect(() => {
        if(price !== orderbookPrice) {
            setPrice(orderbookPrice);
        }
    }, [price, orderbookPrice]);

    const calPercent = useCallback((percentage: number) => {
        const val = price * percentage / 100;
        setPercent(val);
        if(price) setItemCount(percentage / 100);
    }, [price]);

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
            if(price) {
                setSelectPer(e.target.value);
                setItemCount(Number(e.target.value) / 100);
            }
            setPercent(val);

        }, [price]),
        buy: useCallback(() => {
            if(percent && percent <= mockData.setting) {
                setMockData({
                    ...mockData,
                    setting: mockData.setting - percent
                });
                if(myProperty[code] && myProperty[code].count) {
                    myProperty[code] += percent;
                } else {
                    myProperty[code] = percent;
                }
                alert(`${code}??? ${percent}-krw??? ?????????????????????.`);
            } else if(!percent){
                alert("????????? ??????????????????.");
            } else {
                alert(`????????? ?????? [${percent}]??? ???????????? [${mockData.setting}]?????? ???????????? ????????? ??? ????????????.`);
            }
            initData();
        }, [code, initData, mockData, myProperty, percent]),
        sell: useCallback(() => {
            if(myProperty[code] && percent && myProperty[code] >= percent) {
                setMockData({
                    ...mockData,
                    setting: mockData.setting + percent
                });
                myProperty[code] -= percent;
                if(!myProperty[code]) {
                    delete myProperty[code];
                }
                alert(`${code}??? ${percent}-krw??? ?????????????????????.`)
            } else if(!percent){
                alert("????????? ??????????????????.")
            } else if(myProperty[code] <= percent) {
                alert(`??????(${myProperty[code]})??? ?????????(${percent})?????? ???????????? ??? ??? ????????????.`);
            } else {
                alert("????????? ????????? ?????? ?????? ???????????????.");
            }
            initData();
        }, [code, initData, mockData, myProperty, percent])
    }
    const setProperty = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const val = isNaN(Number(e.target.value)) ? 0 : Number(e.target.value);
        setMockData({
            ...mockData,
            init: val
        });
    }, [mockData]);

    const setting = useCallback(() => {
        const val = mockData.init
        setMockData({
            ...mockData,
            setting: val
        });
    },[mockData]);

    const sellContents = () => {
        setSelected(0);
    }
    const buyContents = () => {
        setSelected(1);
    }
    const myPropertyContents = () => {
        setSelected(2);
    }

    return (
        <SellBuySt.Container>
            <SellBuySt.Header>
                <SellBuySt.SellButton
                    onClick={sellContents}
                    toggle={selected}
                    {...selected}
                >
                    ??????
                </SellBuySt.SellButton>
                <SellBuySt.BuyButton
                    onClick={buyContents}
                    toggle={selected}
                    {...selected}
                >
                    ??????
                </SellBuySt.BuyButton>
                <SellBuySt.MyPropertyButton
                    onClick={myPropertyContents}
                    toggle={selected}
                    {...selected}
                >
                    ??????
                </SellBuySt.MyPropertyButton>
            </SellBuySt.Header>
            {selected === 0 && 
                <Buy
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
            }
            {selected === 1 &&     
                <Sell
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
            }
            {selected === 2 &&
                <MyProperty
                    myProperty={myProperty}
                    balance={mockData.setting}
                    init={mockData.init}
                />
            }
        </SellBuySt.Container>
    )
}

export default React.memo(SellBuy);
