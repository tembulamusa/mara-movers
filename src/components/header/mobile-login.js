import React, {useState, useEffect, useContext, useCallback} from 'react'
import { useNavigate } from "react-router-dom";
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import {Formik, Field, Form} from 'formik';
import makeRequest from "../utils/fetch-request";
import {Context} from '../../context/store';
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {setLocalStorage} from '../utils/local-storage';
import useAnalyticsEventTracker from "../analytics/useAnalyticsEventTracker";

const BodyLogin = (props) => {
    const gaEventTracker = useAnalyticsEventTracker('Navigation');
    const [isLoading, setIsLoading] = useState(null)
    const [message, setMessage] = useState(null);
    const {setUser} = props;
    const navigate = useNavigate();

    const initialValues = {
        msisdn: "",
        password: ""
    }

    const Notify = (message) => {
        let options = {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            toastId: 673738 /* this is hack to prevent multiple toasts */
        }
        if (message.status === 200) {
            toast.success(`🚀 ${message.message}`, options);
        } else {
            toast.error(`🦄 ${message.message}`, options);
        }

    };

    const dispatchUser = useCallback(() => {
        if (message !== null) {
            Notify(message);

            if (message.status == 200) {
                setLocalStorage('user', message.user);
                navigate("/");
            }

        }
    }, [message])

    useEffect(() => {
        dispatchUser();
    }, [dispatchUser]);

    const handleSubmit = values => {
        let endpoint = '/v1/login';
        setIsLoading(true)
        makeRequest({url: endpoint, method: 'POST', data: values}).then(([status, response]) => {

            setIsLoading(false)
            if (status === 200 || status == 201 || status == 204) {
                setMessage(response);

            } else {
                let message = {
                    status: status,
                    message: response?.message || "Error attempting to login"
                };
                Notify(message);
            }
        })
    }


    const validate = values => {

        let errors = {}

        if (!values.msisdn || !values.msisdn.match(/(254|0|)?[71]\d{8}/g)) {
            errors.msisdn = 'Invalid phone number'
        }

        if (!values.password || values.password.length < 4) {
            errors.password = "Invalid password";
        }

        return errors
    }


    const MyLoginForm = (props) => {
        const {isValid, errors, values, submitForm, setFieldValue} = props;

        const onFieldChanged = (ev) => {
            let field = ev.target.name;
            let value = ev.target.value;
            setFieldValue(field, value);
        }
        return (
            <>
                <Form className="og i web-element">
                    <Row>
                        <div className="form-group row d-flex justify-content-center mt-3">
                            <label>Mobile Number</label>

                            <input
                                    value={values.msisdn}
                                    className={`text-dark deposit-input form-control col-md-12 input-field ${errors.msisdn && 'text-danger'}`}
                                    id="msisdn"
                                    name="msisdn"
                                    type="text"
                                    data-action="grow"
                                    placeholder={errors.msisdn || "+254........."}
                                    onChange={ev => onFieldChanged(ev)}
                                />
                                {errors.msisdn && <div className='text-danger'> {errors.msisdn} </div>}

                            
                            <br/>
                            
                        </div>

                        <div className="form-group row d-flex justify-content-center mt-3">
                                <label>Password</label>
                                <input
                                    value={values.password}
                                    className={`text-dark deposit-input form-control col-md-12 input-field ${errors.password && 'text-danger'}`}
                                    id="password"
                                    name="password"
                                    type="password"
                                    data-action="grow"
                                    placeholder={errors.password || "Password"}
                                    onChange={ev => onFieldChanged(ev)}
                                />

                                {errors.password && <div className='text-danger'> {errors.password} </div>}
                                <br/>
                            <input type="hidden" name="ref" value="{props.refURL}"/>
                        </div>
                        
                        <span className="">
                            <label><input type="checkbox" name="remember" value="1"/>Remember me</label>
                        </span>
                        <button className="btn btn-primary" type="submit" style={{marginTop: "10px",
                        padding: "5px", maxWidth: "100px", fontSize: "14px"}}>
                                {isLoading ? <span>Logging In ...</span> : <span>Login</span>}
                                </button>

                        <a href="/reset-password" title="Reset password"
                               onClick={() => gaEventTracker('Reset Password')}>
                                <span className="">Forgot Password?</span>
                            </a>
                                
                        <div className="col-sm-2">
                            <a className="" href="/signup" title="Join now" onClick={() => gaEventTracker('Register')}>
                                <span className="register-la">No Account!? Register now!</span>
                            </a>
                        </div>
                    </Row>
                </Form>
            </>
        );
    }

    const LoginForm = (props) => {
        return (
            <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
                validateOnChange={false}
                validateOnBlur={false}
                validate={validate}
            >{(props) => <MyLoginForm {...props} />}</Formik>
        );
    }

    return (
        <Container className="body-login-section white-bg">
                <ToastContainer/>
                <LoginForm/>
                
        </Container>
    )
}
export default React.memo(BodyLogin);