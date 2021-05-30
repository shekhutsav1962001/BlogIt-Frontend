import React, { useEffect, useState } from 'react'
import Viewbloglistcard from "./Viewbloglistcard"
import { getallBlogs } from '../apis/Blog'
function Viewbloglist() {

    const [blogs, setblogs] = useState([])
    
    useEffect(() => {
        
        async function getblogs() {
            const data = await getallBlogs();
            if (data && data.blogs && data.blogs.length) {

                setblogs(data.blogs)
            }
            else {
                setblogs([])
            }
        }
        getblogs()
        
    }, [])
    
    return (
        <>
            {blogs.length === 0 ? (<div style={{ overflowX: "hidden" }}>

                <h3 className="empty text-center mt-5" style={{ color: "#2f2e41" }}>Empty BlogList!</h3>
                <div className="d-flex justify-content-center mt-3" >
                    <img src="https://storage.googleapis.com/canteen-assets/blogit/emptyyellow.svg" style={{ maxHeight: "500px" }} alt="not found"
                        className="img-fluid" />
                </div>
            </div>) : (<div className="container">
                <div className="row">
                    {blogs.map((data, index) => {


                        return (<Viewbloglistcard id={data._id} title={data.title} picture={data.user.picture} email={data.user.email} date={data.date} key={index} />)
                    })}

                </div>
            </div>)}

        </>
    )
}

export default Viewbloglist
