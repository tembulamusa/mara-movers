import React, {useState, useEffect} from 'react';
import {Formik, Form} from 'formik';
import makeRequest from "../utils/fetch-request";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { useLocation } from 'react-router-dom';



const TeamDetail = (props) => {
    const [message, setMessage] = useState(null);
    // 

    return (
        <React.Fragment>
            <div className="row">
                <div className="col-md-12 mt-2  p-2">
                    <div className="max-w-md card border-gray-200 mx-auto content-center items-center flex  shadow-sm pb-3" data-backdrop="static">
                        <h4 className='text-center w-100 bg-purple-700 text-white block p-3 shadow-sm'>Team Detail</h4>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default TeamDetail;
