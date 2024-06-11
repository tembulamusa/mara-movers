import { VscJersey } from "react-icons/vsc";
import RightScroller from '../../assets/svg/right-scroller.svg';
import LeftScroller from '../../assets/svg/left-scroller.svg';
import React from "react";

const ShopDemo = [
    {
        title: "Chelsea home kit 21/22",
        image: "home1.svg",
        price: "150.10",
    },
    {
        title: "Chelsea home kit 21/22",
        image: "home1.svg",
        price: "111.20",
    },
    {
        title: "Bournemouth away kit 21/22",
        image: "home1.svg",
        price: "100.33",
    },
    {
        title: "Shabana Away kit 21/22",
        image: "home1.svg",
        price: "140.30",
    },
    
]
const Shop = (props) => {

    return (
        <>
            <div className="font-bold">
                <VscJersey className="inline-block text-purple-500 font-bold mr-1 text-xl"/>FKF Shop
                <span className="float-right">
                    <span className="inline-block"><img src={LeftScroller} /></span>
                    <span className="inline-block"><img src={RightScroller} /></span>
                </span>
            </div>

            <div id="" className="py-2 my-3">
                {ShopDemo.map((demo, idx) => (
                    <div id="" className="w-1/4 py-2 px-2 inline-block my-2">
                        <div className="">
                            <img
                            className="mx-auto bg-gray-100 w-full"
                            src={require(`../../assets/jerseys/${demo.image}`)}
                            />

                            <div className="my-2 capitmalize">{demo.title}</div>
                            <div className="text-purple-500 my-2">${demo.price}</div>
                            <button className="mt-2 bg-red-600 text-white py-1 px-2 rounded-md">Buy Now</button>

                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default React.memo(Shop);