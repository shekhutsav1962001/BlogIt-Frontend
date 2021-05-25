import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    console.log("object");
    return (
        <div>
            <nav>I am navbar</nav>
            <Link to="/a">Contact</Link>
        </div>
    )
}

export default Navbar
