import React, { useEffect, useState } from "react";

const PriceComputer = (props) => {
    const [estPrice, setEstPrice] = useState(18000);
    const [quantity, setQuantity] = useState(1);
    const [distMarker, setDistMarker] = useState(1);
    
    useEffect(() => {
        let base = 18000;
        let estimatedPrice = base * quantity * distMarker;
        setEstPrice(estimatedPrice);
    }, [quantity, distMarker]);

    return (
        <div className="bg-white w-full px-3 py-3 rounded-md">
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
            <select className="form-control" onChange={ev => setQuantity(ev.target.value)}>
                <option value={0.8}>Pickup(1bedroom)</option>
                <option value={1.0}>Canter(2 bedroom)</option>
                <option value={1.5}>Container(5 bedroom)</option>
            </select>
            </div>

            <div className="alert alert-warning mt-3">NOTE! This is just an estimate to give you a clue. The actual price is determined upon actual ground assessment but has always been significantly lower than the estimate. <span className="text-orange-600">The actual price will be less than the calculated price of <span className="underline font-bold">Ksh. {estPrice}</span></span></div>
            
        </div>
    )
}

export default React.memo(PriceComputer);