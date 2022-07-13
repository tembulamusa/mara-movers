import React from "react";
import 'react-accessible-accordion/dist/fancy-example.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDownload} from "@fortawesome/free-solid-svg-icons";
import DownloadLink from "react-download-link";

const Header = React.lazy(() => import('../../header/header'));
const SideBar = React.lazy(() => import('../../sidebar/awesome/Sidebar'));
const Footer = React.lazy(() => import('../../footer/footer'));
const Right = React.lazy(() => import('../../right/index'));
const downloadAPKFile = React.lazy(() => import('../../../assets/betnare.apk'));


const MobileApp = () => {

    const getDownloadFile = () => {
       return downloadAPKFile; 
    }

    return (
        <>
            <Header/>
            <div className="amt">
                <div className="d-flex flex-row justify-content-between">
                    <SideBar loadCompetitions/>
                    <div className="gz home" style={{width: '100%'}}>
                        <div className="homepage">
                            <div
                                className='col-md-12 primary-bg p-4 text-center d-flex flex-row justify-content-between sticky-top'>
                                <h4 className="inline-block">
                                    BETNARE APP
                                </h4>
                                
                                <DownloadLink 
                                  className="btn btn-primary btn-lg mb-5"
                                  label="Download App"
                                  filename="betnare.apk"
                                  exportFile={() => getDownloadFile()}
                                />
                            </div>
                            <div className="col-md-12 mt-2 text-white p-2 ">
                                <p>
                                    Do you want to play on your phone at your convenience? Download our mobile app
                                    by clicking on the download app button below.
                                </p>
                            </div>
                            <div className="col-md-12 mt-2 text-white accordion-container text-center">

                            </div>
                        </div>
                    </div>
                    <Right/>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default MobileApp
