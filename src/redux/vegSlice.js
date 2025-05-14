import { vegData } from "../utils/data";
import { createSlice } from "@reduxjs/toolkit";
const vegSlice=createSlice({
    name:'veg',
    initialState:vegData,
    reducers:(state,action)=>{

    }
})

export default vegSlice.reducer;