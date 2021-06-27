import { 
    REQUEST_TICKER, REQUEST_TICKER_SUCCESS, REQUEST_TICKER_ERROR,
    REQUEST_TRADE, REQUEST_TRADE_SUCCESS, REQUEST_TRADE_ERROR,
    REQUEST_ORDERBOOK, REQUEST_ORDERBOOK_SUCCESS, REQUEST_ORDERBOOK_ERROR
} from "./action";
import { 
    RequestCoinAction,
    RequestTickerState, 
    RequestTradeState,
    RequestOrderbookState,
    InitialReqTicker, 
    InitialReqTrade,
    InitialReqOrderbook
} from "./types";

function reqTickerReducer(
    state: RequestTickerState = InitialReqTicker,
    action: RequestCoinAction
){
    switch(action.type){
        case REQUEST_TICKER:
            return {
                ...state,
                ticker: {
                    loading: true,
                    data: null,
                    error: null
                }
            }
        case REQUEST_TICKER_SUCCESS:
            return {
                ...state,
                ticker: {
                    loading: false,
                    data: action.payload,
                    error: null
                }
            }
        case REQUEST_TICKER_ERROR:
            return {
                ...state,
                ticker: {
                    loading: false,
                    data: null,
                    error: null
                }
            }
        default:
            return state;
    }
}

function reqTradeReducer(
    state: RequestTradeState = InitialReqTrade,
    action: RequestCoinAction
){
    switch(action.type){
        case REQUEST_TRADE:
            return {
                ...state,
                trade: {
                    loading: true,
                    data: null,
                    error: null
                }
            }
        case REQUEST_TRADE_SUCCESS:
            return {
                ...state,
                trade: {
                    loading: false,
                    data: action.payload,
                    error: null
                }
            }
        case REQUEST_TRADE_ERROR:
            return {
                ...state,
                trade: {
                    loading: false,
                    data: null,
                    error: null
                }
            }
        default:
            return state;
    }
}

function reqOrderbookReducer(
    state: RequestOrderbookState = InitialReqOrderbook,
    action: RequestCoinAction
){
    switch(action.type){
        case REQUEST_ORDERBOOK:
            return {
                ...state,
                orderbook: {
                    loading: true,
                    data: null,
                    error: null
                }
            }
        case REQUEST_ORDERBOOK_SUCCESS:
            return {
                ...state,
                orderbook: {
                    loading: false,
                    data: action.payload,
                    error: null
                }
            }
        case REQUEST_ORDERBOOK_ERROR:
            return {
                ...state,
                orderbook: {
                    loading: false,
                    data: null,
                    error: null
                }
            }
        default:
            return state;
    }
}

export {
    reqTickerReducer,
    reqTradeReducer,
    reqOrderbookReducer
}