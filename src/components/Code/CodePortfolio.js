import React from 'react';
import { Container, Row, Col } from "reactstrap";
import Reviews from '../../images/techreview.gif';
import MDP from '../../images/mdptoolbox.gif';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Fade from 'react-reveal/Fade';

const CodePortfolio = () => {
    return (

        <Container>
            <div id="code">
                <h3 className="sub-header featured-header">React and Django REST API Tech Product Reviews Demo</h3>
                <Fade left>
                    <Row className="row-wrap">
                        <Col sm="6">
                            <a href="https://product-tech-reviews.herokuapp.com/" target="_blank" rel="noopener noreferrer"><img src={Reviews} alt="React Django Tech Reviews Screenshot" className="featured-img-thumb" /></a>
                        </Col>
                        <Col sm="6">

                            <p>The React front-end uses the Fetch API to retrieve the data from the Django REST API Endpoint that I created.
                        The React app points to the Django REST API Endpoint app.</p>

                            <Row className="icon-four">

                                <Col xs="3" lg="3"><p><a href="https://product-tech-reviews.herokuapp.com/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon="globe-americas" /> View Online</a></p></Col>

                                <Col xs="3" lg="3"><p><a href="https://user-tech-review.herokuapp.com/reviews/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon="globe-americas" /> See the APIs</a></p></Col>


                                <Col xs="3" lg="3"> <p><a href="https://github.com/AleeWeb/review_react_frontend_ui" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon="code" /> Front-End</a></p></Col>

                                <Col xs="3" lg="3"><p><a href="https://github.com/AleeWeb/review_django_api_backend" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon="code" /> Back-End</a></p></Col>

                            </Row>
                        </Col>
                    </Row>
                </Fade>


                <Fade right>
                    <Row>

                        <Col sm="6">
                            <h3 className="sub-header featured-header">MDP JSON, jQuery and RESTful API Web App</h3>

                            <p>In 2014-2015, I worked on a couple of web applications using JSON and jQuery to pull and display RESTful API data for the Maryland Department of Planning.</p>

                            <p>This web app tool provides the public with access to information for 100 federal and state programs under the Reinvest Maryland initiative.</p>

                            <p><a href="https://apps.planning.maryland.gov/reinvestmd/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon="globe-americas" /> View Online</a> (Please click on the Toolbox tab)</p>

                        </Col>
                        <Col sm="6">
                            <a href="https://apps.planning.maryland.gov/reinvestmd/" target="_blank" rel="noopener noreferrer"><img src={MDP} alt="MDP Toolbox" className="featured-img-thumb" /></a>
                        </Col>
                    </Row>
                </Fade>

            </div>
        </Container>
    )
}

export default CodePortfolio