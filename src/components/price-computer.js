import React, { useState } from "react";

const PriceComputer = (props) => {
    const [estPrice, setEstPrice] = useState(1);

    return (
        <div className="">
            <h1 className="text-2xl capitalize font-bold mb-3">Estimate price <span className="underline text-orange-600">{estPrice > 0 && <>Ksh. {estPrice}</>}</span></h1>
            <div className="row my-3">
                <div className="col-6">
                    <label>From</label>
                    <input placeholder="start typing" className="form-control" />
                </div>

                <div className="col-6">
                    <label>To</label>
                    <input placeholder="start typing" className="form-control" />
                </div>
            </div>

            {/* Size of the products */}
            <div className="">
            <label className="">How big is your house</label>
            <select className="form-control">
                <option value={""}>Select Size</option>
                <option value={1.0}>Pickup</option>
                <option value={1.2}>Canter</option>
                <option value={1.2}>Container</option>
            </select>
            </div>

            <div className="alert alert-warning mt-3">NOTE! This is just an estimate to give you a clue. The actual price is determined upon actual ground assessment but has always been significantly lower than the estimate. <span className="text-orange-600">The actual price will be less than the calculated price of <span className="underline font-bold">Ksh. {estPrice}</span></span></div>
            
        </div>
    )
}

export default React.memo(PriceComputer);