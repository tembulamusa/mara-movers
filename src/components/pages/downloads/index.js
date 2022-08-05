import React, {useCallback, useEffect, useState} from "react";
import {PDFDownloadLink} from "@react-pdf/renderer";
import {PdfDocument} from "./Matches";
import makeRequest from "../../utils/fetch-request";
import Select from 'react-select'
import {Card, Tab, Tabs} from "react-bootstrap";
import {formatNumber} from "../../utils/betslip";

const Header = React.lazy(() => import('../../header/header'));
const SideBar = React.lazy(() => import('../../sidebar/awesome/Sidebar'));
const Footer = React.lazy(() => import('../../footer/footer'));
const Right = React.lazy(() => import('../../right/index'));

export default function MatchesList() {
    const [matches, setMatches] = useState([]);
    const [section, setSection] = useState('highlights');
    const [title, setTitle] = useState('highlights');
    const [events, setEvents] = useState(0);
    const [loaded, setLoaded] = useState(false)
    const [jackpotData, setJackpotData] = useState([])
    const [key, setKey] = useState('home');
    const [isJackpot, setIsJackpot] = useState(false);
    useEffect(() => {
        fetchMatches()
    }, [section, events])

    const fetchMatches = async () => {
        let method = 'POST'
        let endpoint = "/v1/matches?page=" + (1) + `&limit=${events}&tab=` + section + '&sub_type_id=1,10,29,18';
        await makeRequest({url: endpoint, method: method, data: []}).then(([status, result]) => {
            if (status == 200) {
                setMatches(result?.data || result)
                if (result?.data?.length > 0) {
                    setLoaded(true)
                }
            }
        });
    }

    const sectionOptions = [
        {value: 'upcoming', label: 'Upcoming'},
        {value: 'highlights', label: 'Highlights'},
        {value: 'tomorrow', label: 'Tomorrow'}
    ]

    const totalEventOptions = [
        {value: '10', label: '10'},
        {value: '30', label: '30'},
        {value: '50', label: '50'},
        {value: '100', label: '100'},
        {value: '200', label: '200'},
    ]

    const handleEventsChange = e => {
        setEvents(e.value)
    }

    const handleSectionChange = e => {
        setSection(e.value)
        setTitle(e.value)
    }

    const fetchJackpotData = useCallback(async () => {
        let match_endpoint = "/v1/matches/jackpot";
        const [match_result] = await Promise.all([
            makeRequest({url: match_endpoint, method: "get", data: null})
        ]);
        let [m_status, m_result] = match_result;
        if (m_status === 200) {
            setTitle(m_result?.meta?.name)
            setMatches(m_result?.data || m_result)
            setJackpotData(m_result?.meta)
            if (m_result?.data?.length > 0) {
                setLoaded(true)
            }
        }
    }, []);

    const fetchActiveTabMatches = async (key) => {
        setKey(key)
        if (key === 'jackpot') {
            fetchJackpotData()
            setIsJackpot(true)
        } else {
            setMatches([])
            setIsJackpot(false)
            setTitle(section)
        }
    }

    return (
        <>
            <Header/>
            <div className="amt">
                <div className="d-flex flex-row justify-content-between">
                    <SideBar loadCompetitions/>
                    <div className="gz home">
                        <div className="homepage">
                            <div className='col-md-12 primary-bg p-4 text-center'>
                                <h4 className="inline-block">
                                    <span className="fa fa-chevron-left"></span>
                                    DOWNLOAD MATCHES
                                </h4>
                            </div>
                            <div className="col-md-12 mt-2 text-center vh-100">
                                <Tabs
                                    variant={'tabs'}
                                    defaultActiveKey="matches"
                                    onSelect={(k) => fetchActiveTabMatches(k)}
                                    className="background-primary"
                                    justify>
                                    <Tab eventKey="matches" title="Matches" className={'background-primary shadow p-5'}>
                                        <div className="col-md-12 d-flex flex-column p-2">
                                            <div className="col-md-12 text-start p-2">
                                                <label htmlFor="" className={'text-white'}>Select Section</label>
                                                <Select options={sectionOptions}
                                                        value={sectionOptions.filter(obj => obj.value === section)}
                                                        onChange={handleSectionChange}/>
                                            </div>
                                            <div className="col-md-12 text-start p-2">
                                                <label htmlFor="" className={'text-white'}>Number of Events</label>
                                                <Select options={totalEventOptions}
                                                        value={totalEventOptions.filter(obj => obj.value === events)}
                                                        onChange={handleEventsChange}/>
                                            </div>
                                        </div>
                                        <div className="col-md-12 mt-5 text-center">
                                            <PDFDownloadLink
                                                className={`btn btn-primary text-white btn-lg p-4 col-md-4 ${loaded ? '' : 'disabled'}`}
                                                document={<PdfDocument matches={matches} jackpot={isJackpot}
                                                                       title={title}/>}
                                                fileName="matches.pdf">
                                                {({blob, url, loading, error}) =>
                                                    loading ? "Preparing Document..." : "Download Matches"
                                                }
                                            </PDFDownloadLink>
                                        </div>
                                    </Tab>
                                    <Tab eventKey="jackpot" title="Jackpot Matches"
                                         className={'background-primary shadow'}>
                                        <div className="col mt-5 background-primary">
                                            <Card className={'background-primary text-white'}>
                                                <Card.Header>
                                                    {jackpotData?.name} - {formatNumber(jackpotData?.jackpot_amount)}/=
                                                </Card.Header>
                                                <Card.Body>
                                                    <Card.Title>
                                                        {jackpotData?.type}
                                                    </Card.Title>
                                                    <Card.Text>
                                                        Download Jackpot Games and play in through sms in the format
                                                        <div className={'bold mt-2'}>
                                                            JP#PICK#PICK#.....
                                                        </div>
                                                    </Card.Text>
                                                    <PDFDownloadLink
                                                        className={`btn btn-primary text-white btn-lg p-4 col-md-4 ${loaded ? '' : 'disabled'}`}
                                                        document={<PdfDocument matches={matches} jackpot={isJackpot}
                                                                               title={title}/>}
                                                        fileName="matches.pdf">
                                                        {({blob, url, loading, error}) =>
                                                            loading ? "Preparing Document..." : "Download Matches"
                                                        }
                                                    </PDFDownloadLink>
                                                </Card.Body>
                                            </Card>
                                        </div>
                                    </Tab>
                                </Tabs>
                            </div>
                        </div>
                    </div>
                    <Right/>
                </div>
            </div>
            <Footer/>
        </>
    )
}
