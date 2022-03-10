import React, {useState, useContext} from 'react';
import mpesa from '../../../assets/img/mpesa-3.png';
import makeRequest from "../../utils/fetch-request";
import { Formik,  Form} from 'formik';
import { Context } from '../../../context/store';


const Header = React.lazy(()=>import('../../header/header'));
const SideBar = React.lazy(()=>import('../../sidebar/sidebar'));
const Right = React.lazy(()=>import('../../right/index'));
const Footer = React.lazy(()=>import('../../footer/footer'));

const Withdrawal = (props) => {
    //todo get the phone number from logged in user ....
    console.log("Props are ", props)
    const [state, ] = useContext(Context);
   
    const [success, setSuccess] = useState(false);
    const [message, setMessage] = useState(null);

    const initialValues = {
        amount: '',
        msisdn: state?.user?.msisdn
    }

    const handleSubmit = values => {
        console.log("Form Data posting to api", values)
        let endpoint = '/withdraw';
        makeRequest({url: endpoint, method: 'POST', data: {user:values}, use_jwt:true}).then(([status, response]) => {
            setSuccess(status === 200 || status === 201);
            setMessage(response);
			console.log("This are your values ", response,  status);
        })
    }

    const validate = values => {

        let errors = {}

        if (!values.msisdn || !values.msisdn.match(/(254|0|)?[71]\d{8}/g) ) {
            errors.msisdn = 'Please enter a valid phone number'
        }

        if (!values.amount || values.amount < 50 || values.amount > 70000) {
            errors.amount = "Please enter amount between KES 50 and KES 70, 000";
        }
        console.log(values);
        return errors
    }

    const FormTitle = () => {
       return (
            <div className='col-md-12 primary-bg p-4 text-center'>
                <h4 className="inline-block">
                    WITHDRAW FUNDS (MOBILE MONEY)
                </h4>
            </div>
       )
    }


    const WithdrawFormFields = (props) => {
        const { values, errors, onFieldChanged } = props;
    
        return (
            <>
            <div className="form-group row d-flex justify-content-center">
                <div className="col-md-12">
                    <label>Phone Number</label>
                    <input
                        readOnly={true}
                        className="text-dark deposit-input form-control input-field"
                        id="msisdn"
                        name="msisdn"
                        type="text"
                        value ={values.msisdn}
                        placeholder='Enter Phone Number'
                    />
                    {errors.msisdn &&  <div className='text-danger'> {errors.msisdn} </div>  }
                </div>
            </div>
            <div className="form-group row d-flex justify-content-center mt-5">
                <div className="col-md-12">
                    <label>Amount to Withdraw</label>
                    <input
                        onChange={ev => onFieldChanged(ev) }
                        className="text-dark deposit-input form-control col-md-12 input-field"
                        id="amount"
                        name="amount"
                        type="text"
                        value ={values.amount}
                        placeholder='Enter Amount'
                    />
                    {errors.amount &&  <div className='text-danger'> {errors.amount} </div>  }
                </div>
            </div>
            <div className="form-group row d-flex justify-content-left mb-4">
                <div className="col-md-3">
                    <button
                        className='btn btn-lg btn-primary mt-5 col-md-12 deposit-withdraw-button'>
                        Withdraw
                    </button>
                </div>
            </div>
         </>
       )
    }


    const PaymentInstructions = (props) => {
         return (
             <>
                <label className='header text-info'>Withdrawal Instructions</label>
                <div className="container">
                    <div className="row"><div className="col"> 1. Enter the phone M-Pesa phone number to receive the funds.  </div></div>
                    <div className="row"><div className="col"> 2. Enter the amount you wish to withdraw.</div></div>
                    <div className="row"><div className="col"> 3. Click on the withdraw funds button.</div></div>
                    <div className="row"><div className="col"> 4. Check your phone for an M-Pesa Confirmation.</div></div>
                </div>
            </>
        );
    }
    const MyWithdrawalForm = (props) => {
        const {errors, values, setFieldValue } = props;

        const onFieldChanged = (ev)=>{
            let field = ev.target.name;
            let value = ev.target.value;
            setFieldValue(field, value);
        }
       return (
            <Form className="shadow-sm rounded border-0" >
                <div className="pt-0">
                    <div className="row">
                        <div className='col-md-7 text-center'>
                            <img src={mpesa} alt=""/>
                        </div>
                        <hr/>
                        <WithdrawFormFields  onFieldChanged ={ onFieldChanged} values ={values } errors={errors} />
                        <hr/>
                        <PaymentInstructions />
                    </div>
                </div>
            </Form>
        ); 
    }

    const WithdrawalForm = (props) => {
        return (
             <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
                validateOnChange={false}
                validateOnBlur={false}
                validate={validate}
                render = {(props) => <MyWithdrawalForm {...props} /> } />
            );
    }

    const Alert = (props) => {
        let c = success ? 'success' : 'danger';
        return (<>{ message  && <div role="alert" className={`fade alert alert-${c} show`}>{message}</div> } </>) ;

    };

    return (
         <React.Fragment>
           <Header/>
           <div className="by amt">
             <div className="gc">
                <SideBar loadCompetitions />
                <div className="gz home">
                    <div className="homepage">
                      <FormTitle />
                        <div className="col-md-12 mt-2 text-white p-2">
                            <Alert />
                            <div className="modal-body pb-0" data-backdrop="static">
                                 <WithdrawalForm />
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

export default Withdrawal;
