import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import React from "react";
import Header from '../../header/header'
import SideBar from '../../sidebar/awesome/Sidebar'
import Footer from '../../footer/footer'
import Right from '../../right/index'

const DisputeResolution = () => {
    return (
        <>
            <Header/>
            <div className="amt">
                <div className="d-flex flex-row justify-content-between">
                    <SideBar loadCompetitions />
                    <div className="gz home">
                        <div className="homepage">
                            <div className='col-md-12 primary-bg p-4 text-center'>
                                <h4 className="inline-block">
                                    DISPUTE RESOLUTION POLICY
                                </h4>
                            </div>
                            <div className="col-md-12 mt-2 text-white accordion-container ">
                                <Accordion allowMultipleExpanded={false} 
                                    allowZeroExpanded={true}
                                     preExpanded = {["only-child-1"]}>
                                    <AccordionItem uuid="only-child-1">
                                        <AccordionItemHeading>
                                            <AccordionItemButton className='accordion-button'>
                                                DISPUTE RESOLUTION
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel className='accordion-item-panel'>
                                            <p>
                                                BetNare aims to offer all of the company’s clients from the Kenya the
                                                greatest possible Customer experience in the industry. We want to make
                                                sure
                                                that all of our clients are completely satisfied with the products and
                                                service the company has to offer, as well as their quality and
                                                transparency.
                                                At the same time, BetNare realizes that sometimes there might be cases
                                                when
                                                the company hasn’t been able to deliver. If you are not happy with the
                                                service that our platform provides, you can always send a query to our
                                                Customer Services team.
                                            </p>
                                            <p>
                                                You can contact the BetNare Customer Services team by way of email
                                                customercare@bethipo.com or call our customer care lines or inbox us through
                                                our
                                                social Media Pages Facebook, BetHipo, Instagram BetHipo etc. Queries
                                                will
                                                always be processed within one business day. However, if, after your
                                                issue
                                                has been processed, you’re still not satisfied with the decision or
                                                believe
                                                that the situation is at a deadlock, you can always ask BCLB (The
                                                Betting
                                                Control and Licensing Board) to conduct an investigation.
                                            </p>
                                            <p>
                                                BCLB is an and impartial external agent that provides independent
                                                judgments
                                                for gambling/betting-related disputes. BCLB will not charge you for its
                                                services. To raise your dispute or complaint with BCLB, you will need to
                                                request a Deadlock Email from our CS Agent. This email will outline the
                                                full
                                                details of your dispute or complaint and will include a unique reference
                                                number that must be quoted when submitting a dispute or complaint with
                                                BCLB.
                                                You can then submit your dispute or complaint to BCLB via
                                                info@bclb.go.ke
                                                BCLB as a regulator, is also an independent adjudication service for
                                                resolving disputes between licensed gambling companies and their
                                                clients.
                                                To start looking at the detail of any dispute, BCLB will ask a
                                                complainant
                                                to confirm that they have made every reasonable effort possible to
                                                resolve
                                                the dispute before addressing BCLB and that they agree to comply with
                                                BCLB’
                                                terms and conditions.
                                            </p>
                                            <p>
                                                Decisions are not made based on which party makes a better presentation
                                                of
                                                the disputed case. Gambling companies and their clients do not need to
                                                think
                                                of the quality of the presentation or their writing skills. The part of
                                                BCLB
                                                is to identify relevant issues. Therefore, decisions are always based on
                                                the
                                                facts of a case and not on either of the parties' rhetoric. The only
                                                thing
                                                BCLB asks for is that statements submitted cover as many facts as a
                                                complainant considers relevant to their dispute.
                                            </p>
                                            <p>
                                                In the event of a dispute arising between us and you, we each agree to
                                                follow the procedure set out in our Dispute Resolution policy as amended
                                                from time to time.
                                            </p>

                                            <p>
                                                If BetNare is unable to settle the dispute, BetNare will refer the
                                                dispute
                                                to BCLB, whose decision will be final (save in respect of any manifest
                                                error) subject to full representation given to all parties involved. No
                                                dispute regarding any bet/wager will result in litigation, court action
                                                or
                                                objection to a bookmaker’s license or permit (including any remote
                                                operator’s license or personal license) unless BetNare fails to
                                                implement
                                                the decision given by arbitration.
                                            </p>

                                        </AccordionItemPanel>
                                    </AccordionItem>
                                </Accordion>
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

export default DisputeResolution
