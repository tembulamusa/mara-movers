import React from "react";
const GetQuote = (props) => {
    return (
        <section className="py-4">
            <div className="container">
                <h1 className="my-2 py-3 text-4xl text-blue-600 font-bold text-center">
                    Get A Free Quote
                </h1>

                <p className="text-center">No obligation free quotation</p>

                
                <div className="flex flex-row mt-4">
                    <div className="flex flex-col w-50 mr-4 p-3 border border-gray-100">
                        <div className="my-3 w-full">
                            <label className="capitalize w-50">Full name</label>
                            <input className="p-2 border border-gray-200 rounded w-50" placeholder="Full name"/>
                        </div>
                        <div className="my-3">
                            <label className="capitalize  w-50">Phone Number</label>
                            <input className="p-2 border border-gray-200 rounded w-50" placeholder="07xxxxxxx"/>
                        </div>
                        <div className="my-3">
                            <label className="capitalize  w-50">Primary Email</label>
                            <input className="p-2 border border-gray-200 rounded w-50" placeholder="john@mail.com"/>
                        </div>
                        <div className="my-3">
                            <label className="capitalize  w-50">Moving From</label>
                            <input className="p-2 border border-gray-200 rounded w-50" placeholder="From"/>
                        </div>
                        <div className="my-3">
                            <label className="capitalize  w-50">Moving To</label>
                            <input className="p-2 border border-gray-200 rounded  w-50" placeholder="To"/>
                        </div>
                        <div className="my-3">
                            <label className="capitalize  w-50"></label>
                            <button className="w-50 p-2 bg-blue-600 text-white rounded shadow-sm">Request Quotation</button>
                        </div>
                    </div>

                    <div className="flex flex-col w-50">
                        <h1 className="font-bold capitalize my-2">Our Moving Value Addition Includes:</h1>
                        <ul className="list-disc leading-8 pl-4">
                            <li>Free DSTV installation & Zuku satellite TV installation</li>
                            <li>Safe and secure storage fitted with 24 hour CCTV surveillance cameras.</li>
                            <li>Provision of hydraulic trolleys for handling and movement of heavy items such as safes.</li>
                            <li>Mounting of various wall hangings such as; pictures, paintings, mirrors and TVs.</li>
                            <li>Furniture protection with various padding materials.</li>
                            <li>Allocation of trucks with tail lifts for easier loading of goods.</li>
                            <li>Connection of various electronic appliances e.g. computers and printers.</li>
                            <li>Labeling of various departments before the move.</li>
                            <li>Basic housekeeping.</li>
                            <li>Pre-packing of files before the actual move.</li>
                        </ul>
                    </div>
                </div>
            </div>
            
        </section>
    )
}

export default React.memo(GetQuote);