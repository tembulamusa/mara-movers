import React from "react";
import Download from '../assets/svg/download.svg';
import Phones from '../assets/svg/app.svg';

const AppDownload = (props) => {
    return (

        <>
            <div className="container bg-gray-100 rounded-2xl flex flex-row p-0">
                <div className="flex flex-col w-1/3 p-3">
                    <p className="py-2">New Platform</p>
                    <div className="font-bold text-3xl capitalize pb-3">Get one of our sports<br/> apps, which is only <br/>available on</div>
                    <div className="py-2">Download Apps:</div>
                    <img src={Download} />
                </div>
                <div className="flex flex-col w-2/3">
                    <img src={Phones} className="float-right rounded-2xl"/>
                </div>
            </div>
        </>
    )
}


export default React.memo(AppDownload);