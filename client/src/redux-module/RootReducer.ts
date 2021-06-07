import { combineReducers } from "redux";
import user  from './user';
import screen_size from "./screen_size";
import market_list from "./coin/market_list";

const rootReducer = combineReducers({
    user,
    screen_size,
    market_list
});

export default rootReducer;
export type RootState= ReturnType <typeof rootReducer>