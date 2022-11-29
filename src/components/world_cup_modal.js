import React, {useState} from "react";
import { Modal } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import worldcup from '../assets/img/world_cup.jpg'
import {LazyLoadImage} from 'react-lazy-load-image-component';


const WorldCupModal = (props) => {
    const [show, setShow] = useState(true);
    return (
        <>
            <Modal
            show={show}
            onHide={() => setShow(false)}
            dialogClassName="modal-90w world-cup-ad"
            aria-labelledby="contained-modal-title-vcenter">
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        <h3>Win Big with World Cup Bets</h3>
                    </Modal.Title>
                </Modal.Header>

                <a href="/competition/79/8085/18585">
                    <Modal.Body>
                        <LazyLoadImage
                            className="d-block w-100"
                            src={worldcup}
                            alt="bethipo" />
                        <Row className="w-100 justify-content-center text-center">
                            <Col>
                                <h4>Click Here to bet on World cup and win big</h4>
                            </Col>
                        </Row>
                    </Modal.Body>
                </a>
            </Modal>
        </>
    )
}

export default WorldCupModal