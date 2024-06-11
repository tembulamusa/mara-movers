import React, {useState, useEffect, useContext, useCallback} from 'react'
import { useNavigate, useLocation } from "react-router-dom";
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import {Formik, Field, Form} from 'formik';
import makeRequest from "../utils/fetch-request";
import {Context} from '../../context/store';
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {getFromLocalStorage, setLocalStorage} from '../utils/local-storage';
import useAnalyticsEventTracker from "../analytics/useAnalyticsEventTracker";
import { useMediaQuery } from 'react-responsive';

const BodyLogin = (props) => {
    const gaEventTracker = useAnalyticsEventTracker('Navigation');
    const [isLoading, setIsLoading] = useState(null)
    const [message, setMessage] = useState(null);
    const {getUser} = props;
    const navigate = useNavigate();
    const location = useLocation();
    const isMobile = useMediaQuery({ query: `(max-width: 576px)` });
    const [state, dispatch] = useContext(Context);
    const initialValues = {
        username: "",
        password: ""
    }
    const [user, setUser] = useState(getFromLocalStorage("user"));


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
            if (message.statusCode == 200) {
                dispatch({type: "SET", key: "user", payload: message?.user});
                setLocalStorage('user', message?.user);

                // GET THE USER DETAILS BY REQUERYING//?? OTHERWISE SINGLE TIME PACKAGING

                // let endpoint = "/user-role"
                // let udata = {
                //     token: user.token
                // }

                // makeRequest({url: endpoint, method: "post", data: udata}).then(([_status, response]) => {
                //     if (_status == 200) {
                //         let u = {...user, ...response?.message?.user_detail};
                //         dispatch({type: "SET", key: "user", payload: u});
                //         setLocalStorage('user', u);
                //         setUser(u)
                //     }
                // });


                location?.state?.from 
                    ? navigate(location?.state?.from) 
                    :  navigate("/dashboard");
            }

        }
    }, [message])

    useEffect(() => {
        dispatchUser();
    }, [dispatchUser]);


    const handleSubmit = values => {
        let endpoint = `/authenticate`;
        // console.log(values);
        setIsLoading(true)
        makeRequest({url: endpoint, method: 'GET', data: values, is_basic_auth: true }).then(([status, response]) => {

            setIsLoading(false)
            if ([200, 201, 204].includes(status)) {
                // dispatch({type:"SET", key:"showloginmodal", payload:false})
                let user = {
                    token: response?.message?.authentication?.token,
                    expiry: 3600,
                };
                response.user = user;
                dispatch({type:"SET", key:"user", payload: user})
                setMessage(response);
            } else {
                let message = {
                    status: response.status,
                    message: response?.status || "Error attempting to login. Wrong password or username."
                };
                Notify(message);
            }
        })
    }


    const validate = values => {

        let errors = {}

        if (!values.msisdn || !values.msisdn.match(/(255|0|)?\d{9}/g)) {
            errors.msisdn = 'Invalid email'
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
                <Form className="p-3">
                    <Row>
                        <div className="form-group col-12 justify-content-center mt-3">
                            <label className='block mb-2'>Username</label>

                            <input
                                    value={values.username}
                                    className={`text-dark deposit-input form-control col-md-12 input-field py-2 ${errors.username && 'text-danger'}`}
                                    id="username"
                                    name="username"
                                    type="text"
                                    data-action="grow"
                                    placeholder={errors.username || "Enter your username"}
                                    onChange={(ev) => onFieldChanged(ev)}
                                />
                                {errors.username && <div className='text-danger'> {errors.username} </div>}

                            
                            <br/>
                            
                        </div>

                        <div className="form-group col-12 justify-content-center mt-3">
                                <label className='block mb-2'>Password</label>
                                <input
                                    value={values.password}
                                    className={`text-dark deposit-input form-control col-md-12 input-field py-2 ${errors.password && 'text-danger'}`}
                                    id="password"
                                    name="password"
                                    type="password"
                                    data-action="grow"
                                    placeholder={errors.password || "Password"}
                                    onChange={(ev) => onFieldChanged(ev)}
                                />

                                {errors.password && <div className='text-danger'> {errors.password} </div>}
                                <br/>
                            <input type="hidden" name="ref" value="{props.refURL}"/>
                        </div>
                        
                        <div className="col-md-12 my-2">
                            <label><input type="checkbox" name="remember" value="1" className='mr-2'/>Remember me</label>
                        </div>
                            <div className='text-center mt-2 mb-2'>
                                <button className={`p-2 rounded shadow-md border border-white-200 w-100 bg-purple-500 text-white`}
                                            disabled={isLoading} type='submit'>
                                        {isLoading ? <span>Logging In ...</span> : <span>Login</span>}
                                </button>
                            </div>                
                            <div className="col-md-12 text-start text-purple-500 my-2 mt-4 "><a href="/reset-password" title="Reset password"
                                onClick={() => gaEventTracker('Reset Password')}>
                                    <span className="font-bold">Forgot Password? Reset</span>
                                </a></div>
                        
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
            >{(props) => <MyLoginForm {...props} />}</Formik>
        );
    }

    const AuthenticatedContent = () => {
        return (
            <div className='py-3 pb-5'>
                <div className='my-3 mb-5 text-3xl font-md w-full text-center'>You are Already logged in</div>
                <div className='w-full flex flex-row text-center'><a className='bg-purple-500 text-white w-50 p-2 rounded mr-3' href='/dashboard'>Dashboard</a> <a className='w-50 bg-red-500 text-white p-2 rounded'  href='/logout'>Logout</a></div>
            </div>
        )
    }

    return (
        <Container className="body-login-section white-bg">
                {!user? <><ToastContainer/> <LoginForm/></>: <AuthenticatedContent />}

                
        </Container>
    )
}
export default React.memo(BodyLogin);
