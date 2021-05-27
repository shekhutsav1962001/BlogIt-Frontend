import React from 'react'

import { Link, NavLink } from "react-router-dom";
import '../styles/Navbar.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function Navbar() {
    // console.log("object");
    return (

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
                    <li className="nav-item"><NavLink exact={true}  activeClassName="active" to="/viewblogs" className="nav-link third after">view Blogs</NavLink></li>
                    <li className="nav-item"><NavLink exact={true}  activeClassName="active" to="/addblog" className="nav-link third after">Add Blog</NavLink></li>
                    <li className="nav-item"><NavLink exact={true}  activeClassName="active" to="/login" className="nav-link third after">Login</NavLink></li>
                </ul >
            </div >
        </nav >
    )
}

export default Navbar
