import React from 'react'
import { useSelector } from 'react-redux'
import CoinPage from '../../components/view/coin_page/CoinPage'
import Wrapper from '../../components/wrapper/Wrapper'
import { RootState } from '../../redux-module/RootReducer';

function CoinContainer() {
    const { data, loading, error } = useSelector((state: RootState) => state.connect_socket.connectSocket);
    const marketListData = useSelector((state: RootState) => state.market_list.marketList.data);
    const marketListError = useSelector((state: RootState) => state.market_list.marketList.error);
    // const marketListLoading = useSelector((state: RootState) => state.market_list.marketList.loading);
    // console.log(marketListLoading);

    // if(marketListLoading){
    //     return (
    //         <Wrapper>
    //             <div>loading...</div>
    //         </Wrapper>
    //     );
    // }

    if(marketListError){
        <Wrapper>
            <div>
                Network Error. 
                <br/>
                error content : [{error}]
            </div>
        </Wrapper>
    }

    if(loading){
        return (
            <Wrapper>
                <div>loading...</div>
            </Wrapper>
        );
    }
    
    return (
        <Wrapper>
            {error ? 
                <div>
                    Network Error. 
                    <br/>
                    error content : [{error}]
                </div>
            :
                <CoinPage
                    ws={data?.socketClient}
                    marketList={marketListData}
                />
            }
        </Wrapper>
    )
}

export default CoinContainer;
