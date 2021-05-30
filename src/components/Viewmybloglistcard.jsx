import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { deleteBlog } from "../apis/Blog"
function Viewmybloglistcard(props) {
    const history = useHistory();
    const { date, title, id, blogs, setblogs } = props;
    async function deleteMe() {
        const data = await deleteBlog(id);
        if (data && data.status) {
            localStorage.removeItem("token")
            history.push('/login')
            setTimeout(function () {
                window.location.reload();
            }, 2000);

        }

        if (data && data.message) {
            let newList = blogs.filter(function (itm) {
                return id !== itm._id;
            });
            setblogs(newList)
        }
    }
    return (
        <div className="col-md-6 col-lg-4">
            <div className="card" >
                <div className="card-header">

                    {title}
                </div>
                <div className="card-body">

                    Posted On :- {date} <br />
                    <Link to={'viewblog/' + id}>Read more ...</Link>
                </div>
                <div className="card-footer text-muted">
                    <div className="d-flex justify-content-between">
                        <Link to={'editblog/' + id}><div className="btn btn-outline-primary"><i className="fa fa-edit"></i> Edit</div></Link>
                        <div className="btn btn-outline-danger" onClick={deleteMe}><i className="fa fa-trash"></i> Delete</div>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default Viewmybloglistcard
