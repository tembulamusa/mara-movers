import React, {useState, useEffect, useContext, useRef} from 'react';
import padlock from '../../assets/img/padlock.png';
import { Context }  from '../../context/store';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';

import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'


const clean = (_str) => {
    _str = _str.replace(/[^A-Za-z0-9\-]/g, '');
    return _str.replace(/-+/g, '-');
}

const EmptyTextRow = () =>{
    return (
        <div className="btn btn-disabled draw" 
         style={{width:"100%", height:"30px", padding:"2px"}}>
         <span className="label label-inverse">
             <img style={{opacity:"0.3", width:"15px"}} src={padlock} alt="--" />
         </span>
        </div>
    );
}

const MatchHeaderRow = (props) => {
    return (
        <Container>
        <Row className="events-header">
            <div className="col-sm-8 left-text">
                <h3 className="main-heading-1">Soccer</h3>
            </div>
            <div className="col-sm-1">1</div>
            <div className="col-sm-1 events-odd">X</div>
            <div className="col-sm-1">2</div>
            <div className="col-sm-1 events-odd"></div>
        </Row>
        </Container>
    )
}

const addBet = (match_id, sub_type_id, special_bet_value, oddValue, mkt) => {
   console.log("I picked ", match_id, sub_type_id, special_bet_value, oddValue, mkt);
   console.log("ADD BET");
}

const SideBets = (props) => {
    const {match, theMatch} = props;
    const [picked, setPicked] = useState();
    useEffect(()=>{
        setPicked(
            theMatch?.sub_type_id && theMatch?.sub_type_id === match.sub_type_id ? ' picked': '');
    }, []);

    return (

        <div className={`col-sm-1 events-odd pad ${picked}`} >
            <a className="side" 
                href={`match?id=${match.match_id}`}>+{match.side_bets}
            </a>
        </div>
    )

}

const OddButton = (props) => {
    const {theMatch, match, mkt} = props
    const [ucn, setUcn] = useState('');
    const [picked, setPicked] = useState('');
    const [oddValue, setOddValue] = useState(null);
    const [state, dispatch] = useContext(Context);                              
    const ref = useRef();
    let reference = match.match_id + "_selected";

    useEffect(() => {
        if(match){
            console.log("loading match data", match);
            let uc = clean(
                match.match_id 
                + "" + match.sub_type_id 
                + (match?.[mkt] || 'draw') 
            );
            setUcn(uc);

            let picked = (theMatch?.bet_pick == match[mkt] && 
                theMatch?.sub_type_id == match.sub_type_id) ? 'picked' : '';
            setPicked(picked);

            if(mkt === 'home_team'){
                setOddValue(match.odds.home_odd)
            } else if(mkt === 'away_team'){
                setOddValue(match.odds.away_odd)
            }else if(mkt === 'draw'){
                setOddValue(match.odds.neutral_odd)
            }
        }
    }, []);

    useEffect(() => {
        console.log("Picled on ", state?.[reference], "for ", ucn);
        if(state?.[reference] ){
            if(state?.[reference] == ucn){
                setPicked('picked')
            } else {
                setPicked('');
            }
        } 
    }, [state?.[reference]])
    
    const handleButtonOnClick = (event) => {
       let pmid = event.currentTarget.getAttribute("parent_match_id");
       let mid = event.currentTarget.getAttribute("match_id");
       let stid = event.currentTarget.getAttribute("sub_type_id"); 
       let sbv = event.currentTarget.getAttribute("special_bet_value"); 
       let oddk = event.currentTarget.getAttribute("odd_key"); 
       let  odd_value = event.currentTarget.getAttribute("odd_value"); 
       let  bet_type = event.currentTarget.getAttribute("odd_type"); 
       let cstm = clean(mid + "" + stid + oddk)

       console.log("ucn", ucn, "cstm", cstm, "ref", reference.current); 
       if(cstm == ucn) {
           if(picked == 'picked') {
                setPicked('');
           } else {
               dispatch({type:"SET", key:reference, payload:cstm});
           }
       }
    }

    return (
        <button 
            ref={ref}
            className={`home-team ${match.match_id} ${ucn} ${picked}`}
            hometeam={match.home_team}
            oddtype="1x2" 
            bettype='prematch'
            awayteam={match.away_team}
            odd_value={oddValue}
            odd_key={match?.[mkt] || 'draw'}
            parent_match_id={match.parent_match_id}
            match_id={match.match_id}
            custom={ ucn } 
            sub_type_id={match.sub_type_id}
            special_bet_value={''}
            onClick={handleButtonOnClick} >
                <span className="theodds">{oddValue}</span>
        </button>
    )
}



