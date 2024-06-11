import React from "react";


const NewsDemo = [
    {
        title: "Signs of Arsenal getting stronger in the Premier League",
        image: "arsenal.svg",
        text: "The victory over Wolves provided a comfortable distance for Arsenal at the top of the Premier League standings",
        competition: "premier league"
    },
    {
        title: "Erling Haaland Leads Premier League Top Scorers 2022",
        image: "mancity.svg",
        text: "Until the competition break in facing the 2022 World Cup in Qatar, Haaland is still the top scorer or top scorer for the 2022/2023 Premier League temporarily.",
        competition: "premier league"
    },
    {
        title: "Chelsea were humiliated 1-4 at Brighton headquarters",
        image: "brighton.svg",
        text: "Chelsea were humiliated by losing with a big score of 1-4 when they visited Brighton headquarters in Matchday 14 of the English Premier League at the Amex Stadium on Saturday night",
        competition: "premier league"
    },
    {
        title: "Garnacho led Manchester United to beat Fulham",
        image: "manu.svg",
        text: "Midfielder Christian Eriksen not only put United ahead in the 14th minute but also scored his first goal for United since joining the Red Devils last summer.",
        competition: "premier league"
    },
]
const News = (props) => {

    return (
        <>
            <div className="container">
                <div className="font-bold py-3 pt-4">All News and Transfer today</div>
                <ul className="text-gray-400 border-b border-gray-300 font-bold">
                    <li className="inline-block mr-4 border-b border-purple-500 pb-4 text-gray-500">All News</li>
                    <li className="inline-block mr-4 pb-4">Hot News</li>
                    <li className="inline-block mr-4 pb-4">Transfers</li>
                </ul>


                <div className="py-4 text-gray-500" id="news">
                    {NewsDemo.map((item, idx) => (
                        <div className="px-2 w-1/4 inline-block">
                            <div className="">
                                <img
                                    className="mx-auto bg-gray-100 w-full"
                                    src={require(`../assets/news/${item.image}`)}
                                />
                                <div className="uppercase text-purple-500 py-2">{item.competition}</div>
                                <div className="capitalize text-gray-600 py-2 font-bold">{item.title}</div>
                                <div className="line-clamp-2">{item.text}</div>
                            </div>
                        </div>
                    ))}
                    
                </div>
            </div>
        </>
    )

}


export default React.memo(News);