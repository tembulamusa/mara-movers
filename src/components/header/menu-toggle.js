import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { FaBars } from "react-icons/fa";
import Dropdown from 'react-bootstrap/Dropdown';
import { faUser, faLock, faCoins } from "@fortawesome/free-solid-svg-icons";
import { formatNumber } from "../utils/betslip";

const HeaderMenuToggle = (props) => {
  const { user } = props;

  return (
    <>
      <Dropdown>
      <Dropdown.Toggle variant="top-menu-btn" id="dropdown-basic">
        <div><FaBars size={25} /></div>
        Menu
      </Dropdown.Toggle>

      <Dropdown.Menu>


        <Dropdown.Item href="/my-account">MY ACCOUNT</Dropdown.Item>
        <Dropdown.Item href="/my-bets">MY BETS</Dropdown.Item>
        <Dropdown.Item href="/deposit">DEPOSIT</Dropdown.Item>
        <Dropdown.Item href="/withdraw">WITHDRAW</Dropdown.Item>          
        <Dropdown.Item href="/transactions">TRANSACTIONS</Dropdown.Item>          
        <Dropdown.Item href="/app">DOWNLOAD APP</Dropdown.Item>
        <Dropdown.Item href="/how-to-play">HELP</Dropdown.Item>
        <Dropdown.Item href="/logout">LOGOUT</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    </>
  );
}

export default HeaderMenuToggle;
