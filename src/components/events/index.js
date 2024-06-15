import React, { useContext, useEffect, useState } from "react";
import { IoMdFootball } from "react-icons/io";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import EmptyRecordsDiv from "../utils/empty-records-div";
import makeRequest from "../utils/fetch-request";
import IsLoadingHtml from "../utils/loading.js";
import { Context } from "../../context/store.js";
import WhyUs from '../../assets/img/services/team2.jpg';
import { BiWorld } from "react-icons/bi";
import { FaUsers, FaRegLightbulb, FaHandshake } from "react-icons/fa";




const Events = (props) => {
    const [key, setKey] = useState("latest_events");
    const [fetchedGames, setFetchedGames] = useState([]);
    const [isFetchingEVents, setIsFetchingEvents] = useState(false);
    const [state, dispatch] = useContext(Context);

    const fetchEvents = (event) => {
        let endpoint = event;
        setIsFetchingEvents(true);
        
        makeRequest({url: endpoint, method: 'GET' }).then(([status, response]) => {
            if ([200, 201, 204].includes(status)) {
                setFetchedGames(response?.data?.events);
                setIsFetchingEvents(false);
            }
        })
    }

    useEffect(() => {
        fetchEvents(key)
    },[key])

    useEffect(() => {
        fetchEvents(key)
    },[])

    const buyEventTicket = (game) => {
        dispatch({type: "SET", key: "selectedevent", payload: game});
        dispatch({type: "SET", key: "showbuyticketmodal", payload: true});
    }

    
    return (
        <>
            <section className="py-3 pt-5 md:py-5 pb-2">
                <div className="container">
                    <h1 className="font-bold capitalize mb-4 text-center text-4xl ">Why Choose Us</h1>

                    <div className="text-center md:text-left">Experience the delight of having breakfast at your old house, and by evening, enjoying dinner with feet up at your new house, all without breaking a sweat!</div>
                    
                    <div className="flex-row block md:flex my-5">
                        <div className="flex-col nline-block w-full md:w-1/3 pr-3">
                            <div className="flex flex-row my-3">
                                <div id="" className="flex flex-col mr-3">
                                    <span className="rounded-full p-3 shadow-md">
                                        <BiWorld  size={30}/>
                                    </span>
                                </div>
                                <div className="flex flex-col">
                                    <h1 className="text-gray-600 font-bold">Global Know-how</h1>
                                    <div className="mb-4">
                                        Whether by air or sea, Mara movers ensures proper packing to international standards, handling and safe delivery to final destination.
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-row my-3">
                                <div id="" className="flex flex-col mr-3">
                                    <span className="rounded-full p-3 shadow-md">
                                        <FaHandshake  size={30}/>
                                    </span>
                                </div>
                                <div className="flex flex-col">
                                    <h1 className="text-gray-600 font-bold">Experience</h1>
                                    <div className="mb-4">
                                        With over 10 years of experience in the relocation business and having done over 40,000 moves. We are well equipped to handle any relocation situation.                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex-col nline-block w-full md:w-1/3 pr-3">
                            <div className="flex flex-row my-2">
                                <div id="" className="flex flex-col mr-3">
                                    <span className="rounded-full p-3 shadow-md">
                                        <FaUsers  size={30}/>
                                    </span>
                                </div>
                                <div className="flex flex-col">
                                    <h1 className="text-gray-600 font-bold">Dedicated Teams</h1>
                                    <div className="mb-4">
                                    Mara movers is committed to helping our clients reach their goals, through personalized solutions for great experiences.                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-row my-3">
                                <div id="" className="flex flex-col mr-3">
                                    <span className="rounded-full p-3 shadow-md">
                                        <FaRegLightbulb  size={30}/>
                                    </span>
                                </div>
                                <div className="flex flex-col">
                                    <h1 className="text-gray-600 font-bold">Focus On Customer</h1>
                                    <div className="">
                                    Our strong sense of identification with client projects means that we are constantly striving to ensure 100% client satisfaction.                                </div>
                                </div>
                            </div>

                        </div>
                        
                        <div className="flex-col nline-block w-full md:w-1/3 pr-3">
                        
                                <img src={WhyUs} className="flex flex-row rounded border border-gray-200 p-1"/>
                            
                        </div>
                    </div>
                    
                </div>
            </section>
        </>
    )
}

export default React.memo(Events)