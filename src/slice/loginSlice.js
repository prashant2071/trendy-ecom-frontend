 import { createSlice } from "@reduxjs/toolkit";


const initialState ={
    isLoggedIn:false,
    token:'',
    role:''

}

const loginSlice = createSlice({
    name:"Auth",
    initialState:initialState,
    reducers:{ }
})

export default loginSlice.reducer;

export const {} = loginSlice.actions