import React from "react";
// import IndexCarousel from "./carousels";

const Jumbotron = (props) => {

    return (
        <>
            <section id='jumbotron' className=" bg-red-600 text-white text-center">
                <div className="w-full bg-transluscent py-3">
                    <div className='container py-7'>
                        <div className='w-full py-6 inline-block'>
                            <div className='text-5xl py-3 font-bold leading-none'>Kenya’s Number 1 <br/>Movers <br/>Website</div>
                            <div className='py-2'>
                                We offer exlussive services with regards to moving including:<br/>House Moving, Office, Corporate
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>
        </>
    )
}

export default React.memo(Jumbotron);