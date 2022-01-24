import React,  { useContext, useEffect } from "react";
import { render } from "react-dom";

import { 
    BrowserRouter, 
    Route, Routes, 
    Navigate 
} from 'react-router-dom'

import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/application.css';
import './assets/css/tolkits.css';
import './assets/css/sidebar-menu.css';
import './index.css';


import Store, { Context }  from './context/store';
import Index  from './components/index';


const container = document.getElementById("app");
render((
    <Store>
    <BrowserRouter>
        <Routes>
           <Route exact path = "/" element = { <Index /> }  />
       </Routes>
    </BrowserRouter>
    </Store>
), container);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
