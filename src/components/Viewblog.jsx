import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import { getBlogbyId } from "../apis/Blog"
import MarkdownIt from 'markdown-it'
import MdEditor from 'react-markdown-editor-lite'
function Viewblog() {
    const { id } = useParams()
    const [blog, setblog] = useState(null)
    const mdParser = new MarkdownIt({ html: false, breaks: true, linkify: false });
    useEffect(() => {
        async function getblog() {
            const data = await getBlogbyId(id);
            if (data && data.blog) {
                console.log(data.blog);
                setblog(data.blog)

                setTimeout(function () {
                    let nav = document.getElementsByClassName('rc-md-navigation')[0]
                    nav.remove()
                    let md = document.getElementsByClassName('section sec-md')[0]
                    md.remove()
                }, 200);
                // hide nav
                // let nav = document.getElementsByClassName('rc-md-navigation')[0]
                // nav.classList.toggle('visible');
                // nav.classList.toggle('in-visible');


                // hide md
                // let md = document.getElementsByClassName('section sec-md')[0]
                // md.remove()
                // md.classList.toggle('visible');
                // md.classList.toggle('invisible');
            }
        }
        getblog()
    }, [id])

    return (
        <>
            {blog ? (<>
                <div className="container">
                    <h1 className="blogtitle text-center mt-5" style={{ color: "#2f2e41" }}>{blog.title}</h1>
                    {blog.image ? (<div className="d-flex justify-content-center mt-3" >
                        <img src={blog.image} style={{ maxHeight: "500px" }} alt="not found"
                            className="img-fluid" />
                    </div>) : null}

                    <MdEditor
                        style={{ marginTop: "10px", marginBottom: "30px" }}
                        renderHTML={(text) => mdParser.render(text)}

                        defaultValue={blog.content}
                    /></div></>
            ) : (<div style={{ overflowX: "hidden" }}>

                <h3 className="empty text-center mt-5" style={{ color: "#2f2e41" }}>Blog Not Found!</h3>
                <div className="d-flex justify-content-center mt-3" >
                    <img src="https://storage.googleapis.com/canteen-assets/blogit/emptyyellow.svg" style={{ maxHeight: "500px" }} alt="not found"
                        className="img-fluid" />
                </div>
            </div>)
            }
        </>
        // <div>
        //     View Blog {id}
        // </div>
    )
}

export default Viewblog
