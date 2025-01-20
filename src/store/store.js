import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../slices/demoSlice"
import userReducer from "../slices/userSlice" 
export const store = configureStore({
    reducer:{
counter:counterReducer,
userR:userReducer
    }
})