const MatchRow = (props) => {
    const [betslip, setBetslip] = useState([]);
    const {match} = props;

    useEffect(() => {
     
    }, []);

    return (
        <Row className="top-matches">
            <div className="col-sm-1 pad left-text">{match.start_time}</div>
            <div className="col-sm-7">
                <div className="compt-detail"> {match.category} | {match.competition_name}</div>
                <div className="compt-teams">{match.home_team}
                    <span className="opacity-reduce-txt vs-styling">vs</span>
                    {match.away_team}
                </div>
            </div>
            <Row className="col-3 m-0 p-0">
                <div className="col-sm-4 match-div-col" style={{padding:0}}>
                    { match?.odds?.home_odd 
                        ?  <OddButton match={match} theMatch={{}} mkt="home_team" /> 
                        :  <EmptyTextRow /> 
                    }
                </div>
                <div className="col-sm-4 events-odd match-div-col" style={{padding:0}}>
                    { match?.odds?.neutral_odd 
                        ?  <OddButton match={match} theMatch={{}} mkt="draw" /> 
                        :  <EmptyTextRow /> 
                    }
                </div>
                <div className="col-sm-4 match-div-col" style={{padding:0}}>
                    { match?.odds?.away_odd 
                        ?  <OddButton match={match} theMatch={{}} mkt="away_team" /> 
                        :  <EmptyTextRow /> 
                    }
                </div>
            </Row>
            <SideBets theMatch={{}} match={match} style={{d:"inline"}}/>
        </Row>
    )

} 
const MatchList = (props) => {
    const [state, dispatch] = useContext(Context);                              
    const [matches, setMatches] = useState();
    useEffect(()=>{
        console.log("Received a state change", state?.matches);
        if(state?.matches) {
            setMatches(state.matches);
        }
    }, [state?.matches])

    return (
        <div className="matches full-width">

            <MatchHeaderRow  />

            <Container className="web-element">
                { matches && Object.entries(matches).map(([key, match]) => (
                        <MatchRow match={match}  key={key}/>
                   ))
                }
               { !matches && [...Array(10).keys()].map((index, n) => (
                   <div className="react-loading" key={n}  >
                      <Container className=" top-matches">
                          <Row style={{height:40, opacity:0.7}}>
                           <Col lg="1" >
                               <Skeleton className="pad left-text"></Skeleton>
                           </Col>
                           <Col className="col-sm-7">
                               <Skeleton className="compt-detail"></Skeleton>
                               <Skeleton className="compt-teams"></Skeleton>
                           </Col>

                           <Col className="col-sm-1 match-div-col" >
                                <Skeleton className="home-team" ></Skeleton>
                            </Col>

                           <Col className="col-sm-1 events-odd match-div-col">
                                <Skeleton className="home-team" ></Skeleton>
                           </Col>
                           <Col className="col-sm-1 match-div-col" >
                                <Skeleton className="awy-team" ></Skeleton>
                           </Col>
                           <Col className="col-sm-1 events-odd pad" >
                               <Skeleton className="side" />
                           </Col>
                          </Row>
                       </Container>
                  </div>) )
               }
            </Container>
        </div>
    )
}
export default MatchList;
