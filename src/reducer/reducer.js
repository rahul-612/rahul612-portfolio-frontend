import {createReducer} from "@reduxjs/toolkit"

const initialState={}

export const userReducer=createReducer(initialState,{
    sendMsgRequest:(state)=>{
        state.loading=true
    },
    sendMsgSuccess:(state,action)=>{
        state.loading=false;
        state.message=action.payload;
    },
    sendMsgFailure:(state,action)=>{
        state.loading=false;
        state.error=action.payload;
    }
})