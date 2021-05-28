import React from 'react'
import { Link } from 'react-router-dom'

function Viewmybloglistcard() {
    return (
        <div className="col-md-6 col-lg-4">
            <div className="card">
                <div className="card-header">

                    Special title treatment
            </div>
                <div className="card-body">
                    <Link to="/">Read more ...</Link>
                </div>
                <div className="card-footer text-muted">
                    Fri May 28 2021
            </div>
            </div>
        </div>
    )
}

export default Viewmybloglistcard
