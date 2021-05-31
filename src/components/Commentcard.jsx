import React from 'react'

function Commentcard(props) {
    const { date, name, comment, profile } = props.data
    return (
        <div className="comment">
            <div className="comment-header">
                <div className="comment-user">
                    <img className="avatar"
                        src={profile}
                        alt="not found" />
                    <strong>{name}</strong>
                </div>
                <div className="comment-date">Posted on:- {date}</div>
            </div>
            <div className="commentcontent">
                {comment}
            </div>

        </div>
    )
}

export default Commentcard
