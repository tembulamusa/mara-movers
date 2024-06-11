import React from "react";
import PageHeader from "../utils/page-header";
const ContactUs = (props) => {
    return (
        <>
            <PageHeader title="Contact Us" />
            <section className="my-3">
                <div className="container">
                    <h1 className="text-3xl font-bold text-purple-600 my-4 capitalize text-center">
                        Get in touch
                    </h1>
                    <div className="my-3 text-center">
                        Call any of our offices near you to get a no obligation quote instantly!
                    </div>
                </div>
            </section>

            <section className="">
                <div className="container flex">
                    <div className="w-50 inline-block">
                        <h1 className="my-3 text-2xl text-gray-900 capitalize font-bold">Mombasa</h1>
                        <div className="">
                            <span className="font-bold">Call:</span><br/>
                            254717506069
                        </div>
                        <div className="mt-4">
                            <span className="font-bold">Email:</span><br/>
                            maramoversk@gmail.com
                        </div>
                        <div className="mt-4">
                            <span className="font-bold">Location:</span><br/>
                            Mlaleo next to Saidia Fatma Hospital
                        </div>
                    </div>
                    <div className="w-50 inline-block mt-3">
                        <div className="">
                            <input placeholder="Name*" className="border border-gray-300 p-2 mr-2 w-40"/>
                            <input placeholder="Email*" className="border border-gray-300 p-2 ml-2 w-50"/>
                        </div>
                        <div className="mt-4">
                            <input placeholder="Phone*" className="border border-gray-300 p-2 mr-2 w-full"/>
                        </div>
                        <div className="mt-4">
                            <textarea placeholder="Message*" className="border border-gray-300 p-2 mr-2 w-full"/>
                        </div>
                        <div className="mt-3">
                            <button className="uppercase p-3 bg-red-500 text-white rounded">Send Message</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default React.memo(ContactUs);