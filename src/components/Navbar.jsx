import React, { useContext, useEffect } from 'react'

import { Link, NavLink } from "react-router-dom";
import '../styles/Navbar.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { isLoggedIn } from '../apis/LoggedIn.js'
import { MyLoginContext } from '../App'
import { ToastContainer } from 'react-toastify';
function Navbar() {
    // const [isLogin, setisLogin] = useState(isLoggedIn());
    const { isLogin, setisLogin } = useContext(MyLoginContext);


    useEffect(() => {
        if (isLoggedIn()) {
            setisLogin(true)
        }
        else {
            setisLogin(false)
        }
    }, [setisLogin]);
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
                        <li className="nav-item"><NavLink exact={true} activeClassName="active" to="/viewblogs" className="nav-link third after">view Blogs</NavLink></li>
                        {isLogin ? (
                            <>
                                <li className="nav-item"><NavLink exact={true} activeClassName="active" to="/addblog" className="nav-link third after">Add Blog</NavLink></li>
                                <li className="nav-item"><NavLink exact={true} activeClassName="active" to="/viewmyblogs" className="nav-link third after">View myblogs</NavLink></li>
                                <li className="nav-item" onClick={() => {
                                    localStorage.removeItem("token")
                                    setisLogin(false)
                                }}><a href="/" className="nav-link third after">Logout</a></li>
                            </>
                        ) : (
                            <li className="nav-item"><NavLink exact={true} activeClassName="active" to="/login" className="nav-link third after">Login</NavLink></li>
                        )}



                    </ul >
                </div >
            </nav >
        </>
    )
}

export default Navbar
