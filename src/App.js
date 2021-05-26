import React, { useEffect, useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Route, Switch } from "react-router-dom";
// import { GoogleLogin } from 'react-google-login';
// import axios from 'axios'
import Footer from "./components/Footer"
import Landing from "./components/Landing"
import Navbar from "./components/Navbar"
import Splash from "./components/Splash"
function App() {
  // const responseSuccessGoogle = (response) => {
  //   console.log("success")
  //   // console.log(response)
  //   axios({
  //     method: "POST",
  //     url: `${process.env.REACT_APP_API}auth/googlelogin`,
  //     data: { tokenId: response.tokenId }
  //   }).then(res => {
  //     const { token } = res.data
  //     localStorage.setItem("token", token)
  //     localStorage.setItem("isLoggedIn", true)
  // window.location.reload();
  //   })

  // }
  // const responseErrorGoogle = (response) => {
  //   console.log("error")
  //   // console.log(response)
  // }
  const [splash, setSplash] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 460) {
      setSplash(false)
    }
    setTimeout(() => setSplash(false), 4000)
  }, []);
  return (
    // <div className="text-danger">
    //   Hello
    //   <GoogleLogin
    //     clientId={process.env.REACT_APP_CLIENTID}
    //     buttonText="Login with Google"
    //     onSuccess={responseSuccessGoogle}
    //     onFailure={responseErrorGoogle}
    //     cookiePolicy={'single_host_origin'}
    //   />
    //  </div> 
    <>
      <Navbar />
      {splash === true ? <Splash /> :
        <Switch>

          <Route exact path="/" component={Landing}></Route>
        </Switch>
      }

      {/* <Footer /> */}
    </>
  );
}

export default App;
