import axios from "../../api/AxiosConfig"

export const userdata = async (user) =>{
    try {
        const res = await axios.post("/users", user)
        console.log(res)
    } catch (error) {
        console.log(error);
    }
}