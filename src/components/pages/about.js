import React from "react";
import PageHeader from "../utils/page-header";
import Banner from "../../assets/img/about.jpg";
import Banner2 from "../../assets/img/about2.jpg";
const About = (props) => {

    return (
        <>
            <PageHeader title="About Us"/>

            <section className="py-3 mt-3">
                <div className="container flex">
                    <div className="w-50 pr-4">
                        <img src={Banner} />
                    </div>
                    <div className="w-50 pl-3 leading-8">
                        <h1 className="capitalize text-2xl text-blue-600 font-bold">
                            About Us : Mara Movers Limited
                        </h1>

                        <p className="py-2">
                            Mara Movers is your smart and trusted relocation, moving and storage company that was incorporated in December 2014 and started operating in January 2015. The company is managed by indigenous Kenyans with more than 100 years combined experience in the industry.
                        </p>
                        <p className="py-1">
                            As Kenya’s leading premium removals service provider, we ensure that the anxiety of moving is replaced with the delightful convenience that only true experts can provide. Mara Movers has highly trained enthusiastic staff who are recruited after vigorous background checks to ensure we have only the best.
                        </p>
                        <p className="py-2">
                            Our superior equipment and packaging materials ensure your personal goods not only move in style but are also handled with utmost care.With several years of experience, industry knowledge and lots of satisfied customers, we move you without tears!
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-4">
                <div className="container">
                    <h1 className="capitalize text-2xl text-gray-600 font-bold">
                            Our promise
                    </h1>

                    <div className="">
                        At Mara Movers Limited we will offer personalized solutions. We will continuously improve our services through technical expertise, customer centric approach in all our processes and respect the environment. In so doing, we will nurture the talents of our employees to achieve personal growth while enjoying what we do.
                    </div>
                </div>
            </section>

            <section className="bg-gry-100 py-3 border-t border-gray-300">
                <div className="container flex">
                    <div className="w-40 pr-3">
                        <h1 className="text-2xl text-blue-600 font-bold capitalize">
                            Our Vision and Core Values
                        </h1>
                        <ul className="list-disc leading-8 pl-4">
                            <li>Enthusiasm</li>
                            <li>Creativity</li>
                            <li>Care</li>
                            <li>Teamwork</li>
                            <li>Honesty</li>
                            <li>Courtesy</li>
                        </ul>
                        <button className="bg-red-500 font-bold text-white px-4 py-3 rounded mt-3">Free Consultation</button>
                    </div>
                    <div className="w-60 pl-3">
                        <img src={Banner2} />
                    </div>
                </div>
            </section>
        </>
    )
}

export default React.memo(About);