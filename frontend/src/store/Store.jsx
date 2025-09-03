import { configureStore } from '@reduxjs/toolkit'
import cartslice from './reducers/Cartslice'
import productslice from './reducers/Product'
import userslice from './reducers/Userslice'


export const store = configureStore({
  reducer: {
    userReducer: userslice,
    productReducer: productslice,
    cartReducer: cartslice
  },
})