import {createSlice} from "@reduxjs/toolkit"
const initialState = {
    islogin:false
}
export const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        login:(state)=>
        {
            state.islogin = true;
        },
        logout:(state)=>
        {
            state.islogin=false
        }
    }
})
export const {login,logout} = userSlice.actions;
export default userSlice.reducer
