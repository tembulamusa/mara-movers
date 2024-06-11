import React, { useContext, useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { Context } from "../context/store";
import Logo from '../assets/svg/logo.svg';
import makeRequest from "./utils/fetch-request";


const BuyTicketModal = (props) => {
    const [state, dispatch] = useContext(Context);
    const [msisdn, setMsisdn] = useState(null);
    const [ticketCount, setTicketCount] = useState(1);
    const [totalPrice, setTotalPrice] = useState(0);
    const [selectedTicketType, setSelectedTicketType] = useState(null);
    const [currentTicketCount, setCurrentTicketCount] = useState(1);
    const [errorMessage, setErrorMessage] = useState(null);
    const [successfulRequest, setSuccessfulRequest] = useState(false);
    let errors = {};
    const [isRequesting, setIsRequesting] = useState(false);
    const [isFetchingEVent, setIsFetchingEVent] = useState(false);

    const onMobileChange = (ev) => {
        setMsisdn(ev.target.value);
    }


    const setTicketType = (ticketType) => {

    }

    const changeTicketNumber = (changeType) => {
        if (changeType === "decrement") {
            if (currentTicketCount > 1) {
                const newTicketCount = currentTicketCount - 1;
                setCurrentTicketCount(newTicketCount);
            }
        }

        if(changeType === "increment") {
            const newTicketCount = currentTicketCount + 1;
            setCurrentTicketCount(newTicketCount);
        }
    }


    const selectedEventDetail = (eventId) => {
        let endpoint = `event/${eventId}`;
        setIsFetchingEVent(true);
        makeRequest({url: endpoint, method: 'GET' }).then(([status, response]) => {
            
            if ([200, 201, 204].includes(status)) {
                dispatch({type: "SET", key: "selectedeventdetail", payload: response?.data});
                setIsFetchingEVent(false);

            } else {
                if (response?.message) {
                    setErrorMessage(response?.message);
                } else {
                    setErrorMessage("an error occurred");
                }
                
            }
        })
    }

    useEffect(() => {
        let newTotalPrice = currentTicketCount * state?.selectedticket?.price;

        if (newTotalPrice) {
            setTotalPrice(newTotalPrice);
        }
        
    }, [currentTicketCount, state?.selectedticket]);

    useEffect(() => {
        selectedEventDetail(state?.selectedevent?.id);
    }, [state?.selectedevent])

    const payTicket = () => {
        let params = {
            event_id: state?.selectedevent?.id,
            event_price_id: state?.selectedticket?.id,
            quantity: ticketCount,
            payment_method: 'mpesa',
            phone_number: msisdn
        }


        let endpoint = 'place_event_order';
        
        if (!ticketCount > 1 || !state?.selectedticket) {
            setErrorMessage("please check that you have selected a ticket type");
            return false;
        }

        var pattern = /^[0-9]{10}$/;
        if (!pattern.test(msisdn)){
            setErrorMessage("Wrong mobile phone");
            return false;
        }

        makeRequest({url: endpoint, method: 'POST', data: params }).then(([status, response]) => { 
            setIsRequesting(true);
            setErrorMessage(null);
            if ([200, 201, 204].includes(status)) {
                if(response?.mpesa_response == true) {
                    setSuccessfulRequest(true);
                } else {
                    setErrorMessage(response?.message)
                }
            } else {
                if (response?.message) {
                    setErrorMessage(response?.message);
                } else {
                    setErrorMessage("an error occurred while buying ticket");
                }
                
            }

        })

    }
    return (
        <>
            <Modal
            {...props}
            top
            size = "md"
            show={state?.showbuyticketmodal === true}
            onHide={() => dispatch({type:"SET", key:"showbuyticketmodal", payload:false})}
            dialogClassName="buy-ticket-modal"
            aria-labelledby="contained-modal-title-vcenter">
                    <Modal.Header closeButton className="bg-gray-200 justify-center place-items-center pb-0 pt-0">
                    <Modal.Title className="w-full font-small pb-0 pt-0">
                        <img src={Logo} width="150px"/>
                    </Modal.Title>
                    </Modal.Header>
                    {
                    <Modal.Body>

                        <div className="text-center">
                            <h1 className="font-bold mb-3">{(new Date(state?.selectedeventdetail?.event?.start_date)).toDateString()}</h1>
                            <div className="mb-3 opacity-50 capitalize">{state?.selectedeventdetail?.event?.competition}</div>
                            <div className="mb-3 capitalize" id="teams">
                                <div className='text-red-500 inline-block w-1/3'>
                                    <img style={{width:"35px"}}
                                        className={'mx-auto'}
                                        src={state?.selectedeventdetail?.event?.home_team?.logo} alt="home"/>
                                        {state?.selectedeventdetail?.event?.home_team?.name}
                                </div>
                                <div className='text-red-500 inline-block w-1/3'>
                                    <img style={{width:"35px"}}
                                        className={'mx-auto'}
                                        src={state?.selectedeventdetail?.data?.event?.away_team?.logo} alt="away"/>
                                        {state?.selectedeventdetail?.data?.event?.away_team?.name}
                                </div>

                            </div>

                            <div id="mobile-phone" className=" mb-4">
                                <input className="border border-gray-200 bg-gray-100 rounded p-2" placeholder="mobile number" onChange={(ev) => onMobileChange(ev)}/>
                                <div className="text-red-500">{errors['msisdn']?.map((error, idx) => (<div className="block">{error}</div>))}</div>
                            </div>

                            <div id="ticketType" className="my-3">
                                {state?.selectedeventdetail?.prices?.map((ticketType, idx) => (
                                    <button className={`px-3 py-1 mr-2 border border-gray-200 rounded-md inline-block ${state?.selectedticket === ticketType ? "bg-purple-500 text-white" : "bg-gray-200 text-gray-600"} ${ticketType?.status?.toLowerCase() !== "active" && "cursor-not-allowed"} `} onClick={() => dispatch({type: "SET", key: "selectedticket", payload: ticketType})} disabled = {ticketType?.status?.toLowerCase() !== "active"}>{ticketType?.name}</button>
                                ))}
                            </div>
                            <hr className="mt-2"/>
                            {errorMessage && <div className="mt-4 alert alert-danger">{errorMessage}</div>}
                            <div className="my-4 block" id="changeNumber">
                                <div className="inline-block mr-3">Number Of Tickets</div>

                                <div className="inline-block">
                                    <div className="bg-gray-200 text-gray-700 inline-block px-3 rounded-md mr-3">{currentTicketCount}</div>
                                    <div className="inline-block" id="ticketChanger">
                                        <button className="px-2 py bg-gray-200 mr-2 rounded-full font-bold" onClick={()=>changeTicketNumber("decrement")}>-</button>
                                        <button className="px-2 py bg-gray-200 rounded-full font-bold" onClick={()=>changeTicketNumber("increment")}>+</button>
                                    </div>
                                </div>

                                <div className="mb-3 mt-4" id="payTotal">
                                    <div className="inline-block mr-3">Ksh. {totalPrice}</div>
                                    <button className="shadow-sm bg-gray-300 px-3 py-1 rounded-md border border-gray-100" onClick={() => payTicket()} disabled = {isRequesting}>{isRequesting ? "requesting..." : "Buy Ticket Now"}</button>
                                </div>
                                {successfulRequest && <div className="alert alert-success">Request Sent. Please check you mobile to complete the transaction</div>}
                            </div>
                        </div>

                    </Modal.Body>
                 }
            </Modal>
        </>
    )
}

export default React.memo(BuyTicketModal);