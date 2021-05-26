import React from 'react'

import { NavLink } from "react-router-dom";
import '../styles/Navbar.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function Navbar() {
    // console.log("object");
    return (

        <nav className="navbar  navbar-expand-lg">
            <a className="navbar-brand" href="https://storage.googleapis.com/canteen-assets/index/logo.png">
                <img src="https://storage.googleapis.com/canteen-assets/index/blogit.png" height="30" alt="CoolBrand"
                    style={{ marginLeft: '10px' }} />
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" style={{ color: "white", outline: "none" }}
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon "><i style={{ color: "#F8C44C", fontSize: "28px" }} className="fa fa-bars"></i></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav">
                    <li className="nav-item"><NavLink exact activeClassName="active" to="/" className="nav-link third after">Home</NavLink></li>
                    <li className="nav-item"><NavLink exact activeClassName="active" to="/a" className="nav-link third after">Food</NavLink></li>

                    <li className="nav-item"><NavLink exact activeClassName="active" to="/b" className="nav-link third after">Register/Login</NavLink></li>
                </ul >
            </div >
        </nav >
    )
}

export default Navbar
