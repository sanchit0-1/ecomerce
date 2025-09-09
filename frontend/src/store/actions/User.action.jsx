import axios from "../../api/AxiosConfig"
import { createAsyncThunk } from "@reduxjs/toolkit"




export const Apiuser = (logdata) => async (dispatch, getState) =>{
    try {
        const {data} = await axios.get(`/users?user=${logdata.user}&pass=${logdata.pass}`)
        console.log(data[0])
    } catch (error) {
        console.log(error);
    }
}

export const userdata =  (user) => async (dispatch, getState) => {
    try {
        const res = await axios.post("/users", user)
        console.log(res)
    } catch (error) {
        console.log(error);
    }
}