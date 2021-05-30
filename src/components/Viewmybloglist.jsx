import React, { useContext, useEffect, useState } from 'react'
import Viewmybloglistcard from './Viewmybloglistcard'
import { isLoggedIn } from '../apis/LoggedIn'
import { Redirect, useHistory } from 'react-router';
import { getmyBlog } from '../apis/Blog'
import { MyLoginContext } from '../App'
function Viewmybloglist() {
    const { isLogin, setisLogin } = useContext(MyLoginContext);
    const [blogs, setblogs] = useState([])
    const history = useHistory();
    useEffect(() => {
        if (isLoggedIn()) {
            setisLogin(true)
        }
        else {
            setisLogin(false)
        }
        async function getblogs() {
            const data = await getmyBlog();
            if (data && data.status) {
                localStorage.removeItem("token")
                setisLogin(false)
                history.push('/login')
                
        
            }
            if (data && data.blogs && data.blogs.length) {
                setblogs(data.blogs)
            }
            else {
                setblogs([])
            }
        }
        getblogs()
    }, [history, setisLogin])
    return (
        <>
            {isLogin ? (
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

                                return (<Viewmybloglistcard blogs={blogs} setblogs={setblogs} id={data._id} title={data.title} date={data.date} key={index} />)
                            })}

                        </div>
                    </div>)}

                </>
            ) : (<Redirect to="/" />)}

        </>
    )
}

export default Viewmybloglist

