import axios from 'axios'
import { toastMessage } from './Toast'
const baseURL = process.env.REACT_APP_API;

export const setPass = async (data) => {
    try {

        let token = await localStorage.getItem("token")
        let url = `${baseURL}auth/setpassword`;
        const response = await axios({ method: "PUT", url: url, data: data, headers: { "Authorization": `Bearer ${token}`, "Content-type": "application/json" } })
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

export const LoginEmailPassword = async (data) => {
    try {


        let url = `${baseURL}auth/login`;
        const response = await axios({ method: "POST", url: url, data: data })
        // console.log(response.data)
        const { error, token } = response.data
        if (error) {
            toastMessage(false, error)
            return null;
        }
        toastMessage(true, "Login successful!!")
        return { token};
    } catch (e) {
        toastMessage(false, "Something went wrong")
        return null
    }
}