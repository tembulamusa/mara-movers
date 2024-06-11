import React, {useEffect, useContext} from "react";
import Logo from '../../assets/svg/logo.svg';
import { Link } from "react-router-dom";
import { FaSearch, FaTrash } from "react-icons/fa";
import { Context } from "../../context/store";



const MainHeader = props => {
    const [state, dispatch] = useContext(Context);
    return (
        <>
            <div className="flex mt-3">
                <div id="logo" className="flex flex-col w-20">
                    <img src={Logo} width="150px"/>
                </div>
                <div id="menu" className="menu flex w-60 text-align-right uppercase">
                    <Link to="/" className="item py-2">FKF</Link>
                    <Link to="/" className="item py-2">FKF WPL</Link>
                    <Link to="/" className="item py-2">NHL</Link>
                    <Link to="/" className="item py-2">MLB</Link>
                    <Link to="/" className="item py-2">MLB</Link>
                    <Link to="/" className="item py-2">SOccer</Link>
                    <Link to="/" className="item py-2">Fantasy</Link>
                    <Link to="/" className="item py-2">Nascar</Link>
                    
                </div>
                <div id="auth" className="w-20 menu">
                    <FaSearch className="inline-block mr-3"/>
                    <Link to="/" className="bg-white rounded-3xl px-4 py-1 text-gray-700 item uppercase">Sign in</Link>
                </div>
            </div>            
        </>
    )
}


export default React.memo(MainHeader);