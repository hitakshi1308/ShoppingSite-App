import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './slice'
import productReducer from './productSlice'
import authReducer from "./authSlice";
import userReducer from "./userSlice";

const store = configureStore({
    reducer:{
        cart: cartReducer,
        products: productReducer,
        auth: authReducer,
        user: userReducer,
    }
})

export default store;