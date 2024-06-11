import React from "react";
// import Ticker from 'react-ticker';
import {HorizontalTicker } from "react-infinite-ticker";

import Crs from '../assets/img/clients/crs.jpg';
import Pwc from '../assets/img/clients/pwc.png';
import StdBank from '../assets/img/clients/stdbank.jpg';
import Total from '../assets/img/clients/total.jpg';
import Unilever from '../assets/img/clients/unilever.png';
import Vivo from '../assets/img/clients/vivo.png';


const OurCUstomers = (props) => {

    return (
        <section id="our-customers" className="py-3 md:py-5 bg-gray-200">
            <div className="container">
                <h1 className="text-purple-600 font-bold capitalize mb-2 md:mb-4 text-center text-4xl ">Our Customers</h1>
                <div className="text-center">Our esteemed corporate clients</div>

                <div id="customers-ticker" className="mt-5">
                    <HorizontalTicker duration={25000}>
                        <img src={Crs} className="mr-2"/>
                        <img src={Pwc} className="mr-2"/>
                        <img src={StdBank} className="mr-2" />
                        <img src={Total} className="mr-2" />
                        <img src={Unilever}  className="mr-2"/>
                        <img src={Vivo}  className="mr-2"/>
                    </HorizontalTicker>
                </div>

            </div>
        </section>
    )
}

export default React.memo(OurCUstomers);