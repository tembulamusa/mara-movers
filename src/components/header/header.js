import React, {useEffect, useCallback, useState, useContext, useRef, Suspense} from 'react';
import { Link} from "react-router-dom"
import Row from 'react-bootstrap/Row';
import {LazyLoadImage} from 'react-lazy-load-image-component';
import {Context} from '../../context/store';
import {getFromLocalStorage, setLocalStorage} from '../utils/local-storage';
import makeRequest from '../utils/fetch-request';
import 'react-lazy-load-image-component/src/effects/blur.css';
import {Navbar} from "react-bootstrap";
import ShareModal from "../sharemodal";
import MainHeader from './main-header';
import TeamHeader from './team-header';
import BuyTicketModal from '../buy-ticket-modal';
import { MdPhoneInTalk } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Logo from '../../assets/img/logo.png';





const Header = (props) => {
    const [user, setUser] = useState(getFromLocalStorage("user"));
    const [state, dispatch] = useContext(Context);
    const {headertype, team} = props;
    
    const currentUser = getFromLocalStorage("user");
    const expand = "md";

    return (
        <>  
            <section id='top-header' className='py-2 bg-blue-600 text-white'>
                <div className='container'>
                    <div className='inline-block w-50 py-2 text-3xl'>
                        <MdPhoneInTalk className='inline-block mr-3 ' size={30}/> <span className='d-none md:inline-block'>Call Mombasa: </span>+254717506069</div>
                    <div className='inline-block w-50'>
                        <div className='float-end' id='social-networks'>
                            <Link className='hover:text-white hover:opacity-60' to={"https://www.facebook.com/profile.php?id=100094662474097"} target='_blank'><FaFacebookF className='inline-block mr-2' size={20}/></Link>
                            <Link className='hover:text-white hover:opacity-60' to="" target='_blank'><FaTwitter className='inline-block mr-2' size={20}/></Link>
                            <Link className='hover:text-white hover:opacity-60' to="https://www.instagram.com/maramovers?igsh=YzljYTk1ODg3Zg==" target='_blank'><FaInstagram className='inline-block mr-2' size={20}/></Link>
                            <Link className='hover:text-white hover:opacity-60' to="" target='_blank'><FaLinkedin className='inline-block' size={20}/></Link>
                        </div>
                    </div>
                </div>
            </section>
            <section className=''>
                <div className='container'>
                    <div className='py-2 pb-1 flex'><div className='w-60 flex-col'><img src={Logo} className='md:w-40'/> </div> <div className='w-40 flex-col text-align-right'>
                        <div className='float-end'><button className='px-3 py-2 bg-red-500 text-white my-2 rounded-md shadow'><span className='d-none md:inline-block'>Get a </span>Free Quote</button></div>
                    </div></div>
                </div>
            </section>
            <section className='bg-blue-600 text-white'>
                <div className='container flex flex-row'>
                    <div className='w-full flex-col'>
                        <Link to={"/"} className='py-2 pt-3 mr-3 inline-block hover:text-white hover:opacity-70'>Home </Link>
                        <Link to={"/about"} className='py-2 pt-3 mr-3 inline-block hover:text-white hover:opacity-70'>About </Link>
                        <Link to={"/services"} className='py-2 pt-3 mr-3 inline-block hover:text-white hover:opacity-70'>Services </Link>
                        <Link to={"/contact"} className='py-2 pt-3 mr-3 inline-block hover:text-white hover:opacity-70'>Contact Us</Link>
                    </div>
                    
                </div>
            </section>
        </>
    )
}
export default React.memo(Header);
