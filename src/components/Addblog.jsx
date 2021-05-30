import React, { useContext, useEffect, useState } from 'react'
import MarkdownIt from 'markdown-it'
import MdEditor from 'react-markdown-editor-lite'
import 'react-markdown-editor-lite/lib/index.css';
import '../styles/Addblog.css'
import { isLoggedIn } from '../apis/LoggedIn'
import { Redirect } from 'react-router';

import { toastMessage } from '../apis/Toast'
import { addBlog, UploadFile } from "../apis/Blog"
import { MyLoginContext } from '../App'
import { useHistory } from 'react-router-dom';
function Addblog() {
    const { isLogin, setisLogin } = useContext(MyLoginContext);
    const history = useHistory();
    const [content, setContent] = useState("")
    const [title, setTitle] = useState("")
    const [file, setFile] = useState(null)
    const [url, setUrl] = useState("")
    const mdParser = new MarkdownIt({ html: false, breaks: true, linkify: false });
    // const [isLogin, setisLogin] = useState(isLoggedIn());
    const [isDisabled, setisDisable] = useState(false);
    const [isfileDisabled, setisfileDisable] = useState(false);

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
    }, [setisLogin])

    function copyurl() {
        var tempInput = document.createElement("input");
        tempInput.value = url;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand("copy");
        document.body.removeChild(tempInput);
        toastMessage(true, "URL copied to clipboard")
    }

    function uploadImage() {
        if (!file) {
            toastMessage(false, "Please choose a file")
            return;
        }
        setisfileDisable(true)
        let formData = new FormData();
        formData.append("file", file);
        async function addfile() {
            const data = await UploadFile(formData);

            if (data && data.status) {
                localStorage.removeItem("token")
                setisLogin(false)
                history.push('/login')
                

            }

            if (data && data.message) {
                document.getElementById("filename").innerText = "";
                setisfileDisable(false)
                setFile(null)
                setUrl(data.message)
                // history.push('/viewmyblogs')
            }
        }
        addfile()
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
        setisDisable(true)

        async function addblog() {
            const data = await addBlog({ title, content });

            if (data && data.status) {
                localStorage.removeItem("token")
                setisLogin(false)
                history.push('/login')
            }
            if (data && data.message) {

                history.push('/viewmyblogs')
            }
        }
        addblog()


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

                        <input type="file" accept="image/*" name="image_name" className="image-input" onChange={(e) => {
                            if (e.target.files.length > 0) {

                                setFile(e.target.files[0])
                            }
                            document.getElementById("filename").innerText = e.target.value.split('\\').pop()
                        }} />

                        <h5 id="filename"> </h5>

                    </div>
                    <div className="parent">
                        <button disabled={isfileDisabled} onClick={uploadImage} className="btn btn-outline-primary addblogbtn ">
                            Upload Image</button>
                    </div>
                    {url === "" ? null : (<div className="copyurl">
                        <input className="copyurlinput" id="url" value={url} type="text" disabled autoComplete="off" autoCorrect="off" spellCheck="false" />

                        <button onClick={copyurl} className="btn btn-outline-primary copyurlbtn">

                            Copy</button>
                    </div>)}



                </div>
                <div className="parent">
                    <button disabled={isDisabled} onClick={submit} className="btn btn-outline-primary addblogbtn ">
                        Add Blog</button>
                </div>
            </div>) : (<Redirect to="/" />)}

        </>
    )
}

export default Addblog
