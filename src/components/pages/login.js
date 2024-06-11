import React, {useState, useEffect} from 'react';
import {Formik, Form} from 'formik';
import makeRequest from "../utils/fetch-request";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { useLocation } from 'react-router-dom';

import BodyLogin from '../login/body-login';


const Login = (props) => {
    const location = useLocation()
    const [preMsg, setpreMsg] = useState();
    const [mobileNo, setmobileNo] = useState();

    useEffect(()=>{
        if(location?.state){
            let { preLoginMessage,  mobileNumber} = location.state
            setpreMsg(preLoginMessage);
            setmobileNo(mobileNumber);
        }

    }, [])

    // const {state} = useLocation();
    // const {regMessage} = state;
    const [message, setMessage] = useState(null);
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);

    
    const PreLogAlert = (props) => {
        let c = preMsg?"success" : "danger";
        return (<div role="alert" className={`fade alert alert-${c} show`}>{preMsg}</div>);
    }   
    const Alert = (props) => {
        let c = success ? 'success' : 'danger';
        return (<div role="alert" className={`fade alert alert-${c} show`}>{message}</div>);

    };

    return (
        <React.Fragment>
            <div className="row">
                <div className="col-md-12 mt-2  p-2">
                    
                    <div className="max-w-md card border-gray-200 mx-auto content-center items-center flex  shadow-sm pb-3" data-backdrop="static">
                        <h4 className='text-center w-100 bg-purple-700 text-white block p-3 shadow-sm'>Login</h4>
                        {preMsg && <PreLogAlert/>}
                        {message && <Alert/>}
                        <BodyLogin />
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Login;
