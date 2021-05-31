import React from 'react'
import Commentcard from './Commentcard'
function Commentlist(props) {
    let { comments } = props
    return (
        <>
            <h6>Comments -</h6>

            <div className="commentwarpper">
                {comments.map((data, index) => {

                    return (<Commentcard key={index} data={data} />)
                })}
            </div>
        </>
    )
}

export default Commentlist
