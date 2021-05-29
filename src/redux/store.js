import { createStore, combineReducers } from "redux";

const combinedReducer = combineReducers({
    // books: bookReducer,
    // user: userReducer,
})

export const store = createStore(combinedReducer)
