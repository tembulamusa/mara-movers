import React, {useEffect, useCallback, useContext, useState} from "react";
import {render} from "react-dom";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

import {
    BrowserRouter,
    Route,
    Routes,
    useNavigate,
} from 'react-router-dom'

import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import Store from './context/store';
import {Context} from './context/store';

import Index  from './components/index';
import Login from './components/pages/login';
import ResetPassword from './components/pages/auth/reset-password';
import ProtectedRoute from './components/utils/protected-route';
import Help from './components/pages/Help';
import {getFromLocalStorage, setLocalStorage} from "./components/utils/local-storage";
import TeamDetail from "./components/pages/team-detail";
import About from "./components/pages/about";
import Header from "./components/header/header";
import Footer from "./components/footer/index.js";
import Services from "./components/pages/services.js";
import ContactUs from "./components/pages/contact-us.js";
import Media from "./components/pages/media.js";


const Logout = () => {
    let navigate = useNavigate();

    const [state, dispatch] = useContext(Context);
    const out = useCallback(() => {
        localStorage.clear();
        dispatch({type: "DEL", key: "user"});
        navigate("/");
    }, [navigate]);

    useEffect(() => {
        out();
    }, [out]);
    return null;
}

const App = () => {

    const [state, ] = useContext(Context);
    const isAuthenticated = getFromLocalStorage("user");
    return (
                <>
                
                <div className="">
               

                <div className="">
                    <div className="">
                        <Header />
                        
                        <Routes>
                        <Route exact path="/" element={<Index/>}/>
                        <Route exact path="/login" element={<Login/>}/>
                        <Route exact path="/reset-password" element={<ResetPassword/>}/>
                        <Route exact path="/logout" element={<Logout/>}/>
                        <Route exact path="/help" element={<Help/>}/>
                        <Route exact path="/about" element={<About/>}/>
                        <Route exact path="/services" element={<Services />} />
                        <Route exact path="/contact-us" element={<ContactUs />} />                        
                        <Route path="/media" element={<Media/>}/>
                        <Route path="*" element={<Index/>}/>
                        
                        </Routes>

                        <Footer />
                    </div>
                    
                </div>
                
              </div>
              
              </>
    )
}

const container = document.getElementById("app");

render((
    <Store>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Store>
), container);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
