import React, { useState } from 'react'

import { GoogleLogin } from 'react-google-login';
import { toastMessage } from '../apis/Toast'
import axios from 'axios'
import "../styles/Login.css"
// import { useHistory } from 'react-router-dom';

function Login() {
    // const history = useHistory();
    const [error, setError] = useState({
        hasError: false,
        errormsg: null
    });
    // const [user, setUser] = useState({
    //     email: '',
    //     password: ''
    // });
    const responseSuccessGoogle = (response) => {
        console.log("success")
        axios({
            method: "POST",
            url: `${process.env.REACT_APP_API}auth/googlelogin`,
            data: { tokenId: response.tokenId }
        }).then(res => {
            const { error, token } = res.data
            if (error) {
                setError({ hasError: true, errormsg: error })
            }
            localStorage.setItem("token", token)
            toastMessage(true, "Login successful!!")

            // window.location.reload();

            setTimeout(function () {
                window.location.reload();
                // history.push('/viewmyblogs')
                window.location = "/viewmyblogs"
            }, 2000);

            
        }).catch(err => {
            setError({ hasError: true, errormsg: "Something went wrong" })
        })

    }
    const responseErrorGoogle = (response) => {
        console.log("error")
        // console.log(response)
        setError({ hasError: true, errormsg: "Something went wrong" })
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
    function handleSubmit(e) {
        e.preventDefault();
    }


    // function handleEvent(e) {
    //     setUser((preValue) => {
    //         return {
    //             ...preValue,
    //             [e.target.name]: e.target.value
    //         }
    //     })
    // }


    return (
        <>

            <div className="body">
                <div className="containerr">
                    <h1>Login</h1>
                    {error.hasError ? <p className="tomato">{error.errormsg}</p> : null}
                    <form onSubmit={handleSubmit}>
                        <div className="form-controll">
                            <input name="email" type="text" autoComplete="off" autoCorrect="off" spellCheck="false" required />
                            <label>Email</label>

                        </div>

                        <div className="form-controll">
                            <input name="password" type="password" autoComplete="off" autoCorrect="off" spellCheck="false" required />
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
