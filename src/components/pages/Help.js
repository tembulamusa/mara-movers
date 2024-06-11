import React, {useCallback, useEffect, useState, useContext} from "react";
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import makeRequest from "../utils/fetch-request";
import {
    getFromLocalStorage,
    setLocalStorage
} from '../utils/local-storage';
import {getBetslip} from '../utils/betslip' ;
import {Context} from '../../context/store';
import {AccordionButton} from "react-bootstrap";
import Index from '../../assets/img/payment_logos/index.png'
import Mpesa from '../../assets/img/payment_logos/mpesa-logo.png'
import Tigo from '../../assets/img/payment_logos/tigo_pesa.png'
const Help = (props) => {
    
    return (
        <>
            {/* to be ported as dynamic title */}
            {/*  */}
            
            <div className='w-100 bg-white py-2 items-center text-purple-400 text-4xl border-b border-gray-200/100 mb-3'>
                Help
            </div>

            
                    <h4>Frequently Asked Questions</h4>
                    This is the help page...
                    Could be a contacts page...

        </>
    )
}
export default Help
