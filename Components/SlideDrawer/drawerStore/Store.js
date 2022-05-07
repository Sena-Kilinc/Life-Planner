import {configureStore, createSlice} from "@reduxjs/toolkit";

const initialState = {toggle:false};
const toggleSlice = createSlice({
    name:"toggle",
    initialState,
    reducers : {
        toggle(state){
            state.toggle = !state.toggle
            console.log(state.toggle)
        },falsify(state){
            state.toggle = false
        }
    }
})

export const Actions = toggleSlice.actions;
const store = configureStore({reducer:toggleSlice.reducer});
export default store;