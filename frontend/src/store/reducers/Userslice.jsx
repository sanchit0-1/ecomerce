import {createSlice} from "@reduxjs/toolkit"
const initialState = {
    user: []
}
const userslice = createSlice({
    name: "user",
    initialState,
    reducers:{
        loaduser: (state, action) =>{
            state.user = action.payload;
        }
    }
})
export default userslice.reducer;
export const {loaduser} = userslice.actions