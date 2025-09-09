import { configureStore } from '@reduxjs/toolkit'
import cartslice from './reducers/Cartslice'
import productReducer from './reducers/Product'
import userslice from './reducers/Userslice'


export const store = configureStore({
  reducer: {
    userReducer: userslice,
    products: productReducer,
    cartReducer: cartslice
  },
})