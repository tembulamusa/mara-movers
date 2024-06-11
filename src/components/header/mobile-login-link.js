// import React, {useContext, useEffect, useCallback, useState, useRef} from "react";
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';

const MobileLogin = (props) => {

    return (
    	<>
    	<div className="right-text reg-login" style={{padding: '20px'}}>

    	    <Link to="/login" className="bold white-text" style={{paddingRight: '20px', color:'#ffffff'}}>LOGIN </Link>
    	
    		<Link className="cg login-button signup-btn btn" to="/signup">REGISTER</Link>
    	</div>
    	</>
	)
}

export default MobileLogin;
