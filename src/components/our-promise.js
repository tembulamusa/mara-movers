import React from "react";
import { FaHandshake } from "react-icons/fa";
import { FaCommentDollar } from "react-icons/fa";
import { FaRegMoneyBillAlt } from "react-icons/fa";


const Teams = ["tusker", "ulinzi", "nairobi", "shabana","kenya_police", "posta", "nzoia", "muranga"]

const OurPromise = (props) => {
    return (
        <>
            <section className="py-4 mb-2">
                <div className="container">
                    <h1 className="text-purple-600 font-bold capitalize mb-4 text-center text-4xl md:text-6xl ">Our Promise</h1>

                    <div className="text-center md:text-left">
                        <p className="mb-3">We know that moving is very personal experience that requires meticulous understanding of your needs. That’s why we developed The Mara Movers Way, a removals methodology built around this philosophy.</p>

                        <p>Every move starts with a detailed assessment of your requirements and the nature of goods at hand. This informs the way we pack and handle each category of goods to ensure their integrity is maintained. Experience the delight of having breakfast at your old house, and by evening, enjoying dinner with feet up at your new house, all without breaking a sweat! We also offer secure and affordable warehousing and storage solutions.</p>
                    </div>
                </div>
            </section>
            <section className='bg-white my-3 mb-4' id='search-section h-1.5'>
                <div className='container relative w-full'>                    
                    <div className='w-full md:w-1/3 pr-4 mt-2 inline-block'>
                        <div className="border border-gray-200 p-3 shadow-sm text-center">
                            <div className="text-center"><FaHandshake size={40} className="text-purple-600 mx-auto"/></div>
                            <div className="text-2xl capitalize my-3 font-bold">Trusted Movers in Kenya</div>
                            <div className="py-2">
                                With 10 years of experience, industry knowledge and lots of satisfied customers, we are the best moving company in Kenya!
                            </div>
                        </div>
                    </div>

                    <div className='w-full md:w-1/3 pr-4 mt-2 inline-block'>
                        <div className="border border-gray-200 p-3 shadow-sm text-center">
                            <div className="text-center"><FaCommentDollar size={40} className="text-purple-600 mx-auto"/></div>
                            <div className="text-2xl capitalize my-3 font-bold">Professional Services</div>
                            <div className="py-2">
                                We provide high quality custom moving solutions at affordable prices. Call us or fill the free quote form to get a free estimate.
                            </div>
                        </div>
                    </div>

                    <div className='w-full md:w-1/3 pr-4 mt-2 inline-block'>
                        <div className="border border-gray-200 p-3 shadow-sm text-center">
                            <div className="text-center"><FaRegMoneyBillAlt size={40} className="text-purple-600 mx-auto"/></div>
                            <div className="text-2xl capitalize my-3 font-bold">Affordable Storage</div>
                            <div className="py-2">
                                Our secure and accessible storage facility is ready to receive and store your goods in large volumes
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default React.memo(OurPromise);