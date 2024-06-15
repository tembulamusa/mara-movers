import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
// import {FaFacebook, FaInstagram, faTwitter, faYoutube} from "@fortawesome/free-brands-svg-icons"
import { Link } from 'react-router-dom';
import { RiFacebookBoxLine } from "react-icons/ri";
import Logo from '../../assets/img/logo.png';
import Storage from '../../assets/img/posts/storage.jpg';
import PostConstruction from '../../assets/img/posts/construction.jpg';
import Tips from '../../assets/img/posts/tips.jpg';
import { CiMail } from "react-icons/ci";
import { FaPhoneAlt, FaWhatsapp, FaMapMarkerAlt, FaTwitter, FaInstagram } from "react-icons/fa";





const Footer = (props) => {

    return (
        <section className="mt-4 text-white" style={{background: "#535357"}}>
            <section className='py-4 text-white' style={{background: "#313133"}}>
                <div className='container text-center md:text-left'>
                    <div className='w-full md:w-2/3 inline-block'>
                        <h1 className='font-bold capitalize text-2xl'>Get the best professional moving services in Kenya.</h1>
                        <p>Highly trained staff, latest technology and 100% satisfaction guaranteed</p>
                    </div>
                    <div className='w-full py-4 md:py-0 md:w-1/3 inline-block text-center'>
                        <button className='block md:flex rounded-md bg-red-500 p-3 px-5 font-bold text-white w-full text-center mx-auto md:float-end'>Get Started</button>
                    </div>
                </div>
            </section>

            <section className='' id='site-sumary'>
                <div className='container my-4 block text-center md:text-left md:flex flex-row'>
                    <div className='w-full md:w-3/12 flex-col pr-3 md:text-left border-b border-gray-300 mb-3 md:border-none md'>
                        <img src={Logo} className='w-60'/>
                        <div className='my-3'>
                            Experience the delight of having breakfast at your old house, and by evening, enjoying dinner with feet up at your new house, all without breaking a sweat!
                            <div>Follow us</div>
                        </div>

                    </div>
                    <div className='w-full md:w-2/12 flex-col px-2 text-left border-b border-gray-300 mb-3'>
                        <h1 className='text-2xl capitalize font-bold mb-3'>Useful links</h1>
                        <ul className='list-disc leading-8 font-bol'>
                            <li className='leading-5 mb-3'>Domestic and Inter-county house moving</li>
                            <li className='leading-5 mb-3'>Office Moving and Relocation</li>
                            <li className='leading-5 mb-3'>Pwani Conso</li>
                            <li className='leading-5 mb-3'>International Moving and Relocation</li>
                            <li className='leading-5 mb-3'>Cleaning and Pest Control</li>
                        </ul>
                    </div>
                    <div className='w-full text-left md:w-4/12 flex-col px-2 border-b border-gray-300 mb-3'>
                        <h1 className='text-2xl capitalize font-bold mb-3'>Recent Posts</h1>
                        <ul className='dis leading-8 font-bol'>
                            <li className='leading-5 mb-2 flex'>
                                <img src={Storage} className='w-20 mr-3 inline-block'/>
                                <div className='inline-block w-70'>
                                    <div>Mara Movers the #1 Secure Storage Solutions Provider in Mombasa</div>
                                    <span></span>
                                </div>
                            </li>
                            <li className='leading-5 mb-2 flex'>
                                <img src={PostConstruction} className='w-20 mr-3 inline-block'/>
                                <div className='inline-block w-70'>
                                    <div>2 Reasons Why Post-Construction Clean-up is Important</div>
                                    <span></span>
                                </div>
                            </li>
                            <li className='leading-5 mb-2 flex'>
                                <img src={Tips} className='w-20 mr-3 inline-block'/>
                                <div className='inline-block w-70'>
                                    <div>New Tips to Make Moving in Nairobi Easier with the #1 Moving Company, mara Movers</div>
                                    <span></span>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className='w-full text-left md:w-3/12 flex-col px-2'>
                        <h1 className='text-2xl capitalize font-bold mb-3'>Contact Information</h1>
                        <ul className='dis leading-8 font-bol'>
                            <li className='leading-5 mb-2 flex'>
                                <FaMapMarkerAlt size={30} className='w-20 mr-3 inline-block text-purple-500' />
                                <div className='inline-block w-70'>
                                    <div>Mombasa - Mlaleo next to Saidia Fatma Hospital</div>
                                    <span></span>
                                    </div>
                            </li>

                            <li className='leading-5 mb-2'>
                                <CiMail size={30} className='w-20 mr-3 inline-block text-purple-500' />
                                <div className='inline-block w-70'>
                                    <div>Email: - info@maramovers.co.ke</div>
                                    <span></span>
                                    </div>
                            </li>

                            <li className='leading-5 mb-2'>
                                < FaPhoneAlt size={30} className='w-20 mr-3 inline-block text-purple-500' />
                                <div className='inline-block w-70'>
                                    <div>Phone: - 254717506069</div>
                                    <span></span>
                                    </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className='' style={{background: "#313133"}}>
                <div className="container text-left py-3">
                    <div className="inline-block uppercase w-full md:w-1/3">
                        
                        <Link to={"/"} className='mr-3 opacity-70 hover:opacity-100'>Home</Link>
                        <Link to={"/contact-us"} className='mr-3 opacity-70 hover:opacity-100'>Contact Us</Link>
                        <Link to={"/about"} className='mr-3 opacity-70 hover:opacity-100'>About</Link>
                        <Link to={"/services"} className='mr-3 opacity-70 hover:opacity-100'>Services</Link>
                    </div>

                    <div className="inline-block w-full pt-2 md:w-1/3 text-center">
                        <Link to={"https://www.instagram.com/maramovers?igsh=YzljYTk1ODg3Zg=="} target='_blank' className='mr-2 opacity-70 hover:opacity-100 ' ><FaInstagram className='inline-block' size={30}/></Link>
                        <Link to={"https://www.facebook.com/profile.php?id=100094662474097"} target="_blank" rel="noopener noreferrer" className='mr-2 opacity-70 hover:opacity-100 '><RiFacebookBoxLine className='inline-block' size={30}/></Link>
                        <Link to={"/#"} className='mr-2 opacity-70 hover:opacity-100'><FaTwitter className='inline-block' size={30}/></Link>
                    </div>

                    <div className="pt-2 inline-block w-full md:w-1/3 opacity-80">
                        &copy;2020 maramovers.co.ke <span className='opacity-60'>A RT Systems Site</span>
                    </div>
                    
                    <a className='fixed bottom-5 left-3 bg-green-500 text-white p-1 px-3 rounded-3xl text-xl' href={ `https://wa.me/254717506069?text=Hello%Maramovers.%20I%20would%20like%you%20to%20help.` } target="_blank">
                        <FaWhatsapp size={25} className='mr-3 inline-block' />
                        chat Now
                    </a>
                </div>
            </section>
        </section>
    )
}

export default Footer
