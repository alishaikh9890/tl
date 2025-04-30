import { createSlice } from "@reduxjs/toolkit";


const authSlice = createSlice({
    name:"auth",
    initialState : {auth: true},
    reducers:{
        login(state){
            state.auth = true
        },

        logout(state){
            state.auth = false
        }
    }
})

export const {login, logout} = authSlice.actions;

export default authSlice.reducer