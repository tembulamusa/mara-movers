import React, {useState, useCallback, useEffect, useContext} from "react";
import { Modal } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import {Formik, Field, Form} from 'formik';
import makeRequest from '../utils/fetch-request';
import {getFromLocalStorage} from '../utils/local-storage'; 
import { Context } from "../../context/store"


const CreateNewSupplier = (props) => {
    const {showmodal} = props;
    const [showModal, setShowModal] = useState(showmodal);

    const SupplierForm = (props) => {
        const [isLoading, setIsLoading] = useState(false);
        return (
            <>
            <form className="p-3">
                <Row>
                    <h2 className="text-2xl">Enter Supplier Details</h2>
                    <div className="form-group col-12 justify-content-center mt-3">
                        <label className='block mb-2'>Title</label>
                        <input
                        className={`text-dark deposit-input form-control col-md-12 input-field py-2`}
                        id="title"
                        name="title"
                        type="text"
                        maxLength={100}
                        data-action="grow"
                        required="required"
                        placeholder={"Enter Title"}
                        />
                        {/* Errors */}
                        {/* {errors.name && <div className='text-danger'> {errors.name} </div>} */}
                        <br/>
                    </div>
                    
                    <div className="form-group col-12 justify-content-center mt-3">
                        <label className='block mb-2'>Supplier EMail</label>
                        <input
                            className={`text-dark deposit-input form-control col-md-12 input-field py-2`}
                            id="email"
                            name="email"
                            type="email"
                            data-action="grow"
                            required="required"
                            placeholder="Enter Supplier Mail"/>
                        {/* Errors */}
                        {/* {errors.name && <div className='text-danger'> {errors.name} </div>} */}
                        <br/>
                    </div>
                    <div className="flex flex-row">
                        <div className="form-group flex flex-col pr-3 pl-0 w-50 justify-content-center mt-3">
                            <label className='block mb-2'>Primary Mobile Phone</label>
                            <input
                                className={`text-dark deposit-input form-control col-md-12 input-field py-2`}
                                id="primary-msisdn"
                                name="primaryMsisdn"
                                type="text"
                                maxLength={20}
                                data-action="grow"
                                required="required"
                                placeholder="SUpplier Primary Phone number" />
                                {/* Errors */}
                                {/* {errors.name && <div className='text-danger'> {errors.name} </div>} */}
                            </div>
                        <div className="form-group  flex flex-col w-50 justify-content-center mt-3 pl-3">
                            <label className='block mb-2'>Secondary Mobile Phone</label>
                            <input
                                className={`text-dark deposit-input form-control col-md-12 input-field py-2`}
                                id="secondary-msisdn"
                                name="secondaryMsisdn"
                                type="text"
                                maxLength={20}
                                data-action="grow"
                                placeholder="SUpplier Primary Phone number" />
                                {/* Errors */}
                                {/* {errors.name && <div className='text-danger'> {errors.name} </div>} */}
                        </div>
                    </div>
                    <div className="form-group col-12 justify-content-center mt-3">
                        <label className='block mb-2'>Address</label>
                        <input
                            className={`text-dark deposit-input form-control col-md-12 input-field py-2`}
                            id="address"
                            name="address"
                            type="text"
                            maxLength={50}
                            data-action="grow"
                            required="required"
                            placeholder="Enter Supplier Address" />
                        {/* Errors */}
                        {/* {errors.name && <div className='text-danger'> {errors.name} </div>} */}
                        <br/>
                    </div>
                    <div className="flex flex-row">
                        <div className="form-group flex flex-col w-50  justify-content-center mt-3 pr-3">
                            <label className='block mb-2'>Registration Pin</label>
                            <input
                                className={`text-dark deposit-input form-control col-md-12 input-field py-2`}
                                id="registration"
                                name="registrationPin"
                                type="text"
                                maxLength={100}
                                data-action="grow"
                                required="required"
                                placeholder="Supplier Registration Pin" />
                                {/* Errors */}
                                {/* {errors.name && <div className='text-danger'> {errors.name} </div>} */}
                        </div>
                        <div className="form-group flex flex-col w-50  justify-content-center mt-3 pl-3">
                            <label className='block mb-2'>Supplier Kra Pin</label>
                            <input
                            className={`text-dark deposit-input form-control col-md-12 input-field py-2`}
                            id="kra"
                            name="kraPin"
                            type="text"
                            maxLength={100}
                            data-action="grow"
                            required="required"
                            placeholder="Supplier Kra Pin" />
                            {/* Errors */}
                            {/* {errors.name && <div className='text-danger'> {errors.name} </div>} */}
                        </div>
                    </div>    
                    
                    <div className="form-group col-12 justify-content-center mt-3">
                        <label className='block mb-2'>Brief Description</label>
                        <textarea
                            className={`text-dark deposit-input form-control col-md-12 input-field py-2`}
                            id="description"
                            name="description"
                            data-action="grow"
                            placeholder="Enter a brief Description" />
                            {/* Errors */}
                            {/* {errors.name && <div className='text-danger'> {errors.name} </div>} */}
                            <br/>
                    </div>
                    <div className='mt-2 mb-2'>
                        <span
                            className={`p-3 rounded shadow-md border border-white-200 inline-block w-40 mr-2 bg-red-400 text-white`}
                            disabled={isLoading}> Cancel
                        </span>
                        <button className={`p-3 rounded shadow-md border border-white-200 w-50 bg-blue-500 text-white`}
                            type="submit"
                            disabled={isLoading}>
                                {isLoading ? <span>Creating Memo...</span> : <span>Continue</span>}
                        </button>
                    </div> 
                </Row>
                </form>
            </>
            )
    }



    return (
        <>
            <Modal
            {...props}
            top
            size = "lg"
            show={showmodal}
            onHide={() => setShowModal(false)}
            dialogClassName="new-memo-modal"
            aria-labelledby="contained-modal-title-vcenter">
                     <Modal.Header closeButton className="bg-blue-500 text-white text-center justify-center place-items-center">
                      <Modal.Title className="w-full font-sm text-md ">Add New Supplier</Modal.Title>
                    </Modal.Header>
                    {
                    <Modal.Body>

                        <SupplierForm />

                    </Modal.Body>
                 }
            </Modal>
        </>
    )
}

export default CreateNewSupplier;