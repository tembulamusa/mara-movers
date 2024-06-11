import React, {useRef, useState} from 'react';
import {Formik, Form} from 'formik';
import makeRequest from "../../utils/fetch-request";
import { useLocation } from 'react-router-dom'
import { useNavigate } from "react-router-dom";


const VerifyAccount = (props) => {
    const navigate = useNavigate();
    const [success, setSuccess] = useState(false);
    const [message, setMessage] = useState(null);
    const verifyRef = useRef()

    const location = useLocation()
    const { phone } = location.state


    const initialValues = {
        mobile: phone,
        code: ''
    }

    const handleSubmit = values => {
        let endpoint = '/v1/verify';
        makeRequest({url: endpoint, method: 'POST', data: values}).then(([status, response]) => {
            setSuccess(status === 200 || status === 201)
            setMessage(response.success ? response.success.message : response.error.message);
            response.success ? setSuccess(true) : setSuccess(false)
            if (response?.success?.status == 200 || response?.success?.status === 201) {
                setTimeout(navigate('/'), 3000);
                
            }

        }).catch((err) => {
        })
    }

    const validate = values => {

        let errors = {}

        if (!values.mobile || !values.mobile.match(/(\+?255|0|)?\d{9}/g)) {
            errors.mobile = 'Please enter a valid phone number'
        }

        if (!values.code || values.code.length < 4) {
            errors.code = "Please enter four or more characters for code";
        }

        return errors
    }

    const resendOTP = () => {

        let endpoint = '/v1/code';

        let values = {
            mobile: verifyRef.current.values.mobile
        }

        makeRequest({url: endpoint, method: 'POST', data: values}).then(([status, response]) => {
            setSuccess(status === 200 || status === 201);
            setMessage(response.success ? response.success.message : response.error.message);
            response.error ? setSuccess(false) : setSuccess(true)
        })
    }

    const FormTitle = () => {
        return (
            <div className='col-md-12 primary-bg p-4 text-center'>
                <h4 className="inlne-block">
                    VERIFY YOUR PHONE NUMBER
                </h4>
            </div>
        )
    }

    const MyVerifyAccountForm = (props) => {
        const {errors, values, submitForm, setFieldValue} = props;

        const onFieldChanged = (ev) => {
            let field = ev.target.name;
            let value = ev.target.value;
            setFieldValue(field, value);
        }
        return (
            <Form>
                <div className="pt-0">
                    <div className="row">
                        <div className="form-group row d-flex justify-content-center mt-5">
                            <div className="col-md-12">
                                <div className="row">
                                <div className="col-md-12">
                                    <span className=''>
                                        Je Umepata namba ya Uthibitisho!?, Bonyeza ili Kutuma Tena  &nbsp;
                                    </span>
                                    <button onClick={() => resendOTP()} type={"button"}
                                            className='btn btn-primary btn-sm'>Bonyeza Hapa
                                    </button>
                                </div>
                                </div>
                                <label>Mobile Number</label>
                                <div className="row">
                                    <div className="col-md-12">
                                        <input
                                            value={values.mobile}
                                            className="text-dark deposit-input form-control col-md-12 input-field"
                                            id="mobile"
                                            name="mobile"
                                            type="text"
                                            disabled="disabled"
                                            placeholder='Phone number'
                                            onChange={ev => onFieldChanged(ev)}
                                        />
                                        {errors.mobile && <div className='text-danger'> {errors.mobile} </div>}
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="form-group row d-flex  mt-5">
                            <div className="col-md-12">
                                <label>Namba Ya Uthibitisho (OTP)</label>
                                <input
                                    value={values.code}
                                    className="text-dark deposit-input form-control col-md-12 input-field"
                                    id="code"
                                    name="code"
                                    type="code"
                                    placeholder='Code'
                                    onChange={ev => onFieldChanged(ev)}
                                />
                                {errors.code && <div className='text-danger'> {errors.code} </div>}
                            </div>
                        </div>
                        <div className="form-group row d-flex justify-content-left mb-4">
                            <div className="col-md-3">
                                <button type="submit"
                                        onClick={submitForm}
                                        className='btn btn-lg btn-primary mt-5 col-md-12 deposit-withdraw-button'>
                                    Verify Account
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </Form>
        );
    }

    const VerifyAccountForm = (props) => {
        return (
            <Formik
                innerRef={verifyRef}
                initialValues={initialValues}
                onSubmit={handleSubmit}
                validateOnChange={false}
                validateOnBlur={false}
                validate={validate}
                render={(props) => <MyVerifyAccountForm {...props} />}/>
        );
    }

    const Alert = (props) => {
        let c = success ? 'success' : 'danger';
        return (<div role="alert" className={`fade alert alert-${c} show`}>{message}</div>);

    };

    return (
        <React.Fragment>
            <FormTitle/>
            <div className="col-md-12 mt-2  p-2">
                {message && <Alert/>}
                <div className="modal-body pb-0" data-backdrop="static">
                    <VerifyAccountForm/>
                </div>
            </div>
        </React.Fragment>
    );
}

export default VerifyAccount;
