import React, { useState } from 'react';
import Buy from './Buy';
import Sell from './Sell';

import { SellBuySt } from './SellBuyStyle';

function SellBuy() {
    const [selected, setSelected] = useState(true);
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
                <Sell/> :
                <Buy/>
            }
        </SellBuySt.Container>
    )
}

export default React.memo(SellBuy);
