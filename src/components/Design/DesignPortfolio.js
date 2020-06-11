import React from 'react';
import { Container, Row, Col } from "reactstrap";
//import MobileCarousel from '../../images/iphone_appcarousel_prototype.png';
import AvesisHome from '../../images/thumb_homeredesignv2.jpg';
import WahaThumb from '../../images/thumba_wahahv2.jpg';
import AvesisBrokers from '../../images/thumb_brokersv2.jpg';
import AvesisMembers from '../../images/thumb_members_v2.jpg';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Slide from 'react-reveal/Slide';

const verticalThumb = {
    position: 'relative',
    height: '60%',
    paddingBottom: 10,
}


const rowWrap = {
    marginBottom: 20,
    textAlign: 'center'
}


const DesignPortfolio = () => {
    return (
        <Container id="design">
            <Row style={rowWrap}>
                <Col sm={{ size: 12 }}>
                    <h2 className="sub-header featured-header">Design</h2>
                    
                </Col>
            </Row>
{/* Temporarily hide - link is down
            <Row className="rowWrap text-center">
                <Col sm={{ size: 12 }}>
                    <a href="https://xd.adobe.com/view/54a7cdb4-310f-46d3-7496-b45cf4561a28-2296/?fullscreen" target="_blank" rel="noopener noreferrer"><img src={MobileCarousel} alt="Adobe XD Mobile carousel" style={verticalThumb} /></a>

                    <p><a href="https://xd.adobe.com/view/54a7cdb4-310f-46d3-7496-b45cf4561a28-2296/?fullscreen" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon="globe-americas" /> View Clickable Prototype Online</a></p>

                </Col>
</Row> */}

            <Slide bottom>
                <Col sm={{ size: 12 }}>

                    <Row>
                        {/* Start of Row 1 */}
                        <Col sm="4" lg="6">
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


                        <Col sm="4" lg="6">
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
                        <Col sm="4" lg="6">
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


                        <Col sm="4" lg="6">
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
                    </Row>
                </Col>{/* Outer column to wrap content for centering */}
            </Slide>
        </Container>
    )

}

export default DesignPortfolio