import React, { useContext, useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import MarkdownIt from 'markdown-it'
import { getBlogForEdit, EditBlog } from "../apis/Blog"
import MdEditor from 'react-markdown-editor-lite'
import { isLoggedIn } from '../apis/LoggedIn'
import { Redirect } from 'react-router';
import { useHistory } from 'react-router-dom';
import { toastMessage } from '../apis/Toast'
import { MyLoginContext } from '../App'
import Loading from './Loading'
function Editblog() {
    const history = useHistory();
    const { id } = useParams()
    const [blog, setblog] = useState(null)
    const mdParser = new MarkdownIt({ html: false, breaks: true, linkify: false });
    const [content, setContent] = useState("")
    const [title, setTitle] = useState("")
    const { isLogin, setisLogin } = useContext(MyLoginContext);
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        if (isLoggedIn()) {
            setisLogin(true)
        }
        else {
            setisLogin(false)
        }
        async function getblog() {
            const data = await getBlogForEdit(id);
            if (data && data.status) {
                localStorage.removeItem("token")
                setisLogin(false)
                setLoading(false)
                history.push('/login')


            }
            if (data && data.blog) {
                setLoading(false)
                setblog(data.blog)
                setTitle(data.blog.title)
                setContent(data.blog.content)
            }
            else
            {
                setLoading(false)
                setblog(null)
                setTitle("")
                setContent("")
            }
        }
        getblog()

    }, [id, history, setisLogin])

    function handleEditorChange({ html, text }) {
        setContent(text)
    }

    function submit() {

        if (title.trim().length === 0 || content.trim().length === 0) {
            toastMessage(false, "Please fill required fields")
            return;
        }
        if (title.length >= 40) {
            toastMessage(false, "Too long Title")
            return;
        }
        if (content.length <= 100) {
            toastMessage(false, "Too short Content")
            return;
        }
        async function updateblog() {
            const data = await EditBlog({ id: blog._id, title, content });

            if (data && data.status) {
                localStorage.removeItem("token")
                setisLogin(false)
                history.push('/login')

            }
            if (data && data.message) {
                history.push('/viewmyblogs')
            }
        }
        updateblog()
    }
    return (
        <>
            {loading ? (<Loading />) : (<>
                {isLogin ? (
                    <>
                        { blog ? (
                            <div className="container">
                                <div className="parent">
                                    <span className="title">Blog Title :-</span>
                                    <input className="addinput" maxLength="40" type="text" value={title} onChange={(e) => { setTitle(e.target.value) }} autoComplete="off" autoCorrect="off" spellCheck="false" />
                                </div>
                                <div className="parent">
                                    <span className="title">Blog Content :-</span>
                                    <MdEditor
                                        style={{ height: "500px", marginTop: "10px" }}
                                        renderHTML={(text) => mdParser.render(text)}
                                        onChange={handleEditorChange}
                                        defaultValue={blog.content}
                                    />
                                </div>
                                <div className="parent">
                                    <button onClick={submit} className="btn btn-outline-primary addblogbtn ">
                                        Update Blog</button>
                                </div>
                            </div>
                        ) : (<div style={{ overflowX: "hidden" }}>

                            <h3 className="empty text-center mt-5" style={{ color: "#2f2e41" }}>Blog Not Found!</h3>
                            <div className="d-flex justify-content-center mt-3" >
                                <img src="https://storage.googleapis.com/canteen-assets/blogit/emptyyellow.svg" style={{ maxHeight: "500px" }} alt="not found"
                                    className="img-fluid" />
                            </div>
                        </div>)
                        }
                    </>
                ) : (<Redirect to="/" />)}
            </>)}


        </>
    )
}

export default Editblog
