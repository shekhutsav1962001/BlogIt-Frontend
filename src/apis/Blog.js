import axios from 'axios'
import { toastMessage } from './Toast'
const baseURL = process.env.REACT_APP_API;
export const addBlogwithoutImage = async (data) => {
    // const history = useHistory();
    console.log(data)
    try {
        let token = await localStorage.getItem("token")

        let url = `${baseURL}blog/addblogwithoutimage`;
        const response = await axios({ method: "POST", url: url, data: data, headers: { "Authorization": `Bearer ${token}`, "Content-type": "application/json", } })

        const { error, message, status } = response.data

        if (error) {
            toastMessage(false, error)
            if (status === 401) {

                return { status };
            }
            return null;
        }

        toastMessage(true, message)
        return { message };



    } catch (e) {
        toastMessage(false, "Something went wrong")
        return null
    }
}



export const addBlogwithImage = async (data) => {
    
    console.log(data)
    try {
        let token = await localStorage.getItem("token")

        let url = `${baseURL}blog/addblogwithimage`;
        const response = await axios({ method: "POST", url: url, data: data, headers: { "Authorization": `Bearer ${token}`, "Content-type": "application/json", } })

        const { error, message, status } = response.data

        if (error) {
            toastMessage(false, error)
            if (status === 401) {
                return { status };
            }
            return null;
        }

        toastMessage(true, message)
        return { message };

    } catch (e) {
        toastMessage(false, "Something went wrong")
        return null
    }
}