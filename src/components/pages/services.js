import React from "react";
import PageHeader from "../utils/page-header";
import Domestic from "../../assets/img/services/packing.jpg"
import Conso from "../../assets/img/services/conso.jpg"
import Machine from "../../assets/img/services/machine.png"
import Warehouse from "../../assets/img/services/warehouse.jpg"
import Packing from "../../assets/img/services/packing.jpg"
import Office from "../../assets/img/services/house.jpg"

const Services = (props) => {

    return (
        <>
           <PageHeader title="Our services" />

           <section className="mt-5">
                <div className="container flex">
                    <div className="float-end w-1/3 inline-block my-2 p-2">
                        <div className="p-2 text-center block border border-gray-200 rounded">
                            <img src={Domestic} className="w-20 rounded-full mx-auto my-2"/>
                            <h1 className="text-2xl font-bold leading-8 py-3">Domestic & Inter-County House Moving</h1>
                            <div className="leading-6 pb-4">
                                Whether you are moving across the street or to a new county, our team handles everything from packing to final arrangement at your new house.
                            </div>
                        </div>
                    </div>

                    <div className="float-end w-1/3 inline-block my-2 p-2">
                        <div className="p-2 text-center block border border-gray-200 rounded">
                            <img src={Office} className="w-20 rounded-full mx-auto my-2"/>
                            <h1 className="text-2xl font-bold leading-8 py-3">Office Moving and Relocation</h1>
                            <div className="leading-6 pb-4">
                                We are especially adept in moving large organizations. We ensure all assets handled with maximum safety. Enjoy the best corporate moves
                            </div>
                        </div>
                    </div>
                    <div className="float-end w-1/3 inline-block my-2 p-2">
                        <div className="p-2 text-center block border border-gray-200 rounded">
                            <img src={Warehouse} className="w-20 rounded-full mx-auto my-2"/>
                            <h1 className="text-2xl font-bold leading-8 py-3">Warehousing and Storage Services</h1>
                            <div className="leading-6 pb-4">
                                Store you household and commercial goods in our warehouse at 15% off to celebrate 15 years of Mara Movers.
                            </div>
                        </div>
                    </div>
                    
                </div>

                <div className="container flex">
                    <div className="float-end w-1/3 inline-block my-2 p-2">
                        <div className="p-2 text-center block border border-gray-200 rounded">
                            <img src={Packing} className="w-20 rounded-full mx-auto my-2"/>
                            <h1 className="text-2xl font-bold leading-8 py-3">Packing & Crating Services</h1>
                            <div className="leading-6 pb-4">
                                For all your international packing and crating needs, we customize crates from certified fumigated timber as per ISPM 15 standards.
                            </div>
                        </div>
                    </div>

                    <div className="float-end w-1/3 inline-block my-2 p-2">
                        <div className="p-2 text-center block border border-gray-200 rounded">
                            <img src={Machine} className="w-20 rounded-full mx-auto my-2"/>
                            <h1 className="text-2xl font-bold leading-8 py-3">Machine Relocation</h1>
                            <div className="leading-6 pb-4">
                                Do you require to move sophisticated equipment such as ATM machines, safes, bulk filers and much more.
                            </div>
                        </div>
                    </div>
                    <div className="float-end w-1/3 inline-block my-2 p-2">
                        <div className="p-2 text-center block border border-gray-200 rounded">
                            <img src={Conso} className="w-20 rounded-full mx-auto my-2"/>
                            <h1 className="text-2xl font-bold leading-8 py-3">Pwani Conso</h1>
                            <div className="leading-6 pb-4">
                                We offer this service for small household consignments between Nairobi and Mombasa and vice-versa.
                            </div>
                        </div>
                    </div>
                    
                </div>
           </section>
        </>
    )
}

export default React.memo(Services);