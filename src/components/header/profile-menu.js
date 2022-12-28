import React from "react";
import { faUser, faLock, faCoins } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { formatNumber } from "../utils/betslip";
import { Link } from "react-router-dom";
import {Navbar} from "react-bootstrap";

const ProfileMenu = (props) => {
  const { user } = props;
  return (
    <>
      {user && (
        <div className="ale ss profile d-flex flex-row row  tablet-design ">
            <div className="col-md-3 profile-spacer"></div>
            <div className="{'mt-1'} col-md-2 span-change d-flex flex-column justify-content-start space-deposit">
            <Link
              to={{ pathname: "/deposit" }}
              className={"btn   "}
              style={{ fontSize: "16px", fontWeight: "bold", background:"#39b54a", borderRadius:"3px",padding:"10px 30px", width:"max-content"}}
            >
              <span className="font-tbt overflow-hidden justify-content-center  rescale">
               <span className=" space-icons"> <FontAwesomeIcon icon={faCoins} /></span> Deposit 
              </span>
            </Link>
          </div>
          
          <div className="col-md-2  d-flex flex-column right justify-content-end w-change1">
          <div>
              <span className="font-tbt py-2 px-2">Bonus  {formatNumber(user.bonus) || 0} </span>
              </div>
              <div>
              <Link to={{ pathname: "/my-bets" }} className={"btn text-white w-100 d-content"}>
                <span className="font-tbt pad-2 ">
                <span className=" space-icons"><FontAwesomeIcon icon={faCoins} /> </span>My Bets
                </span>
              </Link>
              </div>
          </div>
         

          <div className="col-md-2 d-flex flex-column right justify-content-end w-change2">
              <div>
              <span className="font-tbt py-2 flex-wrap">Balance  {formatNumber(user.balance) || 0} </span>
              </div>
              <div>
              <Link to={{ pathname: "/withdraw" }} className={"btn text-white w-100 d-content"}>
                <span className="font-tbt pad-2">
                <span className=" space-icons"><FontAwesomeIcon icon={faCoins} /> </span>Withdraw
                </span>
              </Link>
              </div>
             
          </div>

          <div className="col-md-2 d-flex flex-column nav-option-content w-change2">
            <div>
              <span className="font-tbt py-1">
              <span className=" space-icons"><FontAwesomeIcon icon={faUser} /> </span>{user?.msisdn}
              </span>
            </div>
            <div>
              <a href="/logout">
                <span className="font-tbt py-1">
                <span className=" space-icons"> <FontAwesomeIcon icon={faLock} /> </span>Logout
                </span>
              </a>
            </div>
          </div>
          
        
        </div>
      )}
    </>
  );
};

export default ProfileMenu;
