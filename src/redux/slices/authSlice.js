import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userId: null,
    fullname: null,
}

const authSlice = createSlice({
    name: "authDetails",
    initialState: initialState,
    reducers: {
        setUserId(state, action){
            console.log('action',action);
            state.userId = action.payload
        },
        setFullName(state, action){
            state.fullname = action.payload
        }
    }
})

export const {
    setUserId,
    setFullName
} = authSlice.actions

export default authSlice.reducer
