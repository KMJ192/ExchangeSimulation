import React from 'react'
import { useSelector } from 'react-redux'
import CoinPage from '../../components/view/coin_page/CoinPage'
import Wrapper from '../../components/wrapper/Wrapper'
import { RootState } from '../../redux-module/RootReducer';

function CoinContainer() {
    const ws = useSelector((state: RootState) => state.connect_socket.connectSocket.data?.socketClient);
    const marketList = useSelector((state: RootState) => state.market_list.marketList.data);

    return (
        <Wrapper>
            <CoinPage
                ws={ws}
                marketList={marketList}
            />
        </Wrapper>
    )
}

export default CoinContainer;
