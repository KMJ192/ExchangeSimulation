import React from 'react';
import CoinChart from './CoinChart';
import Wrapper from '../../../wrapper/Wrapper'

function CoinExchange() {
    return (
        <Wrapper>
            <CoinChart/>
        </Wrapper>
    )
}

export default React.memo(CoinExchange);
