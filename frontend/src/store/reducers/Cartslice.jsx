import {createSlice} from "@reduxjs/toolkit"
const initialState = {
    cart: []
}
const cartslice = createSlice({
    name: "cart",
    initialState,
    reducers:{
        loadcart: (state, action) =>{
            state.cart = action.payload;
        }
    }
})

export default cartslice.reducer
export const {loadcart}  = cartslice.actions;