import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk('products', async() =>{
    const productData = await fetch('https://fakestoreapi.com/products');
    const response = await productData.json();
    return response
})

const initialState = {
    items: [],
    status: undefined,
    error: null
}
const productSlice = createSlice({
    name : 'productSlice',
    initialState, 
    extraReducers : (builder) =>{
        builder.addCase(fetchProducts.fulfilled,(state,action) =>{
            state.status = 'succeeded',
            state.items = action.payload
        })
    }
})

export default productSlice.reducer