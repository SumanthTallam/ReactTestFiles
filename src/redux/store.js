import { configureStore } from "@reduxjs/toolkit";
import vegSliceReducer from './vegSlice'
import meatSliceReducer from './meatSlice'
import cartSliceReducer from './cartSlice'




const store=configureStore({
    reducer:{
        veg:vegSliceReducer,
        meat:meatSliceReducer,
        // cart:cartSliceReducer
    }
})
export default store