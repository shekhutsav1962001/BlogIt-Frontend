import React, { useEffect, useState } from 'react'
import Viewmybloglistcard from './Viewmybloglistcard'
import { isLoggedIn } from '../apis/LoggedIn'
import { Redirect } from 'react-router';
function Viewmybloglist() {
    const [isLogin, setisLogin] = useState(isLoggedIn());
    useEffect(() => {
        if (isLoggedIn()) {
            setisLogin(true)
        }
        else {
            setisLogin(false)
        }
    }, [])
    return (
        <>
            {isLogin ? (<div className="container">
                <div className="row">
                    <Viewmybloglistcard />
                    <Viewmybloglistcard />
                    <Viewmybloglistcard />
                </div>
            </div>) : (<Redirect to="/" />)}

        </>
    )
}

export default Viewmybloglist

