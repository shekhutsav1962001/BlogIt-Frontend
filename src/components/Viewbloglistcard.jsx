import React from 'react'
import { Link } from "react-router-dom";

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
                    <h6 className="card-title">Posted by :- {email}</h6>

                    <Link className="mylink" to={'viewblog/' + id} >Read more ...</Link>
                </div>
                <div className="card-footer text-muted">
                    {date}
                </div>
            </div>
        </div>
    )
}

export default Viewbloglistcard
