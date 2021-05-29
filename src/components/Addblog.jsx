import React, { useEffect, useState } from 'react'
import MarkdownIt from 'markdown-it'
import MdEditor from 'react-markdown-editor-lite'
import 'react-markdown-editor-lite/lib/index.css';
import '../styles/Addblog.css'
import { isLoggedIn } from '../apis/LoggedIn'
import { Redirect } from 'react-router';

import { toastMessage } from '../apis/Toast'
import { addBlogwithoutImage,addBlogwithImage } from "../apis/Blog"

import { useHistory } from 'react-router-dom';
function Addblog() {
    const history = useHistory();
    const [content, setContent] = useState("")
    const [title, setTitle] = useState("")
    const [file, setFile] = useState(null)
    // const [defalut, setDefault] = useState(localStorage.getItem("data") ? localStorage.getItem("data") : "")
    // const [defalut, setDefault] = useState("")

    const mdParser = new MarkdownIt({ html: false, breaks: true, linkify: false });

    const [isLogin, setisLogin] = useState(isLoggedIn());
    const [isDisabled, setisDisable] = useState(false);
    function handleEditorChange({ html, text }) {
        setContent(text)
    }


    useEffect(() => {
        if (isLoggedIn()) {
            setisLogin(true)
        }
        else {
            setisLogin(false)
        }
        // hide nav
        // let nav = document.getElementsByClassName('rc-md-navigation')[0]
        // nav.classList.toggle('visible');
        // nav.classList.toggle('in-visible');


        // hide md
        // let md = document.getElementsByClassName('section sec-md')[0]
        // md.remove()
        // md.classList.toggle('visible');
        // md.classList.toggle('invisible');
    }, [])
    function submit() {

        // console.log(title)
        // console.log(content);
        // console.log(file);
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
        setisDisable(true)
        if (file) {
            console.log("yes file");
            let formData = new FormData();
            formData.append("file", file);
            formData.append("title", title);
            formData.append("content", content);
            async function addblog() {
                const data = await addBlogwithImage(formData);

                if (data && data.status) {
                    localStorage.removeItem("token")
                    history.push('/login')
                    setTimeout(function () {
                        window.location.reload();
                    }, 2000);

                }
                
                if (data && data.message) {
                    history.push('/viewmyblogs')
                }
            }
            addblog()
        }
        else {
            console.log("no file");
            async function addblog() {
                const data = await addBlogwithoutImage({ title, content });

                if (data && data.status) {
                    localStorage.removeItem("token")
                    history.push('/login')
                    setTimeout(function () {
                        window.location.reload();
                    }, 2000);

                }
                if (data && data.message) {

                    history.push('/viewmyblogs')
                }
            }
            addblog()

        }
    }
    return (


        <>

            {isLogin ? (<div className="container">
                <div className="parent">
                    <span className="title">Blog Title :-</span>
                    <input className="addinput" maxLength="40" type="text" onChange={(e) => { setTitle(e.target.value) }} autoComplete="off" autoCorrect="off" spellCheck="false" />
                </div>
                <div className="parent">
                    <span className="title">Blog Content :-</span>
                    <MdEditor
                        style={{ height: "500px", marginTop: "10px" }}
                        renderHTML={(text) => mdParser.render(text)}
                        onChange={handleEditorChange}

                    />
                </div>
                <div className="parent">
                    <span className="title">Blog Image(optional):-</span>
                    <div className="image-upload">



                        <i className="fa fa-upload" aria-hidden="true"></i>

                        <h5><b>Choose Your Image to Upload</b></h5>
                        <h5>Or Drop Your Image Here</h5>

                        <input type="file" name="image_name" className="image-input" onChange={(e) => {
                            if (e.target.files.length > 0) {

                                setFile(e.target.files[0])
                            }
                            document.getElementById("filename").innerText = e.target.value.split('\\').pop()
                        }} />

                        <h5 id="filename"> </h5>

                    </div>
                </div>
                <div className="parent">
                    <button disabled={isDisabled} onClick={submit} className="btn btn-outline-primary addblogbtn ">
                        {/* <span style={{display:"none"}} className="spinner-border spinner-border-sm " role="status" aria-hidden="true"></span> */}
                     Add Blog</button>

                </div>
            </div>) : (<Redirect to="/" />)}

        </>
    )
}

export default Addblog
