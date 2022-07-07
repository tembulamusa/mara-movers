import React from 'react';
import {faUser, faLock, faCoins} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {formatNumber} from "../utils/betslip";

const ProfileMenu = (props) => {
    const {user} = props;
    return (
        <>
            {user &&
                <div className="ale ss profile d-flex flex-row row ">
                    <div className="col d-flex flex-column right justify-content-end">
                        <div>
                            <button className={'btn text-white'}>
                                <span><FontAwesomeIcon icon={faCoins}/> Withdraw</span>
                            </button>
                            <button className={'btn text-white'}>
                                <span><FontAwesomeIcon icon={faCoins}/> My Bets</span>
                            </button>
                        </div>
                        <div className={'mt-1'}>
                            <button className={'btn text-white btn-outline-warning'}>
                                <span><FontAwesomeIcon icon={faCoins}/> Deposit Funds</span>
                            </button>
                        </div>
                    </div>
                    <div className="row d-flex flex-row col-md-5">
                        <div>
                            <div className="col">Balance KES {formatNumber(user.balance) || 0} </div>
                            <div className="col">Bonus KES {formatNumber(user.bonus) || 0} </div>
                        </div>
                    </div>
                    <div className="col-md-3 d-flex flex-column">
                        <div>
                            <span><FontAwesomeIcon icon={faUser}/> {user?.msisdn}</span>
                        </div>
                        <div>
                            <a href="/logout">
                                <span>
                                    <FontAwesomeIcon icon={faLock}/> Logout
                                </span>
                            </a>
                        </div>
                    </div>
                </div>

            }
        </>

    )
}


export default ProfileMenu;
