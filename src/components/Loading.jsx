import React from 'react'

function Loading() {
    return (
        <div className="loading">
            <div className="d-flex justify-content-center">
                <div className="spinner-border" role="status" style={{ position: "absolute", top: "40%", color: "#0a192f" }}>
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        </div>
    )
}

export default Loading
