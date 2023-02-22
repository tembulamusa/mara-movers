import React, {useState, useEffect, useContext, useCallback} from 'react';
import {useParams} from 'react-router-dom';
import BetslipSubmitForm from './betslip-submit-form';
import {Context} from '../../context/store';
import {
    removeFromSlip,
    removeFromJackpotSlip,
    getBetslip,
    getJackpotBetslip,
} from '../utils/betslip';

import {
    setLocalStorage
} from '../utils/local-storage';
import PerfectScrollbar from 'react-perfect-scrollbar';
import CompanyInfo from "./company-info";
import makeRequest from '../utils/fetch-request';

const clean_rep = (str) => {
    str = str.replace(/[^A-Za-z0-9\-]/g, '');
    return str.replace(/-+/g, '-');
}

const BetSlip = (props) => {
    const {jackpot, betslipValidationData, jackpotData} = props;
    const [betslipKey, setBetslipKey] = useState("betslip");
    const [betslipsData, setBetslipsData] = useState(null);
    const [state, dispatch] = useContext(Context);
    const { code } = useParams();

    const [totalOdds, setTotalOdds] = useState(1);
    const [inputShareCode, setInputShareCode] = useState();

    const fetchSharedBetslip = useCallback((code) => {
        let endpoint = "/v1/share?code=" + code
        makeRequest({url: endpoint, method: "GET", data: null}).then(([status, result]) => {
            if (status == 200) {
               //load betslip
                if(result?.betslip) {
                    setLocalStorage("betslip",result?.betslip);
                    setBetslipsData(result?.betslip);
                    dispatch({type: "SET", key: betslipKey, payload: result?.betslip});
                }
            }
        });
    }, [code])


   const handleCodeInputChange = (event) => {
       setInputShareCode(event.target.value);
    };

    const loadBetslipFromCode = () => {
        if(inputShareCode) {
            fetchSharedBetslip(inputShareCode); 
        }
    }

    useEffect(() => {
        if(code){
            fetchSharedBetslip(code);
        }
    }, [fetchSharedBetslip])

    //initial betslip loading
    const loadBetslip = useCallback(() => {
        if (!betslipsData) {
            let b = jackpot === true
                ? getJackpotBetslip()
                : getBetslip();
            setBetslipsData(b);
        }
    }, []);

    useEffect(() => {
        loadBetslip();
    }, [loadBetslip]);


    useEffect(() => {
        if (state[betslipKey]) {
            setBetslipsData(state[betslipKey]);
        }
    }, [state[betslipKey]]);

    //Handle db validation of betslip
    const validateBetslipwithDbData = useCallback(() => {
        if (betslipValidationData && betslipsData) {
            let clone_slip = betslipsData;
            Object.entries(betslipValidationData).forEach(([key, slipdata]) => {
                let match_id = slipdata.match_id;
                let slip = clone_slip[match_id];
                if (slip) {
                    if (slipdata.odd_active !== 1) {
                        slip.comment = 'Option not active for betting';
                        slip.disable = true;
                    } else if (slipdata.market_active === 0 ||
                        (slipdata.market_active !== 'Active' && slipdata.market_active !== 1)) {
                        slip.comment = 'Betting on this market is '
                            + (slipdata.market_active === 0 ? "suspended" : slipdata.market_active);
                        slip.disable = true;
                    } else if (slipdata.event_status === 'Suspended'
                        || slipdata.event_status === 'Deacticated'
                        || slipdata.event_status === 'Ended'
                        || slipdata.event_status === 'Abandoned'
                        || slipdata.event_status === 'Finished') {
                        slip.comment = 'This event is  ' + slipdata.event_status;
                        slip.disable = true;
                    } else if (slipdata.active !== 1) {
                        slip.comment = 'Market not active for betting';
                        slip.disable = true;
                    } else if (slip.odd_value !== slipdata.odd_value) {
                        slip.prev_odds = slip.odd_value;
                        slip.odd_value = slipdata.odd_value;
                        slip.comment = 'The odds for this event have changed';
                        slip.disable = false;
                    } else {
                        if (slip.disable !== false) {
                            slip.comment = null;
                        }
                        slip.disable = false;
                    }
                    clone_slip[match_id] = slip;
                }
            });
            dispatch({type: "SET", key: betslipKey, payload: clone_slip});
        }
    }, []);

    useEffect(() => {
        validateBetslipwithDbData();
    }, [validateBetslipwithDbData]);

    //betslip update
    const updateBetslip = useCallback(() => {
        if (betslipsData) {
            let odds = Object.values(betslipsData).reduce((previous, {odd_value}) => {
                return previous * odd_value;
            }, 1);
            setTotalOdds(odds);
        }
    }, [betslipsData]);

    useEffect(() => {
        updateBetslip();
    }, [updateBetslip]);

    // betslip key watch
    const setJackpotSlipkey = useCallback(() => {
        if (jackpot === true) {
            setBetslipKey("jackpotbetslip");
        }
    }, [jackpot]);

    useEffect(() => {
        setJackpotSlipkey();
    }, [setJackpotSlipkey]);

    const handledRemoveSlip = (match) => {
        let betslip = jackpot !== true
            ? removeFromSlip(match.match_id)
            : removeFromJackpotSlip(match.match_id);

        let match_selector = match.match_id + "_selected";
        let ucn = clean_rep(
            match.match_id
            + "" + match.sub_type_id
            + (match.bet_pick)
        );

        setBetslipsData(betslip);

        dispatch({type: "SET", key: betslipKey, payload: betslip});
        dispatch({type: "SET", key: match_selector, payload: "remove." + ucn});
    }

    return (
        <div className="bet-body text-white">
            <div className="flow betslip-body" style={{maxHeight: "35vh", overflowY: "auto"}}>
                <ul>
                    { Object.keys(betslipsData || {}).length === 0 &&
                       <li className="bet-option hide-on-affix" key="no-slip-ai"
                          style={{height:"30px",margin:"10px 0px 5px 0px", borderBottom:"none", padding:"0px 2px"}}>
                         <div className="row" style={{margin:0}}>
                            <div className="col-9" style={{padding:0}}>
                            <input  type="text" name="sharecode"  placeholder="Code"  
                                onChange={handleCodeInputChange}
                                style={{border:"1px solid #ddd", borderRadius:"2px", margin:"0px 4px 0px 0px", width:"99%",height:"30px"}}/>
                            </div>
                            <div className="col-3" style={{padding:0}}>
                                <button className="btn-default biko-blue" style={{width:"100%", padding:"0px", fontSize:"10px"}} onClick={loadBetslipFromCode}>Load Slip</button>
                            </div>
                          </div>
                       </li>
                    } 
                    {Object.entries(betslipsData || {}).map(([match_id, slip]) => {
                        let odd = slip.odd_value;
                        let no_odd_bg = odd === 1 ? '#f29f7a' : '';

                        return (
                            <li className={`bet-option hide-on-affix ${slip?.disable ? 'warn' : ''}`} key={match_id}
                                style={{background: no_odd_bg}}>

                                <div className="bet-cancel">
                                    <input id={slip.match_id} type="submit" value="X"
                                           onClick={() => handledRemoveSlip(slip)}/>
                                </div>
                                
                                <div className="row">
                                    <div className="bet-value">{`${slip.home_team} vs ${slip.away_team}`}
                                        <br/><span className="sp_sport"></span>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="bet-value">
                                        <span className="dark-primary-text">{slip.odd_type}</span>
                                    </div>
                                </div>
                                <div className="bet-pick">Pick: {slip.bet_pick}
                                    <span className="bet-odd">{slip.odd_value}
                                        {slip.odd_value === 1 &&
                                            (<span style={{color: "#cc0000", fontSize: "11px", display: "block"}}>Market Disabled</span>)
                                        }
                            </span>
                                </div>
                                <div className="row">
                                    <div className="warn">{slip?.comment} </div>
                                </div>

                            </li>)
                    })
                    }
                </ul>
            </div>
            <div className="bottom">
                <BetslipSubmitForm
                    jackpotData={jackpotData}
                    totalOdds={totalOdds}
                    betslip={betslipsData}
                    setBetslipsData={setBetslipsData}
                    totalGames={betslipsData
                        ? Object.keys(betslipsData).length : 0}
                    jackpot={jackpot}
                />
            </div>
        </div>
    )
}
export default React.memo(BetSlip);
