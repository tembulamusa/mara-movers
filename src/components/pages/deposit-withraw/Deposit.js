import React, {useState, useContext, useEffect} from 'react';

import {Formik, Form} from 'formik';
import makeRequest from "../../utils/fetch-request";
import mpesa from '../../../assets/img/mpesa.png'
import {Context} from '../../../context/store';
import {getBetslip} from '../../utils/betslip'

const Header = React.lazy(() => import('../../header/header'));
const Footer = React.lazy(() => import('../../footer/footer'));
const SideBar = React.lazy(() => import('../../sidebar/awesome/Sidebar'));
const Right = React.lazy(() => import('../../right/index'));
const DirectDeposit = React.lazy(() => import('./DirectDeposit'));


const Deposit = (props) => {

    const [state, dispatch] = useContext(Context);
    const [success, setSuccess] = useState(false);
    const [message, setMessage] = useState(null);

    const initialValues = {
        amount: '',
        msisdn: state?.user?.msisdn || ''
    }

    const handleSubmit = values => {
        let endpoint = '/v1/stk/deposit';
        makeRequest({url: endpoint, method: 'POST', data: values}).then(([status, response]) => {
            setSuccess(status === 200 || status === 201);
            setMessage(response?.message);
        })
    }

    const validate = values => {

        let errors = {}
        console.log("This os the ofending number ", values.msisdn);

        if (!values.msisdn || !values.msisdn.match(/(255|0|)?\d{9}/g)) {
            errors.msisdn = 'Please enter a valid phone number'
        }

        if (!values.amount || values.amount < 100 || values.amount > 500000) {
            errors.amount = "Please enter amount between TSH 100.00 and TSH 500,000.00";
        }
        return errors
    }

    useEffect(() => {
        let betslip = getBetslip();
        if (betslip) {
            dispatch({type: "SET", key: "betslip", payload: betslip});
        }
    }, [])

    const FormTitle = () => {
        return (
            <div className='col-md-12  p-4 text-center primary-bg'>
                <h4 className="inline-blk">
                    DEPOSIT FUNDS (MOBILE MONEY)
                </h4>
            </div>
        )
    }


    const DepositFormFields = (props) => {
        const {values, errors, onFieldChanged} = props;

        return (
            <>
                <div className="form-group row d-flex justify-content-center">
                    <div className="col-md-12">
                        <label>Phone Number</label>
                        <input
                            className="text-dark deposit-input form-control input-field"
                            id="msisdn"
                            name="msisdn"
                            type="text"
                            value={values.msisdn}
                            readOnly={true}
                        />
                        {errors.msisdn && <div className='text-danger'> {errors.msisdn} </div>}
                    </div>
                </div>
                <div className="form-group row d-flex justify-content-center mt-5">
                    <div className="col-md-12">
                        <label style={{width:"100%"}}>Amount to Deposit <span className="float-end">Min. 1000</span></label>
                        <input
                            onChange={ev => onFieldChanged(ev)}
                            className="text-dark deposit-input form-control col-md-12 input-field"
                            id="amount"
                            name="amount"
                            type="text"
                            value={values.amount}
                            placeholder='Enter Amount'
                        />
                        {errors.amount && <div className='text-danger'> {errors.amount} </div>}
                    </div>
                </div>
                <div className="form-group row d-flex justify-content-left mb-4">
                    <div className="col-md-3">
                        <button
                            className='btn btn-lg btn-primary mt-5 col-md-12 deposit-withdraw-button'>
                            Deposit
                        </button>
                    </div>
                </div>
            </>
        )
    }


    const PaymentInstructions = (props) => {
        return (
            <>
                <label className='text-info'>Deposit Instructions</label>
                <div className="container">
                    <div className="row">
                        <div className="col"> 1. Enter the amount you want to deposit.</div>
                    </div>
                    <div className="row">
                        <div className="col"> 2. Click on the deposit button.</div>
                    </div>
                    <div className="row">
                        <div className="col"> 3. Check your phone for a Request.</div>
                    </div>
                    <div className="row">
                        <div className="col"> 4. Enter your Pin to confirm the transaction.</div>
                    </div>
                    <div className="row">
                        <div className="col"> 5. On successful payment, you will receive a
                            Confirmation.
                        </div>
                    </div>
                </div>
            </>
        );
    }
    const MyDepositForm = (props) => {
        const {errors, values, setFieldValue} = props;

        const onFieldChanged = (ev) => {
            let field = ev.target.name;
            let value = ev.target.value;
            setFieldValue(field, value);
        }

        return (
            <Form className="rounded border-0">
                <div className="pt-0">
                    <div className="row">
                        <div className='col-md-7 text-center'>
                        </div>
                        <hr/>
                        <DepositFormFields onFieldChanged={onFieldChanged} values={values} errors={errors}/>
                        <hr/>
                        <PaymentInstructions/>
                    </div>
                </div>
            </Form>
        );
    }

    const DepositForm = (props) => {
        return (
            <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
                validateOnChange={false}
                validateOnBlur={false}
                validate={validate}
                render={(props) => <MyDepositForm {...props} />}/>
        );
    }

    const Alert = (props) => {
        let c = success ? 'success' : 'danger';
        return (<>{message && <div role="alert" className={`fade alert alert-${c} show`}>{message}</div>} </>);

    };

    return (
        <React.Fragment>
            <Header/>
            <div className="amt">
                <div className="d-flex flex-row justify-content-between">
                    <SideBar loadCompetitions/>
                    <div className="gz home" style={{width: '100%'}}>
                        <div className="homepage">
                            <FormTitle/>
                            <div className="col-md-12 mt-2  p-2">
                                <Alert/>
                                <div className="modal-body pb-0" data-backdrop="static">
                                    <DepositForm/>
                                    <DirectDeposit />
                                </div>

                            </div>
                        </div>
                    </div>
                    <Right/>
                </div>
            </div>
            <Footer/>
        </React.Fragment>
    )

}

export default Deposit
