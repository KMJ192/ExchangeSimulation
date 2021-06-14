import { 
    GET_MINUTE_CANDLE,
    GET_MINUTE_CANDLE_SUCCESS,
    GET_MINUTE_CANDLE_ERROR,
    GET_DAY_CANDLE,
    GET_DAY_CANDLE_SUCCESS,
    GET_DAY_CANDLE_ERROR,
    GET_WEEK_CANDLE,
    GET_WEEK_CANDLE_SUCCESS,
    GET_WEEK_CANDLE_ERROR,
    GET_MONTH_CANDLE,
    GET_MONTH_CANDLE_SUCCESS,
    GET_MONTH_CANDLE_ERROR
} from "./action";
import { 
    CandleAction, 
    MinuteCandleState, 
    DayCandleState, 
    WeekCandleState, 
    MonthCandleState,
    InitialMinuteCandle, 
    InitialDayCandle, 
    InitialWeekCandle, 
    InitialMonthCandle
} from "./types";

function minuteCandleReducer(
    state: MinuteCandleState = InitialMinuteCandle, 
    action: CandleAction
){
    switch(action.type){
        case GET_MINUTE_CANDLE:
            return {
                ...state,
                minuteCandle: {
                    loading: true,
                    data: null,
                    error: null
                } 
            }
        case GET_MINUTE_CANDLE_SUCCESS:
            return {
                ...state,
                minuteCandle: {
                    loading: false,
                    data: action.payload,
                    error: null
                }
            }
        case GET_MINUTE_CANDLE_ERROR:
            return{
                ...state,
                minuteCandle: {
                    loading: false,
                    data: null,
                    error: action.payload
                }
            }
        default: 
            return state;
    }
}

function dayCandleReducer(
    state: DayCandleState = InitialDayCandle,
    action: CandleAction
){
    switch(action.type){
        case GET_DAY_CANDLE:
            return {
                ...state,
                dayCandle: {
                    loading: true,
                    data: null,
                    error: null
                } 
            }
        case GET_DAY_CANDLE_SUCCESS:
            return {
                ...state,
                dayCandle: {
                    loading: false,
                    data: action.payload,
                    error: null
                }
            }
        case GET_DAY_CANDLE_ERROR:
            return{
                ...state,
                dayCandle: {
                    loading: false,
                    data: null,
                    error: action.payload
                }
            }
        default: 
            return state;
    }
}

function weekCandleReducer(
    state: WeekCandleState = InitialWeekCandle,
    action: CandleAction
){
    switch(action.type){
        case GET_WEEK_CANDLE:
            return {
                ...state,
                weekCandle: {
                    loading: true,
                    data: null,
                    error: null
                } 
            }
        case GET_WEEK_CANDLE_SUCCESS:
            return {
                ...state,
                weekCandle: {
                    loading: false,
                    data: action.payload,
                    error: null
                }
            }
        case GET_WEEK_CANDLE_ERROR:
            return{
                ...state,
                weekCandle: {
                    loading: false,
                    data: null,
                    error: action.payload
                }
            }
        default: 
            return state;
    }
}

function monthCandleReducer(
    state: MonthCandleState = InitialMonthCandle,
    action: CandleAction
){
    switch(action.type){
        case GET_MONTH_CANDLE:
            return {
                ...state,
                monthCandle: {
                    loading: true,
                    data: null,
                    error: null
                } 
            }
        case GET_MONTH_CANDLE_SUCCESS:
            return {
                ...state,
                monthCandle: {
                    loading: false,
                    data: action.payload,
                    error: null
                }
            }
        case GET_MONTH_CANDLE_ERROR:
            return{
                ...state,
                monthCandle: {
                    loading: false,
                    data: null,
                    error: action.payload
                }
            }
        default: 
            return state;
    }
}
export {
    minuteCandleReducer,
    dayCandleReducer,
    weekCandleReducer,
    monthCandleReducer
};