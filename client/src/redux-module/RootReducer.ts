import { combineReducers } from "redux";
import user  from './user';
import screen_size from "./screen_size";
import market_list from "./coin/market_list";
import connect_socket from "./coin/connect_socket";
import { all } from "redux-saga/effects";

const rootReducer = combineReducers({
    user,
    screen_size,
    market_list,
    connect_socket
});

export default rootReducer;
export type RootState= ReturnType <typeof rootReducer>

// export function* rootSaga(){
//     yield all();
// }