import React, {useState, useCallback, useEffect, useContext} from "react";
import { Modal } from "react-bootstrap";
import makeRequest from '../utils/fetch-request';
import {getFromLocalStorage} from '../utils/local-storage'; 
import { useNavigate, useLocation } from "react-router-dom";
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import {Formik, Field, Form} from 'formik';
import {Context} from '../../context/store';
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {setLocalStorage} from '../utils/local-storage';
import { useMediaQuery } from 'react-responsive';
import AdminRoles from "./admin-roles";

const NewAdminModal = (props) => {
    const [isLoading, setIsLoading] = useState(null)
    const [message, setMessage] = useState("null message for a start");
    const {setUser} = props;
    const navigate = useNavigate();
    const location = useLocation();
    const isMobile = useMediaQuery({ query: `(max-width: 576px)` });
    const [state, dispatch] = useContext(Context);
    const [newUserId, setNewUserId] = useState(null);
    const [showAdminRoles, setShowAdminRoles] = useState(false);
    const [showMessage, setShowMessage] = useState(false);
    const [messageType, setMessageType] = useState(null)
    const [generatedPassword, setGeneratedPassword] = useState("password123")
    const initialValues = {
        email: "",
        lastName: "",
        firstName: "",
        msisdn: "",
        username: "",
        password: `${generatedPassword}`,
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
            toastId: 673739 /* this is hack to prevent multiple toasts */
        }
        if (message.status === 200) {
            toast.success(`🚀 ${message.message}`, options);
        } else {
            toast.error(`🦄 ${message.message}`, options);
        }

    };

    const CreatePassword = () => {
        const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let length = Math.floor(Math.random() * (9 - 5 + 1) ) + 5;
        let result = '';
        const charactersLength = characters.length;
        for ( let i = 0; i < length; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }

        setGeneratedPassword(result);

    }

    useEffect(() => {
        CreatePassword();
    }, [])

    const dispatchUser = useCallback(() => {
        if (message !== null) {
            Notify(message);
            if (message.status == 200) {
                setLocalStorage('user', message?.user);
                location?.state?.from
                    ? navigate(location?.state?.from)
                    :  ((isMobile && Object.keys(state?.betslip ||{}).length > 0 )? navigate("/") : navigate("/")) ;
            }

        }
    }, [message])

    useEffect(() => {
        dispatchUser();
    }, [dispatchUser]);

    const handleSubmit = values => {
        let endpoint = '/user';
        setIsLoading(true)

        // async await for the password to update and then create
        // then proceed to send

        makeRequest({url: endpoint, method: 'POST', data: values}).then(([status, response]) => {
            setIsLoading(false)
            if (status === 200 || status == 201 || status == 204) {
                
                // Redirect to admin details to create permissions
                dispatch({type: "SET", key: "selecteduserdetail", payload: response?.message?.user})
                dispatch({type: "SET", key: "latestsuccessmessage", payload: `admin created successfully. Add roles/permissions for ${response?.message?.user?.firstName + " " + response?.message?.user?.lastName}`})
                navigate(`/admin-details/${response?.message?.user.userId}`);
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

        // if (!values.reference || values.reference.length < 4) {
        //     errors.reference = "Invalid reference";
        // }

        return errors
    }


    const NewAdminForm = (props) => {
        const {isValid, errors, values, submitForm, setFieldValue} = props;

        const onFieldChanged = (ev) => {
            let field = ev.target.name;
            let value = ev.target.value;
            setFieldValue(field, value);
        }

        return (
            <Form className="p-3">
                    <Row>
                        <div className="form-group col-12 justify-content-center mt-3">
                            <label className='block mb-2'>User Email</label>

                            <input
                                    value={values.email}
                                    className={`text-dark deposit-input form-control col-md-12 input-field py-2 ${errors.email && "text-danger"}`}
                                    id="name"
                                    name="email"
                                    type="email"
                                    data-action="grow"
                                    required="required"
                                    placeholder={"Enter User Email"}
                                    onChange={(ev) => onFieldChanged(ev)}
                                />
                                {errors.email && <div className='text-danger'> {errors.email} </div>}

                            
                            <br/>
                            
                        </div>

                        <div className="form-group col-6 justify-content-center mt-2">
                                <label className='block mb-2'>First Name</label>
                                <input
                                    value={values.firstName}
                                    className={`text-dark deposit-input form-control col-md-12 input-field py-2 ${errors.firstName && 'text-danger'}`}
                                    id="firstName"
                                    name="firstName"
                                    data-action="grow"
                                    required="required"
                                    placeholder={"Admin First Name"}
                                    onChange={(ev) => onFieldChanged(ev)}
                                />

                                {errors.lastName && <div className='text-danger'> {errors.lastName} </div>}
                        
                        </div>
                        <div className="form-group col-6 justify-content-center mt-2">
                                <label className='block mb-2'>Last Name</label>
                                <input
                                    value={values.lastName}
                                    className={`text-dark deposit-input form-control col-md-12 input-field py-2 ${errors.lastName && 'text-danger'}`}
                                    id="lastName"
                                    name="lastName"
                                    data-action="grow"
                                    required="required"
                                    placeholder={"Admin Last Name"}
                                    onChange={(ev) => onFieldChanged(ev)}
                                />

                                {errors.lastName && <div className='text-danger'> {errors.lastName} </div>}
                        
                        </div>

                        <div className="form-group col-6 justify-content-center mt-4">
                            <label className='block mb-2'>User Phone Number</label>

                            <input
                                    value={values.msisdn}
                                    className={`text-dark deposit-input form-control col-md-12 input-field py-2 ${"errors.name && text-danger"}`}
                                    id="msisdn"
                                    name="msisdn"
                                    type="text"
                                    data-action="grow"
                                    required="required"
                                    placeholder={"072xxxxxxx"}
                                    onChange={(ev) => onFieldChanged(ev)}
                                />
                                {errors.msisdn && <div className='text-danger'> {errors.msisdn} </div>}

                                                        
                        </div>
                        <div className="form-group col-6 justify-content-center mt-4">
                                <label className='block mb-2'>Username</label>
                                <input
                                    value={values.username}
                                    className={`text-dark deposit-input form-control col-md-12 input-field py-2 ${errors.username && 'text-danger'}`}
                                    id="username"
                                    name="username"
                                    data-action="grow"
                                    required="required"
                                    placeholder={"Admin Username"}
                                    onChange={(ev) => onFieldChanged(ev)}
                                />

                                {errors.username && <div className='text-danger'> {errors.username} </div>}
                        
                        </div>

                                                
                            <div className='mt-3 mb-2 flex flex-row text-center'>
                                <span
                                onClick={() => dispatch({type: "SET", key: "shownewadminmodal", payload: false})}
                                className={`p-3 rounded shadow-md border border-white-200 w-50 mr-2 bg-red-400 text-white flex flex-col`}
                                            disabled={isLoading}>
                                        Cancel
                                </span>

                                <button
                                 className={`p-3 rounded shadow-md border border-white-200 w-50 bg-purple-500 text-white text-center`}
                                            disabled={isLoading}>
                                        {isLoading ? 'Creating Memo...' : 'Continue'}
                                </button>
                            </div> 

                                
                            
                    </Row>
                </Form>
        )
    }

    // show/set user roles form after creating the user
    const AdminFormikForm = (props) => {
        return (
            <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
                validateOnChange={false}
                validateOnBlur={false}
                validate={validate}
            >{(props) => <NewAdminForm {...props} />}</Formik>
        );
    }
    
    return (
        <>
            <Modal
            {...props}
            top
            size = "md"
            show={state?.shownewadminmodal}
            onHide={() => dispatch({type: "SET", key: "shownewadminmodal", payload: false})}
            dialogClassName="new-admin-modal"
            aria-labelledby="contained-modal-title-vcenter">
                     <Modal.Header closeButton className="bg-purple-500 text-white text-center justify-center place-items-center">
                      <Modal.Title className="w-full font-small ">New Admin</Modal.Title>
                    </Modal.Header>
                    {
                    <Modal.Body>
                        {showMessage &&
                            <div className={` alert alert-${messageType === 'error'  && "danger" || "success"}`}>
                                {message}
                            </div>
                        }

                        {
                            showAdminRoles && <AdminRoles userid={newUserId}/> || <AdminFormikForm />
                        }
                    </Modal.Body>
                 }
            </Modal>
        </>
    )
}

export default NewAdminModal;