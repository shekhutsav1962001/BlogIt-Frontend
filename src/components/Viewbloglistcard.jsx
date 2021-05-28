import React from 'react'
import { Link } from "react-router-dom";
import '../styles/Viewbloglistcard.css'
function Viewbloglistcard() {
    return (
        <div className="col-md-6 col-lg-4">
            <div className="card">
                <div className="card-header">
                    <img src="https://lh3.googleusercontent.com/a/AATXAJyqmvl-z_ruuuc1ioT9Ys2bxqFpFFyznOqEIO41=s96-c" alt="Avatar" className="avatar" /> 
                    Special title treatment
                </div>
                <div className="card-body">
                    <h5 className="card-title">Posted by :- bidmafia007@gmail.com</h5>
                    
                    <Link to="/">Read more ...</Link>
                </div>
                <div className="card-footer text-muted">
                    Fri May 28 2021
                </div>
            </div>
        </div>
    )
}

export default Viewbloglistcard
