import {createStore, applyMiddleware} from "redux";
import reducers from './reducers/index'
import reduxThunk from 'redux-thunk'
import {configureStore} from "@reduxjs/toolkit";
import counterReducer from "./reducers/counterReducer";
import {counterSlice} from "./counterSlice";

// const enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
// const store = createStore(reducers, enhancer(applyMiddleware(reduxThunk)))

const store = configureStore({
    reducer: {
        // counter : counterReducer,
        counter : counterSlice, //  counterSlice => Inside it: [Action and Reducer]
    }
})

export default store