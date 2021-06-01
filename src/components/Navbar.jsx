import React, { useContext, useEffect, useState } from 'react'

import { Link, NavLink } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css'
import { isLoggedIn } from '../apis/LoggedIn.js'
import { MyLoginContext } from '../App'
import { ToastContainer } from 'react-toastify';
import { setPass } from '../apis/Auth'
import { useHistory } from 'react-router-dom';
import { toastMessage } from '../apis/Toast'
function Navbar() {
    const history = useHistory();
    const { isLogin, setisLogin } = useContext(MyLoginContext);

    const [password, setPassword] = useState("")
    useEffect(() => {
        if (isLoggedIn()) {
            setisLogin(true)
        }
        else {
            setisLogin(false)
        }
    }, [setisLogin]);
    async function updatePassword() {
        if (password.trim().length === 0) {
            toastMessage(false, "Please enter password")
            setPassword("")
            return;
        }
        if (password.trim().length < 5) {
            toastMessage(false, "Minimum length of password should be 5")
            setPassword("")
            return;
        }
        const data = await setPass({ password });
        if (data && data.status) {

            localStorage.removeItem("token")
            setisLogin(false)
            history.push('/login')
        }

        if (data && data.message) {
            console.log("yo boy password seteddd");
            setPassword("")
        }
    }
    return (
        <>
            <ToastContainer />
            <nav className="navbar  navbar-expand-lg">
                <Link className="navbar-brand" exact={"true"} to="/">
                    <img src="https://storage.googleapis.com/canteen-assets/blogit/blogit.png" height="30" alt="CoolBrand"
                        style={{ marginLeft: '10px' }} />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" style={{ color: "white", outline: "none" }}
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon "><i style={{ color: "#F8C44C", fontSize: "28px" }} className="fa fa-bars"></i></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                        <li className="nav-item"><NavLink exact={true} activeClassName="active" to="/" className="nav-link third after">Home</NavLink></li>
                        <li className="nav-item"><NavLink exact={true} activeClassName="active" to="/viewblogs" className="nav-link third after" >view Blogs</NavLink></li>
                        {isLogin ? (
                            <>
                                <li className="nav-item"><NavLink exact={true} activeClassName="active" to="/addblog" className="nav-link third after">Add Blog</NavLink></li>
                                <li className="nav-item"><NavLink exact={true} activeClassName="active" to="/viewmyblogs" className="nav-link third after">View myblogs</NavLink></li>
                                <li className="nav-item"><NavLink exact={true} to="/temp" data-bs-toggle="modal" data-bs-target="#exampleModal" className="nav-link third after">Set password</NavLink></li>
                                <li className="nav-item" onClick={() => {
                                    localStorage.removeItem("token")
                                    setisLogin(false)
                                }}><NavLink exact={true} to="/logout" className="nav-link third after">Logout</NavLink></li>
                            </>
                        ) : (
                            <li className="nav-item"><NavLink exact={true} activeClassName="active" to="/login" className="nav-link third after">Login</NavLink></li>
                        )}



                    </ul >



                    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Set Password</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <form>
                                        <div className="alert alert-info" role="alert">
                                            By Setting password you can login with email and password.
                                            </div>
                                        {/* <label ></label> */}
                                        <div className="form-group">
                                            <label htmlFor="exampleInputPassword1">Password</label>
                                            <input type="password" value={password} onChange={(e) => {
                                                setPassword(e.target.value)
                                            }} className="form-control" id="exampleInputPassword1" placeholder="Password" />
                                        </div>
                                    </form>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" onClick={updatePassword} className="btn btn-primary" data-bs-dismiss="modal">Save</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </nav >
        </>
    )
}

export default Navbar
