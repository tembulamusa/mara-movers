import React from "react";
import IndexCarousel from "./carousels";
import PriceComputer from "./price-computer";

const Jumbotron = (props) => {

    return (
        <>
            <section id='jumbotron' className=" bg-red-600 text-white text-center">
                <div className="w-full">
                    <div className='container'>
                        <div className="row">
                            <div className="col-md-6 bg">
                                <div className='w-full pt-6 inline-block'>
                                    <IndexCarousel />
                                </div>
                            </div>

                            <div className="col-md-6 text-gray-700 py-5">
                                <PriceComputer />
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>
        </>
    )
}

export default React.memo(Jumbotron);