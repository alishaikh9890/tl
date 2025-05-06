import { createSlice } from "@reduxjs/toolkit";


const authSlice = createSlice({
    name:"auth",
    initialState : {username:null, useremail:null},
    reducers:{
        login(state,action){
            state.username = action.payload.username
            state.useremail = action.payload.useremail
        },

        logout(state){
            state.username = null
            state.useremail = null
        }
    }
})

export const {login, logout} = authSlice.actions;

export default authSlice.reducer