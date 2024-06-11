import React, {useEffect,  useState, useContext} from 'react';
import {Link, NavLink} from 'react-router-dom';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { FaBars, FaUserAlt, FaUser } from "react-icons/fa";
import Dropdown from 'react-bootstrap/Dropdown';
import {faLock, faCoins } from "@fortawesome/free-solid-svg-icons";
import { formatNumber } from "../utils/betslip";

import {Context} from '../../context/store';

import depositIcon from "../../assets/svg/deposit.svg"
import withdrawIcon from "../../assets/svg/withdraw.svg"
import appIcon from "../../assets/svg/download-app.svg"
import helpIcon from "../../assets/svg/help.svg"
import logoutIcon from "../../assets/svg/logout.svg"
import accountIcon from "../../assets/svg/message.svg"
import mybetsIcon from "../../assets/svg/my-bets.svg"
import transactionsIcon from "../../assets/svg/transactions.svg"

const HeaderMenuToggle = (props) => {
  const [user, setUser] = useState(props?.user);
  const [state, dispatch] = useContext(Context);

  useEffect(() => {
      setUser(state?.user);
  }, [state?.user])

  return (
    <>
      <Dropdown>
      <Dropdown.Toggle variant="top-menu-btn" id="dropdown-basic">
        <div><FaUser size={25} /></div>
      </Dropdown.Toggle>

      <Dropdown.Menu>


        {user && 
            <>
                <Dropdown.Item as={Link} to="/my-bets" ><img style={{width:"15px", marginRight:"10px"}} src={mybetsIcon} alt="" />MY BETS</Dropdown.Item>
                <Dropdown.Item   as={Link} to="/deposit"><img style={{width:"15px", marginRight:"10px"}} src={depositIcon} alt="" />DEPOSIT</Dropdown.Item>
                <Dropdown.Item  as={Link} to="/withdraw"><img style={{width:"15px", marginRight:"10px"}} src={withdrawIcon} alt="" />WITHDRAW</Dropdown.Item>   
                <Dropdown.Item  as={Link} to="/transactions"><img style={{width:"15px", marginRight:"10px"}} src={transactionsIcon} alt="" />TRANSACTIONS</Dropdown.Item>
            </>
        }

        <Dropdown.Item  as={Link} to="/app"><img style={{width:"15px", marginRight:"10px"}} src={appIcon} alt="" />DOWNLOAD APP</Dropdown.Item>
        <Dropdown.Item  as={Link} to="/help"><img style={{width:"15px", marginRight:"10px"}} src={helpIcon} alt="" />HELP</Dropdown.Item>
        { user 
            ? <Dropdown.Item  as={Link} to="/logout"><img style={{width:"15px", marginRight:"10px"}} src={logoutIcon} alt="" />LOGOUT</Dropdown.Item>
            : <Dropdown.Item  as={Link} to="/login"><img style={{width:"15px", marginRight:"10px"}} src={logoutIcon} alt="" />LOGIN</Dropdown.Item>
        }
      </Dropdown.Menu>
    </Dropdown>
    </>
  );
}

export default HeaderMenuToggle;
