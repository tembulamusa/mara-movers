import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import {faFacebook, faInstagram, faTwitter, faYoutube} from "@fortawesome/free-brands-svg-icons"


const Footer = (props) => {

    return (
        <footer className="footer-custom">
            <div className="row">
                <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 text-white">
                    <h5>BETNARE</h5>
                    <ul>
                        <li className="">
                            P.O.BOX 00100 NAIROBI KENYA
                        </li>
                        <li className="">
                            <a href="mailto:care@ke.betnare.com">
                                <FontAwesomeIcon icon={faEnvelope}/> info@betnare.com
                            </a>
                        </li>
                        <li className="footer-icon">
                            <a href="https://www.facebook.com/BetnareKenya">
                                <FontAwesomeIcon icon={faFacebook}/> Facebook
                            </a>
                        </li>
                        <li className="footer-icon">
                            <a href="https://twitter.com/betnare">
                                <FontAwesomeIcon icon={faTwitter}/> Twitter
                            </a>
                        </li>
                        <li className="footer-icon">
                            <a href="https://www.youtube.com/user/betnare">
                                <FontAwesomeIcon icon={faYoutube}/> YouTube
                            </a>
                        </li>
                        <li className="footer-icon">
                            <a href="https://instagram.com/betnare">
                                <FontAwesomeIcon icon={faInstagram}/> Instagram
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
                    <h5>TERMS AND CONDITIONS</h5>
                    <ul>
                        <li className="">
                            <a href="/terms-and-conditions">Terms and Conditions</a>
                        </li>
                        <li className="">
                            <a href="/responsible-gambling">Responsible Gambling</a>
                        </li>
                        <li className="">
                            <a href="/privacy-policy">Privacy Policy</a>
                        </li>
                        <li className="">
                            <a href="/cookie-policy">Cookie Policy</a>
                        </li>
                        <li className="">
                            <a href="/how-to-play">How To Play</a>
                        </li>
                    </ul>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
                    <h5>LEGAL</h5>
                    <ul>
                        <li className="text-danger">
                            You must be 18 Years+ to use this website.
                        </li>
                        <li className="">
                            <a href="/dispute-resolution">Dispute Resolution</a>
                        </li>
                        <li className="">
                            <a href="/anti-money-laundering">Anti-money Laundering</a>
                        </li>
                    </ul>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                    <h5>LICENSING</h5>
                    <hr/>
                    <p>
                        We are licensed and regulated by the Betting Control and Licensing
                        Board BCLB 0000397
                    </p>
                </div>
            </div>
            <div className="container" id="navbar-collapse-main">
                <div className="footer-bottom text-center">
                    Copyright &copy; {new Date().getFullYear()} All rights Reserved.
                </div>
            </div>
        </footer>
    )
}

export default Footer
