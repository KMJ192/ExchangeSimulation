import React from 'react';
import MyPropertyItem from './MyPropertyItem';
import { MyPropertySt } from './MyPropertyStyle';

interface Props{
    myProperty: any;
    balance: number;
    init: number;
}


function MyProperty({myProperty, balance, init}: Props) {   
    return (
        <MyPropertySt.Container>
            <MyPropertySt.DisplayInitData>
                <MyPropertySt.DisplayInitDataHeader>
                    <div>시작 자산</div>
                    <div>({init})</div>
                </MyPropertySt.DisplayInitDataHeader>
                <MyPropertySt.DisplayInitDataHeader>
                    <div>현재 자산</div>
                    <div>({balance})</div>
                </MyPropertySt.DisplayInitDataHeader>
            </MyPropertySt.DisplayInitData>
            <MyPropertySt.DisplayMyPropertyDetail>
                {Object.keys(myProperty).length ? 
                    <>
                        <MyPropertySt.MyPropertyDetail>
                            보유 종목 : 보유량
                        </MyPropertySt.MyPropertyDetail>
                        <MyPropertySt.MyPropertyDetailLi>
                            <ul>
                                {Object.keys(myProperty).map((market, index) => {
                                    return (
                                        <li key={index}>
                                            <MyPropertyItem
                                                code={market}
                                                myProperty={myProperty}
                                            />
                                        </li>
                                    );
                                })}
                            </ul>
                        </MyPropertySt.MyPropertyDetailLi>
                    </> : 
                    <MyPropertySt.NullProperty>
                        보유한 자산이 없습니다. :)
                    </MyPropertySt.NullProperty>
                }
            </MyPropertySt.DisplayMyPropertyDetail>
        </MyPropertySt.Container>
    );
}

export default React.memo(MyProperty);