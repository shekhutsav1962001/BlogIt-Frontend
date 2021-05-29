import React from 'react'
import { Link } from "react-router-dom";
import '../styles/Viewbloglistcard.css'
import { useHistory } from "react-router-dom";
function Viewbloglistcard(props) {
    const { date, email, picture, title, id } = props;
    const history = useHistory();
    return (

        <div className="col-md-6 col-lg-4">

            <div onClick={() => {
                let path = "/viewblog/" + id
                history.push(path);
            }} className="card">
                <div className="card-header">
                    <img src={picture} alt="Avatar" className="avatar" />
                    {title}
                </div>
                <div className="card-body">
                    <h5 className="card-title">Posted by :- {email}</h5>

                    <Link to={'viewblog/' + id} >Read more ...</Link>
                </div>
                <div className="card-footer text-muted">
                    {date}
                </div>
            </div>
        </div>
    )
}

export default Viewbloglistcard
