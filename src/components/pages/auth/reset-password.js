import React, {useState} from 'react';
import {Formik, Form} from 'formik';
import makeRequest from "../../utils/fetch-request";

const Header = React.lazy(() => import('../../header/header'));
const SideBar = React.lazy(() => import('../../sidebar/sidebar'));
const Right = React.lazy(() => import('../../right/index'));
const Footer = React.lazy(() => import('../../footer/footer'));

const ResetPassword = (props) => {

    const [success, setSuccess] = useState(false);
    const [message, setMessage] = useState(null);
    const [otp_sent, setOtpSent] = useState(false)

    const initialValues = {
        mobile: '',
    }

    const initialResetFormValues = {
        id: '',
        reset_code: '',
        password: '',
        repeat_password: ''
    }

    const handleSubmit = values => {
        let endpoint = '/v1/code';
        makeRequest({url: endpoint, method: 'POST', data: values}).then(([status, response]) => {
            setSuccess(status === 200 || status === 201);
            setMessage(response.success.message);
            setOtpSent(true)
            initialResetFormValues.id = response.success.id
        })
    }
    const handleSubmitPasswordReset = values => {
        let endpoint = '/v1/reset';
        makeRequest({url: endpoint, method: 'POST', data: values}).then(([status, response]) => {
            setSuccess(status === 200 || status === 201);
            setMessage(response.message);
        })
    }

    const validate = values => {

        let errors = {}

        if (!values.mobile || !values.mobile.match(/(254|0|)?[71]\d{8}/g)) {
            errors.mobile = 'Please enter a valid phone number'
        }

        return errors
    }

    const validatePasswordReset = password_reset_values => {

        let password_reset_errors = {}

        if (!password_reset_values.reset_code) {
            password_reset_errors.reset_code = "Please enter your One Time Pin (OTP)"
        }

        if (password_reset_values.reset_code.length < 4) {
            password_reset_errors.reset_code = "Your OTP should be greater than 4 numbers."
        }

        if (!password_reset_values.password) {
            password_reset_errors.password = "Please enter your new password"
        }

        if (!password_reset_values.repeat_password) {
            password_reset_errors.repeat_password = "Please enter your password confirmation"
        }

        if (password_reset_values.password !== password_reset_values.repeat_password) {
            password_reset_errors.repeat_password = "The passwords do not match. Please enter the password you entered above."
        }

        return password_reset_errors
    }

    const FormTitle = () => {
        return (
            <div className='col-md-12 primary-bg p-4 text-center'>
                <h4 className="inline-block">
                    RECOVER YOUR ACCOUNT
                </h4>
            </div>
        )
    }

    const MyOtpForm = (props) => {
        const {errors, values, submitForm, setFieldValue} = props;

        const onFieldChanged = (ev) => {
            let field = ev.target.name;
            let value = ev.target.value;
            setFieldValue(field, value);
        }
        return (
            <Form className={`${otp_sent ? 'd-none' : 'd-block'}`}>
                <div className="pt-0">
                    <div className="row">
                        <hr/>
                        <div className="form-group row d-flex justify-content-center mt-5">
                            <div className="col-md-12">
                                <label>Mobile Number</label>
                                <input
                                    value={values.mobile}
                                    className="text-dark deposit-input form-control col-md-12 input-field"
                                    id="mobile"
                                    name="mobile"
                                    type="text"
                                    placeholder='Phone number'
                                    onChange={ev => onFieldChanged(ev)}
                                />
                                {errors.mobile && <div className='text-danger'> {errors.mobile} </div>}
                            </div>
                        </div>

                        <div className="form-group row d-flex justify-content-left mb-4">
                            <div className="col-md-3">
                                <button type="submit"
                                        onClick={submitForm}
                                        className='btn btn-lg btn-primary mt-5 col-md-12 deposit-withdraw-button'>
                                    Send OTP
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </Form>
        );
    }

    const MyPasswordResetForm = (props) => {

        const {errors, values, submitForm, setFieldValue} = props;

        const onFieldChanged = (ev) => {
            let field = ev.target.name;
            let value = ev.target.value;
            setFieldValue(field, value);
        }
        return (
            <Form className={`${otp_sent ? 'd-block' : 'd-none'}`}>
                <div className="pt-0">
                    <div className="row">
                        <hr/>
                        <div className="col-md-12">
                            <div className="alert alert-info">
                                We have sent a One Time Pin (OTP) to your phone. Please enter it below with your new
                                password.
                            </div>
                            <div className="col-md-12">
                                <div className="form-group row d-flex justify-content-center mt-5">
                                    <label>OTP</label>
                                    <input
                                        value={values.reset_code}
                                        className="text-dark deposit-input form-control col-md-12 input-field"
                                        id="otp"
                                        name="reset_code"
                                        type="text"
                                        placeholder='OTP'
                                        onChange={ev => onFieldChanged(ev)}
                                    />
                                    {errors.reset_code && <div className='text-danger'>
                                        {errors.reset_code}
                                    </div>}
                                </div>
                            </div>
                            <div className="form-group row d-flex justify-content-center mt-5">
                                <div className="col-md-12">
                                    <label>Password</label>
                                    <input
                                        value={values.password}
                                        className="text-dark deposit-input form-control col-md-12 input-field"
                                        id="password"
                                        name="password"
                                        type="password"
                                        placeholder='Password'
                                        onChange={ev => onFieldChanged(ev)}
                                    />
                                    {errors.password && <div className='text-danger'>
                                        {errors.password}
                                    </div>}
                                </div>
                            </div>
                            <div className="form-group row d-flex justify-content-center mt-5">
                                <div className="col-md-12">
                                    <label>Confirm Password</label>
                                    <input
                                        value={values.repeat_password}
                                        className="text-dark deposit-input form-control col-md-12 input-field"
                                        id="confirm_password"
                                        name="repeat_password"
                                        type="password"
                                        placeholder='Password'
                                        onChange={ev => onFieldChanged(ev)}
                                    />
                                    {errors.repeat_password &&
                                        <div className='text-danger'>
                                            {errors.repeat_password}
                                        </div>}
                                </div>
                            </div>
                        </div>

                        <div className="form-group row d-flex justify-content-left mb-4">
                            <div className="col-md-3">
                                <button type="submit"
                                        onClick={submitForm}
                                        className='btn btn-lg btn-primary mt-5 col-md-12 deposit-withdraw-button'>
                                    Reset Password
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </Form>
        );
    }

    const OptForm = (props) => {
        return (
            <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
                validateOnChange={false}
                validateOnBlur={false}
                validate={validate}
            >{(props) => <MyOtpForm {...props} />}</Formik>
        );
    }
    const PasswordResetForm = (props) => {
        return (
            <Formik
                initialValues={initialResetFormValues}
                onSubmit={handleSubmitPasswordReset}
                validateOnChange={false}
                validateOnBlur={false}
                validate={validatePasswordReset}
            >{(props) => <MyPasswordResetForm {...props} />}</Formik>
        );
    }

    const Alert = (props) => {
        let c = success ? 'success' : 'danger';
        return (<div role="alert" className={`fade alert alert-${c} show`}>{message}</div>);

    };

    return (
        <React.Fragment>
            <Header/>
            <div className="by amt">
                <div className="gc">
                    <SideBar loadCompetitions/>
                    <div className="gz home">
                        <div className="homepage">
                            <FormTitle/>
                            <div className="col-md-12 mt-2 text-white p-2">
                                {message && <Alert/>}
                                <div className="modal-body pb-0" data-backdrop="static">
                                    <OptForm/>
                                    <PasswordResetForm/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Right/>
                </div>
            </div>
            <Footer/>
        </React.Fragment>
    );
}

export default ResetPassword;
