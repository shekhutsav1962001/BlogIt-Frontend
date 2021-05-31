import React, { createContext, useEffect, useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Redirect, Route, Switch } from "react-router-dom";
// import Footer from "./components/Footer"
import Landing from "./components/Landing"
import Navbar from "./components/Navbar"
import Splash from "./components/Splash"
import Addblog from "./components/Addblog"
import Viewbloglist from "./components/Viewbloglist"
import Viewblog from "./components/Viewblog"
import Viewmybloglist from './components/Viewmybloglist'
import Login from "./components/Login"
import Editblog from './components/Editblog'
import { isLoggedIn } from './apis/LoggedIn'
// toster css
import 'react-toastify/dist/ReactToastify.css';
const MyLoginContext = createContext();
function App() {

  const [splash, setSplash] = useState(false);
  const [isLogin, setisLogin] = useState(isLoggedIn());
  
  useEffect(() => {
    if (isLoggedIn()) {
      setisLogin(true)
    }
    else {
      setisLogin(false)
    }
    if (window.innerWidth < 460) {
      setSplash(false)
    }
    setTimeout(() => setSplash(false), 4000)
  }, []);

  return (

    <>
      <MyLoginContext.Provider value={{ isLogin, setisLogin }}>
        <Navbar />

        {splash === true ? <Splash /> :
          <Switch>

            <Route exact={true} path="/" component={Landing}></Route>

            <Route exact={true} path="/login" component={Login}></Route>
            <Route exact={true} path="/viewblogs" component={Viewbloglist}></Route>
            <Route exact={true} path="/viewblog/:id" component={Viewblog}></Route>


            {/* auth required */}
            <Route exact={true} path="/addblog">
              {isLogin ? <Addblog /> : <Redirect to="/" />}
            </Route>
            <Route exact={true} path="/viewmyblogs">
              {isLogin ? <Viewmybloglist /> : <Redirect to="/" />}
            </Route>
            <Route exact={true} path="/editblog/:id">
              {isLogin ? <Editblog /> : <Redirect to="/" />}
            </Route>


          </Switch>
        }
      </MyLoginContext.Provider>
      {/* <Footer /> */}
    </>
  );
}

export default App;
export { MyLoginContext };