import React,  { useContext, useEffect, useState } from "react";
import { useParams } from 'react-router-dom';

import Header from './header/header';
import Footer from './footer/footer';
import SideBar from './sidebar/sidebar';
import banner from '../assets/img/banner.jpg';
import CarouselLoader from './carousel/index';
import MainTabs from './header/main-tabs';
import SearchBar from './header/search-bar';
import MatchList from './matches/index';
import Right from './right/index';

import useAxios from "../hooks/axios.hook";
import { Context }  from '../context/store';

const CompetitionMatches = (props) => {
    const [page, setPage] = useState(1);
    const [state, dispatch] = useContext(Context);                              
    const {response, makeRequest} = useAxios()
    const [tab, setTab] = useState('highlights');
    const id = useParams('id');

    useEffect(()=>{                                                             
        const abortController = new AbortController();                          
        let endpoint = "/v1/sport/competition?id="+id+"?page="+ (state?.page|| 1); 
                                                                                
        makeRequest({url:endpoint, method:"get", data:null }).then((response) => {
            let {status, result} = response;                      
            dispatch({type:"SET", key:"matches", payload:result});
        });                                                                     
                                                                                
        return () => {                                                          
            abortController.abort();                                            
        };                                                                      
    }, [state?.page]);

   return (
       <>
        <Header />        
        <div className="by amt">
          <div className="gc">
            <SideBar />
            <div className="gz home">
                <div className="homepage">
                    <CarouselLoader />
                    <MatchList />
                </div> 
            </div>  
            <Right />
          </div>
        </div>
       </>
   )
}

export default CompetitionMatches;