import React from "react";
import IndexCarousel from "./carousels";

const Jumbotron = (props) => {

    return (
        <>
            <section id='jumbotron' className=" bg-red-600 text-white text-center">
                <div className="w-full bg-transluscent py-3">
                    <div className='container'>
                        <div className="row">
                            <div className="col-md-6">
                                <div className='w-full py-6 inline-block'>
                                    <IndexCarousel />
                                </div>
                            </div>

                            <div className="col-md-6">
                                <h1>price estimates</h1>

                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>
        </>
    )
}

export default React.memo(Jumbotron);