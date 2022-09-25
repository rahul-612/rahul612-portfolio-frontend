import { userReducer } from './reducer/reducer';
import { configureStore } from "@reduxjs/toolkit";

const store=configureStore({
    reducer:{
        user:userReducer
    }
})

export default store;