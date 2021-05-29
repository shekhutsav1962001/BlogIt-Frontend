import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useHistory } from "react-router-dom";
function Viewmybloglistcard(props) {
    
    const { date, title, id } = props;
    const history = useHistory();
    return (
        <div className="col-md-6 col-lg-4">
            <div className="card" onClick={() => {
                let path = "/viewblog/" + id
                history.push(path);
            }} >
                <div className="card-header">

                    {title}
                </div>
                <div className="card-body">

                    Posted On :- {date} <br />
                    <Link to={'viewblog/' + id}>Read more ...</Link>
                </div>
                <div className="card-footer text-muted">
                    <div className="d-flex justify-content-between">

                        <i className="fa fa-edit"></i>
                        <i className="fa fa-trash"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Viewmybloglistcard
