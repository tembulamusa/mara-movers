import React, { useContext, useEffect, useCallback }from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Context } from '../../context/store';
import { getFromLocalStorage }  from  '../utils/local-storage';

import logo from '../../assets/img/logo.png';
const ProfileMenu = React.lazy(()=>import('./profile-menu'));
const HeaderLogin = React.lazy(()=>import('./top-login'));
const HeaderNav = React.lazy(()=>import('./header-nav'));

const Header = (props) => {
    const [state, dispatch] = useContext(Context);

    const loadHeader = useCallback(() => {
       console.log("Header loading state user ...", state?.user);
       if(!state?.user) {
           console.log("Will fetch user from local storage");
           let user = getFromLocalStorage("user");
           console.log("Found user in local storage", user);
           if(user) {
               dispatch({type:"SET", key:"user", payload:user});
           }
       }

    }, [state?.user])

    useEffect(() => {
        loadHeader();
    }, [loadHeader]);

    return (
       <Container className="shrink-header" id="shrink-header">
            <Row className="ck pc os app-navbar top-nav">
                <div className=" col-3">
                  <div>
                      <a className="e logo" href="/" title="Betnare">
                      <LazyLoadImage src={logo} alt="Betnare" title="Betnare" effects ="blur"/>
                      </a>
                  </div>
                </div>
                <div className="col-9" id="navbar-collapse-main">
                    { state?.user ?  <ProfileMenu /> : <HeaderLogin /> }
                </div>
            </Row>
            <Row className="second-nav ck pc os app-navbar ">
              <HeaderNav />
            </Row>
       </Container>
    )
}
export default React.memo(Header);
