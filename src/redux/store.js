import {configureStore} from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";

const store = configureStore({
    reducer: {
        counter : counterReducer, //counterSlice => Inside it: [Action and Reducer]

    },
})

export default store