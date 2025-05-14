import { createSlice } from "@reduxjs/toolkit";


const cartSlice =createSlice({
name:'cart',
initialState:[],
reducers:{
    addToCart:(state,action)=>{
        const items=state.find((item)=>item.name===action.payload.name);
        if(items){
           return state.quantity+=1
        }else{
            state.push({...action.payload.name,quantity:1})
        }
    }
}
})
export default cartSlice.reducer