import React from 'react';
import { Container, Row, Col } from "reactstrap";
import AvesisHome from '../../images/thumb_avesis_home.jpg';
import WahaThumb from '../../images/thumb_waha.jpg';
import AvesisBrokers from '../../images/thumb_brokers.jpg';
import AvesisMembers from '../../images/thumb_members.jpg';
import Slide from 'react-reveal/Slide';


const DesignPortfolio = () => {
    return (
        <Container id="design">

                <Slide bottom>

                <Row>
                    {/* Start of Row 1 */}
                    <Col sm="4" lg="5">
                        <img
                            src={AvesisHome}
                            className="hvr-grow-shadow designpic"
                            data-toggle="modal"
                            data-target="#avesis1"
                            alt="pic"
                        />

                        <div
                            className="modal fade"
                            id="avesis1"
                            tabIndex="-1"
                            role="dialog"
                            aria-labelledby="exampleModalLabel"
                            aria-hidden="true"
                        >
                            <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">

                                        <h5 className="modal-title" id="exampleModalLabel">
                                            Avēsis Homepage Redesign Proposal
                                                </h5>
                                        <button
                                            type="button"
                                            className="close"
                                            data-dismiss="modal"
                                            aria-label="Close"
                                        >
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>

                                    <div className="modal-body">

                                        <img src={require('../../images/design_avesis_home.jpg')} alt="Avesis Home Redesign Mockup Proposal" width="100%" />

                                        <p className="modal-txt">
                                            This project was a design <strong>and</strong> code presentation for a possible homepage redesign. The top navigation
                                            icons animated on mouse hover and were anchor links that had a smooth scroll to the lower sections for easy
                                            user experience.
                                           </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>


                    <Col sm="4" lg="5">
                        <img
                            src={WahaThumb}
                            className="hvr-grow-shadow designpic"
                            data-toggle="modal"
                            data-target="#waha"
                            alt="pic"
                        />

                        <div
                            className="modal fade"
                            id="waha"
                            tabIndex="-1"
                            role="dialog"
                            aria-labelledby="exampleModalLabel"
                            aria-hidden="true"
                        >
                            <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">

                                        <h5 className="modal-title" id="exampleModalLabel">
                                            Wisconsin Amateur Hockey Association <br />Design Mock-up
                                                </h5>
                                        <button
                                            type="button"
                                            className="close"
                                            data-dismiss="modal"
                                            aria-label="Close"
                                        >
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>

                                    <div className="modal-body">

                                        <img src={require('../../images/design_waha.jpg')} alt="Wisconsin Amateur Hockey Association Redesign Mockup" width="100%" />

                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>    {/* End of Row 1  */}


                <Row>
                    {/* Start of Row 1 */}
                    <Col sm="4" lg="5">
                        <img
                            src={AvesisBrokers}
                            className="hvr-grow-shadow designpic"
                            data-toggle="modal"
                            data-target="#broker"
                            alt="pic"
                        />

                        <div
                            className="modal fade"
                            id="broker"
                            tabIndex="-1"
                            role="dialog"
                            aria-labelledby="exampleModalLabel"
                            aria-hidden="true"
                        >
                            <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">

                                        <h5 className="modal-title" id="exampleModalLabel">
                                            Avēsis Broker Web Portal Pre-login Design
                                                </h5>
                                        <button
                                            type="button"
                                            className="close"
                                            data-dismiss="modal"
                                            aria-label="Close"
                                        >
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>

                                    <div className="modal-body">

                                        <img src={require('../../images/design_brokers.jpg')} alt="Avesis Brokers Pre-login Design" width="100%" />

                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>


                    <Col sm="4" lg="5">
                        <img
                            src={AvesisMembers}
                            className="hvr-grow-shadow designpic"
                            data-toggle="modal"
                            data-target="#members"
                            alt="pic"
                        />

                        <div
                            className="modal fade"
                            id="members"
                            tabIndex="-1"
                            role="dialog"
                            aria-labelledby="exampleModalLabel"
                            aria-hidden="true"
                        >
                            <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">

                                        <h5 className="modal-title" id="exampleModalLabel">
                                            Avēsis Members Web Portal Pre-Login <br /> Page Design and Front-End Code
                                                </h5>
                                        <button
                                            type="button"
                                            className="close"
                                            data-dismiss="modal"
                                            aria-label="Close"
                                        >
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>

                                    <div className="modal-body">

                                        <img src={require('../../images/design_members.jpg')} alt="Avesis Home Redesign Mockup Proposal" width="100%" />


                                        <p className="text-center modal-txt">
                                            <a href="https://www.avesis.com/commercial3/members/index.aspx" target="_blank" rel="noopener noreferrer">View the Members Portal Login Page in the Browser</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>

                </Row>    {/* End of Row 1  */}
            </Slide>
        </Container>
    )

}

export default DesignPortfolio