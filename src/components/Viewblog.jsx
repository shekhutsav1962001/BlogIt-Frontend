import React, { useContext, useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import { getBlogbyId } from "../apis/Blog"
import MarkdownIt from 'markdown-it'
import MdEditor from 'react-markdown-editor-lite'
import Commentlist from './Commentlist';
import { toastMessage } from '../apis/Toast'
import { addComment } from "../apis/Blog"
import { MyLoginContext } from '../App'
import { useHistory } from 'react-router-dom';
function Viewblog() {
    const { id } = useParams()
    const history = useHistory();
    const [blog, setblog] = useState(null)
    const [comment, setComment] = useState("")
    const [msg, setMsg] = useState("")
    const mdParser = new MarkdownIt({ html: false, breaks: true, linkify: false });
    const { isLogin, setisLogin } = useContext(MyLoginContext);
    useEffect(() => {
        async function getblog() {
            const data = await getBlogbyId(id);
            if (data && data.blog) {
                // console.log(data.blog);
                setblog(data.blog)

                setTimeout(function () {
                    let nav = document.getElementsByClassName('rc-md-navigation')[0]
                    if (nav) {
                        nav.remove()
                    }
                    let md = document.getElementsByClassName('section sec-md')[0]
                    if (md) {
                        md.remove()
                    }
                }, 200);

            }
        }
        getblog()
    }, [id, msg])

    function submitComment() {

        if (comment.trim() === "") {
            toastMessage(false, "Please Enter commnet")
            return;
        }
        if (!isLogin) {
            toastMessage(false, "Please Login to post a commnet")
            return;
        }
        async function addcmt() {
            const data = await addComment({ id, comment });

            if (data && data.status) {
                localStorage.removeItem("token")
                setisLogin(false)
                history.push('/login')
            }
            if (data && data.message) {
                setMsg(data.message)
                setComment("")

            }
        }
        addcmt()
    }

    return (
        <>
            {blog ? (<>
                <div className="container">
                    <h1 className="blogtitle text-center mt-5" style={{ color: "#2f2e41" }}>{blog.title}</h1>
                    <div className="blogdetails">
                        <div className="bloguser">
                            <img className="avatar" src={blog.user.picture} alt="imagenotfound" />
                            Posted By - <strong>{blog.user.name}</strong>
                        </div>
                        <div className="blogdate text-muted">Posted On - {blog.date}</div>
                    </div>
                    <MdEditor
                        style={{ marginTop: "10px", marginBottom: "30px" }}
                        renderHTML={(text) => mdParser.render(text)}

                        defaultValue={blog.content}
                    />
                    {blog.comments.length === 0 ? null : (<Commentlist comments={blog.comments} />)}

                    <div className="parent" id="comment">
                        <div className="copyurl">
                            <input className="copyurlinput" type="text" placeholder="Write a comment here...." value={comment} onChange={(e) => {
                                setComment(e.target.value)
                            }} autoComplete="off" autoCorrect="off" spellCheck="false" />

                            <button className="btn btn-outline-primary copyurlbtn" onClick={submitComment}>

                                Commnet</button>
                        </div>
                    </div>
                </div></>
            ) : (<div style={{ overflowX: "hidden" }}>

                <h3 className="empty text-center mt-5" style={{ color: "#2f2e41" }}>Blog Not Found!</h3>
                <div className="d-flex justify-content-center mt-3" >
                    <img src="https://storage.googleapis.com/canteen-assets/blogit/emptyyellow.svg" style={{ maxHeight: "500px" }} alt="not found"
                        className="img-fluid" />
                </div>
            </div>)
            }
        </>

    )
}

export default Viewblog
