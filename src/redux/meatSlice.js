import { meatData } from "../utils/data";
import { createSlice } from "@reduxjs/toolkit";
const meatSlice=createSlice({
    name:'meat',
    initialState:meatData,
    reducers:(state,action)=>{

    }
})

export default meatSlice.reducer;