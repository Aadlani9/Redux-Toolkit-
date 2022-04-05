import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    userData :{
        name: "",
        email: "",
    },
    loading: null,
    error: false
}

export const userSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        addUser: (state,action) => {  //Action
            //Update Name , Email
            state.userData.name = action.payload.name;
            state.userData.email = action.payload.email;
        },
        startUser: (state) => {
            state.loading = true;
        },
        successUser:(state,action) => {
            state.userData = action.payload;
            state.loading =false;
        },
        errorUser:(state) => {
            state.loading =false;
            state.error = true;
        }

    },
})

// Action creators are generated for each case reducer function
export const { startUser , successUser, errorUser} = userSlice.actions

export default userSlice.reducer