import {configureStore} from "@reduxjs/toolkit";
import userSlice from "./userSlice";

const store = configureStore({
    reducer: {
        user : userSlice, //userSlice => Inside it: [Action and Reducer]
    },
})

export default store