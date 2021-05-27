import React, { useEffect, useState } from 'react'
import MarkdownIt from 'markdown-it'
import MdEditor from 'react-markdown-editor-lite'
import 'react-markdown-editor-lite/lib/index.css';
import '../styles/Addblog.css'

function Addblog() {
    // this is ck things
    const [data, setData] = useState("")
    // const [defalut, setDefault] = useState(localStorage.getItem("data") ? localStorage.getItem("data") : "")
    const [defalut, setDefault] = useState("")

    const mdParser = new MarkdownIt({ html: false, breaks: true, linkify: false });
    function handleEditorChange({ html, text }) {

        
        setData(text)
      
    }
    console.log( new Date().toLocaleDateString());

    useEffect(() => {

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
    return (


        <>
            <div className="container">
                <div className="parent">
                    <span className="title">Blog Title :-</span>
                    <input type="text" autoComplete="off" autoCorrect="off" spellCheck="false" />
                </div>
                <div className="parent">
                    <span className="title">Blog Content :-</span>
                    <MdEditor
                        style={{ height: "500px", marginTop: "10px" }}
                        renderHTML={(text) => mdParser.render(text)}
                        onChange={handleEditorChange}
                        defaultValue={defalut}
                    />
                </div>
                <div className="parent">
                    <span className="title">Blog Image(optional):-</span>
                    <div className="image-upload">



                        <i className="fa fa-upload" aria-hidden="true"></i>

                        <h5><b>Choose Your Image to Upload</b></h5>
                        <h5>Or Drop Your Image Here</h5>

                        <input type="file" name="image_name" className="image-input" onChange={(e) => {
                            document.getElementById("filename").innerText = e.target.value.split('\\').pop()
                        }} />

                        <h5 id="filename"></h5>

                    </div>
                </div>
                <div className="parent">
                    <button className="btn btn-outline-primary">Add Blog</button>
                </div>
            </div>
        </>
    )
}

export default Addblog
