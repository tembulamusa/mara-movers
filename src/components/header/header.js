import React, {useEffect, useCallback, useState, useContext, useRef} from 'react';
import {useNavigate} from "react-router-dom"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import {LazyLoadImage} from 'react-lazy-load-image-component';
import {Context} from '../../context/store';
import {getFromLocalStorage} from '../utils/local-storage';
import {ToastContainer} from 'react-toastify';
import makeRequest from '../utils/fetch-request';
import {setLocalStorage} from '../utils/local-storage';
import 'react-lazy-load-image-component/src/effects/blur.css';

import logo from '../../assets/img/logo.png';
import {Navbar, Nav, Offcanvas} from "react-bootstrap";
import SideBar from "../sidebar/awesome/Sidebar";
import {Menu, MenuItem, ProSidebar, SidebarContent, SidebarHeader, SubMenu} from "react-pro-sidebar";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft, faArrowRight} from "@fortawesome/free-solid-svg-icons";
import SidebarMobile from "../sidebar/awesome/SidebarMobile";

const ProfileMenu = React.lazy(() => import('./profile-menu'));
const HeaderLogin = React.lazy(() => import('./top-login'));
const HeaderNav = React.lazy(() => import('./header-nav'));
const MobileLogin = React.lazy(() => import('./mobile-login-link'));
const MobileToggleMkts = React.lazy(() => import('./mobile-toggle-markets'));

const Header = (props) => {
    const [user, setUser] = useState(getFromLocalStorage("user"));
    const [, dispatch] = useContext(Context);
    const history = useNavigate();
    const containerRef = useRef();
    const {current} = containerRef;


    const NotifyToastContaner = () => {
        return <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
        />
    };
    const updateUserOnHistory = useCallback(() => {
        if (!user) {
            return false;
        }
        let endpoint = "/v1/balance";
        let udata = {
            token: user.token
        }
        makeRequest({url: endpoint, method: "post", data: udata}).then(([_status, response]) => {
            if (_status == 200) {
                let u = {...user, ...response.user};
                setLocalStorage('user', u);
                setUser(u)
                dispatch({type: "SET", key: "user", payload: user});
            }
        });

    }, [current]);

    const updateUserOnLogin = useCallback(() => {
        dispatch({type: "SET", key: "user", payload: user});
    }, [user?.msisdn, user?.balance]);


    useEffect(() => {
        updateUserOnHistory()
    }, [updateUserOnHistory])


    useEffect(() => {
        updateUserOnLogin()
    }, [updateUserOnLogin])

    const expand = "md"
    return (
        <>
            <Navbar expand="md" className="mb-0 ck pc os app-navbar top-nav" fixed="top" variant="dark">
                <Container fluid className={'d-flex justify-content-between mobile-change'}>
                    <Row style={{width: "100%"}}>
                    <div className="col-3">
                        <Navbar.Brand href="/" className="e logo align-self-start co4" title="Bikosports">
                            <div className="">
                                <div>
                                    <LazyLoadImage src={logo} alt="Bikosports" title="Bikosports" effects="blur"/>
                                </div>
                            </div>
                        </Navbar.Brand>
                    </div>
                    <div className="col-9 change-size" id="navbar-collapse-main">
                        <div className="col-sm-12 disable-ipad d-none d-md-block">
                            {user ? <ProfileMenu user={user}/> : <HeaderLogin setUser={setUser}/>}
                        </div>
                        {/*For the mobile*/}
                        <div className="vissible-mobile d-lg-none right enable-ipad d-lg-none d-md-none">
                            {user ? "" : <MobileLogin/>}
                        </div>

                    </div>
                    { /* Mobile version user profile */}
                    <div className="vissible-mobile small-mobile d-lg-none d-md-none col-12">
                        {user ? <ProfileMenu user={user}/> : ""}
                        
                    </div>
                   </Row>
                    <Row className="second-nav ck pc os app-navbar app-header-nav">
                        <HeaderNav/>
                    <div className="col-sm-3 col-3 vissible-mobile d-lg-none float-end header-navigation" id="header">
                        {/* Add menus for the mobile*/}

                        <div className="menu-list">

                            <a href="/" className="menu-item active">Home</a>
                            <a href="/live" className="menu-item live">Live</a>
                            <a href="/jackpot" className="menu-item">Jackpot</a>
                            <a href="#" className="menu-item"><MobileToggleMkts /></a>
                        </div>
                         
                        
                    </div>

                    </Row>


        { /** <Navbar.Offcanvas
                        style={{width: "100% !important", height: "100%"}}
                        className='off-canvas background-primary p-0'
                        id={`offcanvasNavbar-expand-${expand}`}
                        aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                        placement="start">
                        <Offcanvas.Header closeButton className='text-white'>
                            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                <div className="col-3">
                                    <div>
                                        <LazyLoadImage src={logo} alt="Bikosports" title="Bikosports" effects="blur"/>
                                    </div>
                                </div>
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <SidebarMobile/>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas> */}
                </Container>
            </Navbar>
        </>

    )
}
export default React.memo(Header);
