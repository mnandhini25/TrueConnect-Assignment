import customerReducer from "./customers";

import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    customers:customerReducer,
})

export default rootReducer;