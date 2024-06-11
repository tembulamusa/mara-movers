import React, {useContext, useEffect, useState, useRef} from 'react';
import { Link } from 'react-router-dom';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import {Context} from '../../context/store';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
    faSearch,
    faPrint,
    faQuestionCircle,
    faTimes,
    faLaptop,
    faClock,
    faMagnet,
    faMagic, faInfo, faChessBoard, faDice
} from '@fortawesome/free-solid-svg-icons'
import makeRequest from "../utils/fetch-request";
import ShareModal from "../sharemodal";

const HeaderNav = (props) => {
    const [state,] = useContext(Context);
    const pathname = window.location.pathname;
    const [searching, setSearching] = useState(false)
    const [matches, setMatches] = useState([])
    const searchInputRef = useRef(null)
    const [time, setTime] = useState();
    

    useEffect(() => {
        fetchMatches()
    }, [searching])


    useEffect(() => {
        const timer = setInterval(() => {
          setTime(new Date().toLocaleString().slice(12,22));
        }, 1000);

        return () => {
          clearInterval(timer);
        };
      }, []);

    const fetchMatches = async (search) => {
        if (search && search.length >= 3) {
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
        // searchInputRef.current.focus()
    }

    const dismissSearch = () => {
        setSearching(false)
        setMatches([])
    }

    return (
        <>
            <Container id="navbar-collapse-main"
                       className={`some-tail-wind-class`}>

                <ListGroup as="ul" xs="12" horizontal className="nav navbar-nav og d-flex ale ss  col-lg-12 col-md-12 col-sm-12 change-display">
                    
                    <li className={pathname === '/' ? "active" : ''}>
                        <Link className="cg fm ox anl url-link not-selectable " to="/" title="Home">
                        <img src={HomeIcon} alt=""  className="svg-menu-img-icon hide1" /> Home</Link>
                    </li>
                    <li>
                        <Link className={`g url-link live-game ${pathname === '/live' ? 'active' : ''}`} to="/live"
                           title="Live"><img src={LiveIcon} alt="" className="svg-menu-img-icon hide1" />Live</Link>
                    </li>

                    <li className={pathname === '/jackpot' ? 'active' : ''}>
                        <Link className="cg fm ox anl url-link" to="/jackpot" title="Jackpot">
                            <img src={JackpotIcon} alt="" className="svg-menu-img-icon hide1" /> Jackpot
                        </Link>
                    </li>
                                       
                    <li className={""}>
                        <a className="g url-link fix-display" href="#" title="Current Time">
                            <span className=" space-icons"><FontAwesomeIcon icon={faClock}/> </span> <span className={'hide2'}>{time}</span>
                        </a>
                    </li>
                </ListGroup>

            </Container>
            <Container id="navbar-collapse-main"
                       className={`fadeIn header-menu d-flex justify-content-center px-4 ${searching ? 'd-block' : 'd-none'}`}>
                <ListGroup as="ul" xs="9" horizontal className="nav navbar-nav og ale ss col-md-6 text-center">
                    <div className="d-flex">
                        <div className="col-md-10">
                            <input type="text" placeholder={'Start typing to search for team ...'} ref={searchInputRef}
                                   onInput={(event) => fetchMatches(event.target.value)}
                                   className={'form-control input-field border-0  no-border-radius'}/>
                        </div>

                        <button className={'btn text-white -align-right'} onClick={() => dismissSearch()}>
                            <FontAwesomeIcon icon={faTimes}/> Close
                        </button>
                    </div>
                    <div
                        className={`autocomplete-box position-fixed bg-white border-dark col-md-5 mt-1 shadow-lg text-start`}>
                        {matches.map((match, index) => (
                            <Link href={`/?search=${match.home_team}`} key={index}>
                                <li style={{borderBottom: "1px solid #eee"}}>
                                    {match.home_team}
                                </li>
                            </Link>
                        ))}
                    </div>
                </ListGroup>
            </Container>
          

          <ShareModal shown={state?.showsharemodal === true} />
        </>
    )

}
export default React.memo(HeaderNav);
