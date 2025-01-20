import {createSlice} from '@reduxjs/toolkit'
const initialState = {
    value:0
}
export const demoSlice = createSlice({
    name:'demo',
    initialState,
    reducers:
    {
        increment:(state)=>
        {
            state.value++
        }
    }
})
export const {increment} = demoSlice.actions
export default demoSlice.reducer