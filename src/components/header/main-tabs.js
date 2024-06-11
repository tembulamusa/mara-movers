import React, {useState, useEffect, useContext, useCallback} from 'react';
import {useParams, Link} from 'react-router-dom'
import {Row, Col, Dropdown, Form} from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import MarketFilter from "../filters/MarketFilter";
import {forEach} from "react-bootstrap/ElementChildren";
import LiveIcon from "../../assets/svg/LIVENOW.svg";
import MostLikedIcon from "../../assets/svg/MOSTLIKEDOPTIONS.svg";

const MainTabs = (props) => {
    const {tab, fetching} = props;

    return (
        <div>
            <div className="full-mobile filter-groups transparent-buttons">

                <div className="filter-group-icon">
                    <Link  to="/highlights"className={`uppercase btn-secondary ${tab === 'highlights' && 'home-tab-active'}`} >
                           <div style={{display:"flex", marginLeft:"0px"}}><div style={{width:"20px", height:"20px", marginRight:"3px"}}>
                           <img src={MostLikedIcon} alt="" /> </div> <div>Mechi Kali </div></div>
                   </Link>
                </div>
                <div className="filter-group-icon">
                        <Link to ="/upcoming" className={`uppercase btn-secondary ${tab === 'upcoming' && 'home-tab-active'}`} 
                            >Mechi Za Leo 
                       </Link>
                </div>
                <div className="filter-group-icon">
                        <Link to="/tomorrow" className={`uppercase btn-secondary ${tab === 'tomorrow' && 'home-tab-active'}`}
                            >Mechi zijazo 
                      </Link>
                </div>
                
                <div className="filter-group-icon live-icon">
                        <Link style={{color:"red"}} to="/live" className={`uppercase btn-secondary ${tab === 'live' && 'home-tab-active'}`} style={{padding:"0", display:"block", paddingRight:"10px"}}
                            >
                               <div style={{display:"flex", marginLeft:"5px", color:"red"}}>
                                <div style={{width:"20px", height:"20px", marginRight:"5px"}}>
                                  <img src={LiveIcon} alt="" />
                               </div> 
                             <div>Live Now</div>
                         </div>
                     </Link>
                </div>
            </div>
        </div>
    )

}

export default MainTabs;
