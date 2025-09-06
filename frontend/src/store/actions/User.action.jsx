import axios from "../../api/AxiosConfig"

export const userdata =  (user) => async (dispatchEvent, getState) => {
    try {
        const res = await axios.post("/users", user)
        console.log(res)
    } catch (error) {
        console.log(error);
    }
}