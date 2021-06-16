import { 
    GET_TICKER, GET_TICKER_SUCCESS, GET_TICKER_ERROR,
    GET_TRADE, GET_TRADE_SUCCES, GET_TRADE_ERROR,
    GET_ORDERBOOK, GET_ORDERBOOK_SUCCESS, GET_ORDERBOOK_ERROR
} from "./action";
import { 
    GetSocketDataAction, 
    GetTickerState, InitialGetTicker,
    GetTradeState, InitialGetTrade,
    GetOrderbookState, InitialGetOrderbook
} from "./types";

function tickerReducer(
    state: GetTickerState = InitialGetTicker, 
    action: GetSocketDataAction
){
    switch(action.type){
        case GET_TICKER: 
            return {
                ...state,
                ticker: {
                    loading: true,
                    data: null,
                    error: null
                }
            }
        case GET_TICKER_SUCCESS:
            return {
                ...state,
                ticker: {
                    loading: false,
                    data: action.payload,
                    error: null
                }
            }
        case GET_TICKER_ERROR:
            return {
                ...state,
                ticker: {
                    loading: false,
                    data: null,
                    error: action.payload
                }
            }
        default:
            return state;
    }
}

function tradeReducer(
    state: GetTradeState = InitialGetTrade, 
    action: GetSocketDataAction
){
    switch(action.type){
        case GET_TRADE: 
            return {
                ...state,
                trade: {
                    loading: true,
                    data: null,
                    error: null
                }
            }
        case GET_TRADE_SUCCES:
            return {
                ...state,
                trade: {
                    loading: false,
                    data: action.payload,
                    error: null
                }
            }
        case GET_TRADE_ERROR:
            return {
                ...state,
                trade: {
                    loading: false,
                    data: null,
                    error: action.payload
                }
            }
        default:
            return state;
    }
}

function orderbookReducer(
    state: GetOrderbookState = InitialGetOrderbook, 
    action: GetSocketDataAction
){
    switch(action.type){
        case GET_ORDERBOOK: 
            return {
                ...state,
                orderbook: {
                    loading: true,
                    data: null,
                    error: null
                }
            }
        case GET_ORDERBOOK_SUCCESS:
            return {
                ...state,
                orderbook: {
                    loading: false,
                    data: action.payload,
                    error: null
                }
            }
        case GET_ORDERBOOK_ERROR:
            return {
                ...state,
                orderbook: {
                    loading: false,
                    data: null,
                    error: action.payload
                }
            }
        default:
            return state;
    }
}

export{
    tickerReducer,
    tradeReducer,
    orderbookReducer
}