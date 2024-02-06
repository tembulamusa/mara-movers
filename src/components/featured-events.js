import React, { useContext, useEffect, useState } from "react";
import { Context } from "../context/store";
import makeRequest from "./utils/fetch-request";
import Messenger from '../assets/img/services/messenger.jpg'
import Office from '../assets/img/services/house.jpg'
import Courier from '../assets/img/services/pest.png'


const FeaturedEvents = (props) => {
    const [state, dispatch] = useContext(Context);
    const [events, setEvents] = useState([]);
    const [errorMessage, setErrorMessage] = useState(null);

    const buyGameTicket = (game) => {
        dispatch({type: "SET", key: "selectedevent", payload: game});
        dispatch({type: "SET", key: "showbuyticketmodal", payload: true});
    }

    const getEvents = () => {
        let endpoint = "upcoming_events";

        makeRequest({url: endpoint, method: 'GET' }).then(([status, response]) => {
            
            if ([200, 201, 204].includes(status)) {
                setEvents(response?.data?.events);

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
        getEvents();
    }, []);

    
    return (
        <section id='next-games' className="bg-gray-200 py-5">
                <div className='container'>
                    <h1 className="my-2 py-3 text-4xl text-blue-600 font-bold text-center">
                        Our Services
                    </h1>

                    <div className="py-3 my-2">
                        Mara Movers takes the pressure out of your move and ensures the job gets done right. We are a reliable, trusted and competent moving services company here to help you shoulder the load of a residential or commercial move. Choosing the right moving company is the key to a smooth and successful move without complications or delays. That is what you get when you choose our moving services.
                    </div>
                </div>

                <div className='container relative w-full'>                    
                    <div className='w-1/3 pr-4 mt-2 inline-block'>
                        <div className="border border-gray-400 p-3 shadow-sm text-center bg-gray-100 rounded">
                            <div className="text-center">
                                <img src={Messenger} alt="house-moving"  className="mx-auto rounded-full w-20"/>
                            </div>
                            <div className="text-2xl capitalize my-3 font-bold">Domestic and Inter-County Moving</div>
                            <div className="py-2">
                                Our house moves team handles everything from packing to final arrangement at your new house, we take the anxiety out of moving.
                            </div>
                        </div>
                    </div>

                    <div className='w-1/3 pr-4 mt-2 inline-block'>
                        <div className="border border-gray-400 p-3 shadow-sm text-center bg-gray-100 rounded">
                            <div className="text-center">
                                <img src={Office} alt="house-moving"  className="mx-auto rounded-full w-20"/>
                            </div>
                            <div className="text-2xl capitalize my-3 font-bold">Internal and Inter-county Office Moving</div>
                            <div className="py-2">
                                We provide high quality custom moving solutions at affordable prices. Call us or fill the free quote form to get a free estimate.
                            </div>
                        </div>
                    </div>

                    <div className='w-1/3 pr-4 mt-2 inline-block'>
                        <div className="border border-gray-400 p-3 shadow-sm text-center bg-gray-100 rounded">
                            <div className="text-center">
                                <img src={Courier} alt="house-moving"  className="mx-auto rounded-full w-20"/>
                            </div>
                            <div className="text-2xl capitalize my-3 font-bold">High-quality Professional Courier Services</div>
                            <div className="py-2">
                                A Courier service app by Mara Movers offering affordable, reliable and efficient parcel delivery within Nairobi.
                            </div>
                        </div>
                    </div>
                </div>

            </section>
    )
}

export default React.memo(FeaturedEvents)