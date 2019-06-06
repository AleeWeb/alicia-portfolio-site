import React from 'react';
import { Container, Row, Col } from "reactstrap";
import ThumbAnim from '../../images/mobile_thumb_animation.gif';
import MobileCarousel from '../../images/mobile_carousel.gif';
import AvesisHome from '../../images/thumb_avesis_home.jpg';
import WahaThumb from '../../images/thumb_waha.jpg';
import AvesisBrokers from '../../images/thumb_brokers.jpg';
import AvesisMembers from '../../images/thumb_members.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Slide from 'react-reveal/Slide';

const verticalThumb = {
    position: 'relative',
    height: 'auto',
    paddingBottom: 20
}


const rowWrap = {
    marginBottom: 20,
    textAlign: 'center'
}


const DesignPortfolio = () => {
    return (
        <Container id="design">

<Row className="row" style={rowWrap}>
            <Col sm="12">
            <h2 className="sub-header featured-header">Design</h2>
            <h5 className="small-header">UI/UX prototypes and Mockup Samples</h5>
            </Col>
        </Row>

        <Row className="row-wrap text-center">

                <Col sm="5">

                    <a href="https://xd.adobe.com/view/b20e3eb9-b35e-46f8-5050-ba85e26e97ed-c43f/?fullscreen" target="_blank"  rel="noopener noreferrer"><img src={MobileCarousel} alt="Adobe XD Mobile carousel" style={verticalThumb} /></a>

                    <p><a href="https://xd.adobe.com/view/b20e3eb9-b35e-46f8-5050-ba85e26e97ed-c43f/?fullscreen" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon="globe-americas" /> View Clickable Prototype Online</a></p>

                </Col>


                <Col sm="5">

<a href="https://xd.adobe.com/view/0251be7d-470b-4286-4642-a44227071a64-7460/?fullscreen" target="_blank" rel="noopener noreferrer"><img src={ThumbAnim} alt="Adobe XD Mobile Thumb Animation" style={verticalThumb} /></a>

<p><a href="https://xd.adobe.com/view/0251be7d-470b-4286-4642-a44227071a64-7460/?fullscreen" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon="globe-americas" /> View Clickable Prototype Online</a></p>
</Col>

            </Row>

        

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