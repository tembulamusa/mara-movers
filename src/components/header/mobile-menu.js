import React, {useCallback, useContext, useEffect, useState, useRef} from 'react';

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { FaBars, FaTrophy, FaSearch, FaClipboard } from "react-icons/fa";
import Dropdown from 'react-bootstrap/Dropdown';
import { faUser, faLock, faCoins } from "@fortawesome/free-solid-svg-icons";
import { formatNumber } from "../utils/betslip";
import useAnalyticsEventTracker from "../analytics/useAnalyticsEventTracker";
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import {Context} from '../../context/store';
import {getFromLocalStorage, setLocalStorage} from "../utils/local-storage";
import LiveIcon from "../../assets/svg/LIVENOW.svg";


import {
    faSearch,
    faPrint,
    faQuestionCircle,
    faTimes,
    faLaptop,
    faMagnet,
    faMagic, faInfo, faChessBoard, faDice, faHome
} from '@fortawesome/free-solid-svg-icons'
import makeRequest from "../utils/fetch-request";

import HeaderMenuToggle from './menu-toggle';
import MobileToggleMkts from './mobile-toggle-markets';

const MobileMenu = (props) => {
  const { user } = props;
  const gaEventTracker = useAnalyticsEventTracker('Navigation');
  const [state, dispatch] = useContext(Context);
  const pathname = window.location.pathname;
  const [searching, setSearching] = useState(false)
  const searchInputRef = useRef(null)
  const [matches, setMatches] = useState([])

  useEffect(() => {
        fetchMatches()
  }, [searching])

  const fetchMatches = async (search) => {
        if (search && search.length >= 3) {
            gaEventTracker('Searching')
            let method = "POST"
            let endpoint = "/v1/matches?page=" + (1) + `&limit=${10}&search=${search}`;
            await makeRequest({url: endpoint, method: method, data: []}).then(([status, result]) => {
                if (status === 200) {
                    setMatches(result?.data || result)
                }
            });
        }
   };
   const showSearchBar = () => {
       setSearching(true)
       searchInputRef.current.focus()
       gaEventTracker('Clicked on Search')
   }
   const dismissSearch = () => {
       setSearching(false)
       setMatches([])
   }

   const showAppBetslipPageFromTop = () => {
        dispatch({type: "SET", key: "betslippressedfromabove", payload: true});
   }

  return (
    <>
    <div className="top-nav-mobile">
      <div className="row">
        <div className="col-6 row">
            <div className="col-3 uppercase">
                <a href = "/"><div>
                                <FontAwesomeIcon icon={faHome} style={{fontSize:"25px"}} />
                 </div></a>
                Home
            </div>
            <div className="col-3 uppercase">
                
            <MobileToggleMkts />

            </div>

            <div className="col-3 uppercase red-color">
                <a href = "/live" className="red-color"><div><img src={LiveIcon} alt="" className="svg-menu-img-icon hi1 width-30px" /></div></a>
                live
            </div>

            <div className="col-3 uppercase">
                <a href = "/jackpot"><div><FaTrophy size={25} /></div></a>
                Jackpots
            </div>
        </div>
        <div className="col-6 row"> 
            <div className="col-3">&nbsp;</div>
            <div className="col-3 uppercase" onClick={() => showSearchBar()}>

              <div><FaSearch size={25}/></div>
              Search
              <span className={'hide2'}>Search</span>
            </div>

            <div className="col-3 uppercase" onClick={showAppBetslipPageFromTop} >
                <div className="relative-pos" ><FaClipboard size={25} />
                  <span className="top-slip-counter purple-bg">{ Object.keys(state?.betslip||{}).length ||  Object.keys(state?.jackpotbetslip||{}).length}</span>
                </div>
                Slip
            </div>

            <div className="col-3 uppercase">
              <HeaderMenuToggle user={user}/>
              PROFILE
            </div>
        </div>

        <Container id="navbar-collapse-main"
                       className={`high-first-z-index fadeIn mobile-search-input-div header-menu d-flex justify-content-center px-4 ${searching ? 'd-block' : 'd-none'}`}>
                <ListGroup as="ul" horizontal className="nav navbar-nav og ale ss text-center" style={{width:"100%",}}>
                    <div className="d-flex">
                        <div className="col-10">
                            <input type="text" placeholder={'Start typing to search for team ...'} ref={searchInputRef}
                                   onInput={(event) => fetchMatches(event.target.value)}
                                   className={'form-control input-field border-0 full-width text-white no-border-radius'}/>
                        </div>

                        <button className={'btn text-white -align-right search-close-btn'} style={{marignLeft:"10px", borderRadius:"5px"}} onClick={() => dismissSearch()}>
                            <FontAwesomeIcon icon={faTimes}/> Close
                        </button>
                    </div>
                    <div
                        className={`autocomplete-box position-fixed bg-white border-dark col-md-5 mt-1 shadow-lg text-start`}
                        onClick={() => gaEventTracker('View Search Results')}>
                        {matches.map((match, index) => (
                            <a href={`/?search=${match.home_team}`} key={index} className="primary-text-color search-result-item">
                                <li>
                                    {match.home_team}
                                </li>
                            </a>
                        ))}
                    </div>
                </ListGroup>
            </Container>
      </div>

      </div>


    </>
  );
}

export default MobileMenu;
