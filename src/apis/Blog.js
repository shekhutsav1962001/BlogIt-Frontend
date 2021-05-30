import axios from 'axios'
import { toastMessage } from './Toast'
const baseURL = process.env.REACT_APP_API;
export const addBlog = async (data) => {
    // const history = useHistory();

    try {
        let token = await localStorage.getItem("token")

        let url = `${baseURL}blog/addblog`;
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



export const getallBlogs = async () => {
    try {
        let url = `${baseURL}blog/getallblogs`;
        const response = await axios({ method: "GET", url: url, headers: { "Content-type": "application/json" } })
        const { blogs, error } = response.data
        if (error) {
            toastMessage(false, error)
            return null;
        }
        return { blogs };

    } catch (e) {
        toastMessage(false, "Something went wrong")
        return null
    }
}

export const getBlogbyId = async (id) => {
    try {
        let url = `${baseURL}blog/getblog/${id}`;
        const response = await axios({ method: "GET", url: url, headers: { "Content-type": "application/json" } })
        const { blog, error } = response.data

        if (error) {
            toastMessage(false, error)
            return null;
        }

        return { blog };

    } catch (e) {
        toastMessage(false, "Something went wrong")
        return null
    }
}

export const getmyBlog = async () => {
    try {
        let token = await localStorage.getItem("token")
        let url = `${baseURL}blog/getmyblog`;
        const response = await axios({ method: "GET", url: url, headers: { "Authorization": `Bearer ${token}`, "Content-type": "application/json", } })
        const { blogs, status, error } = response.data

        if (error) {
            toastMessage(false, error)
            if (status === 401) {

                return { status };
            }
            return null;
        }

        return { blogs };

    } catch (e) {
        toastMessage(false, "Something went wrong")
        return null
    }
}



export const UploadFile = async (data) => {

    try {
        let token = await localStorage.getItem("token")

        let url = `${baseURL}blog/uploadfile`;
        const response = await axios({ method: "POST", url: url, data: data, headers: { "Authorization": `Bearer ${token}`, "Content-type": "application/json", } })

        const { error, message, status } = response.data

        if (error) {
            toastMessage(false, error)
            if (status === 401) {
                return { status };
            }
            return null;
        }

        toastMessage(true, "image uploaded successfully")
        return { message };

    } catch (e) {
        toastMessage(false, "Something went wrong")
        return null
    }
}

export const getBlogForEdit = async (id) => {
    try {
        let token = await localStorage.getItem("token")
        let url = `${baseURL}blog/getblogedit/${id}`;
        const response = await axios({ method: "GET", url: url, headers: { "Authorization": `Bearer ${token}`, "Content-type": "application/json" } })
        const { error, blog, status } = response.data

        if (error) {
            toastMessage(false, error)
            if (status === 401) {
                return { status };
            }
            return null;
        }

        return { blog };

    } catch (e) {
        toastMessage(false, "Something went wrong")
        return null
    }
}



export const EditBlog = async (data) => {
    try {
        let { id, title, content } = data
        let token = await localStorage.getItem("token")
        let url = `${baseURL}blog/editblog/${id}`;
        const response = await axios({ method: "PUT", url: url, data: { title, content }, headers: { "Authorization": `Bearer ${token}`, "Content-type": "application/json" } })
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


export const deleteBlog = async (id) => {
    try {

        let token = await localStorage.getItem("token")
        let url = `${baseURL}blog/deleteblog/${id}`;
        const response = await axios({ method: "DELETE", url: url, headers: { "Authorization": `Bearer ${token}`, "Content-type": "application/json" } })
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