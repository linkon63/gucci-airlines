import { createStore, combineReducers } from "redux";
import { airlinesReducers } from "./reducers/airLinesBookingReducers";

const combinedReducer = combineReducers({
    // books: bookReducer,
    // user: userReducer,
    airlinesReducers: airlinesReducers
})

export const store = createStore(combinedReducer)
