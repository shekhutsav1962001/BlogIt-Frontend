import React, { useContext, useState } from 'react'

import { GoogleLogin } from 'react-google-login';

import axios from 'axios'
import "../styles/Login.css"

import { MyLoginContext } from '../App'
import { useHistory } from 'react-router';
import { toastMessage } from "../apis/Toast"
import { LoginEmailPassword } from "../apis/Auth"
function Login() {
    const history = useHistory();
    const { setisLogin } = useContext(MyLoginContext);
    const [user, setUser] = useState({
        email: '',
        password: ''
    });
    const responseSuccessGoogle = (response) => {
        // console.log("success")
        axios({
            method: "POST",
            url: `${process.env.REACT_APP_API}auth/googlelogin`,
            data: { tokenId: response.tokenId }
        }).then(res => {
            const { error, token } = res.data
            if (error) {
                toastMessage(false, error)
                return;
            }
            localStorage.setItem("token", token)
            toastMessage(true, "Login successful!!")


            setisLogin(true)
            let path = "/viewmyblogs"
            history.push(path);


        }).catch(err => {
            toastMessage(false, "Something went wrong")
        })

    }
    const responseErrorGoogle = (response) => {
        console.log("error")
        // console.log(response)
        toastMessage(false, "Something went wrong")
    }
    setTimeout(function () {
        const labels = document.querySelectorAll('.form-controll label')
        labels.forEach(label => {
            label.innerHTML = label.innerText
                .split('')
                .map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)
                .join('')
        })
    }, 100);
    async function handleSubmit(e) {
        e.preventDefault();
        const data = await LoginEmailPassword({ password: user.password, email: user.email });
        if (data && data.token) {
            
            localStorage.setItem("token", data.token)
            setisLogin(true)
            let path = "/viewmyblogs"
            history.push(path);
        }
    }


    function handleEvent(e) {
        setUser((preValue) => {
            return {
                ...preValue,
                [e.target.name]: e.target.value
            }
        })
    }


    return (
        <>

            <div className="body">
                <div className="containerr">
                    <h1>Login</h1>

                    <form onSubmit={handleSubmit}>
                        <div className="form-controll">
                            <input name="email" type="text" value={user.email} onChange={handleEvent} autoComplete="off" autoCorrect="off" spellCheck="false" required />
                            <label>Email</label>

                        </div>

                        <div className="form-controll">
                            <input name="password" type="password" value={user.password} onChange={handleEvent} autoComplete="off" autoCorrect="off" spellCheck="false" required />
                            <label>Password</label>
                        </div>

                        <button type="submit" className="btnlogin">Login</button>
                    </form>

                    <div className="btngooglelogin"> <GoogleLogin
                        clientId={process.env.REACT_APP_CLIENTID}
                        buttonText="Login with Google"
                        onSuccess={responseSuccessGoogle}
                        onFailure={responseErrorGoogle}
                        cookiePolicy={'single_host_origin'} /></div>

                </div>
            </div>
        </>
    )
}

export default Login
