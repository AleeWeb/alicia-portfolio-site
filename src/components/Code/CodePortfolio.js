import React from 'react';
import { Container, Row, Col } from "reactstrap";
import DataDash from '../../images/reactd3_firebasedash.jpg';
import Reviews from '../../images/techreview.gif';
import MDP from '../../images/mdptoolbox.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Fade from 'react-reveal/Fade';

const CodePortfolio = () => {
    return (

        <Container>
            <div id="code">
                <h3 className="sub-header featured-header">React + D3, Firebase Auth and Cloud Firestore Demo</h3>
                <Fade left>
                    <Row className="row-wrap">
                        <Col sm="6">
                            <a href="https://ms-dashboard-70187.firebaseapp.com/" target="_blank" rel="noopener noreferrer"><img src={DataDash} alt="React Django Tech Reviews Screenshot" className="featured-img-thumb" /></a>
                        </Col>
                        <Col sm="6">

                            <p>This project visualizes data from a Cloud Firestore database using D3. I also use Firebase auth login and registration with React Router.</p>

                            <p>To see the JavaScript promise get request for the Firestore Database inside the useEffect Hook function and the D3 integration, please look at the <a href="https://github.com/AleeWeb/react-d3firestore-dash/blob/master/src/components/charts/BarChart.js" target="_blank" rel="noopener noreferrer">BarChart.js</a> file specifically.</p>


                            <p>To login, you can use your Google account, register a new email or use the demo login here: Username: <strong>user@email.com</strong> and Password: <strong>login123!</strong></p>

                            <Row className="icon-four">

                                <Col xs="3" lg="3"><p><a href="https://ms-dashboard-70187.firebaseapp.com/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon="globe-americas" /> View Online</a></p></Col>

                                <Col xs="3" lg="3"> <p><a href="https://github.com/AleeWeb/react-d3firestore-dash" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon="code" /> GitHub Code</a></p></Col>

                            </Row>
                        </Col>
                    </Row>
                </Fade>


                <Fade right>
                    <Row>

                        <Col sm="6">
                            <h3 className="sub-header featured-header">React and Django REST API Tech Product Reviews Demo</h3>

                            <p>The React front-end uses the Fetch API to retrieve the data from the Django REST API Endpoint that I created.
                        The React app points to the Django REST API Endpoint app.</p>

                            <Row className="icon-four">

                                <Col xs="3" lg="3"><p><a href="https://product-tech-reviews.herokuapp.com/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon="globe-americas" /> View Online</a></p></Col>

                                <Col xs="3" lg="3"><p><a href="https://user-tech-review.herokuapp.com/reviews/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon="globe-americas" /> See the APIs</a></p></Col>


                                <Col xs="3" lg="3"> <p><a href="https://github.com/AleeWeb/review_react_frontend_ui" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon="code" /> Front-End</a></p></Col>

                                <Col xs="3" lg="3"><p><a href="https://github.com/AleeWeb/review_django_api_backend" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon="code" /> Back-End</a></p></Col>

                            </Row>
                        </Col>
                        <Col sm="6">
                            <a href="https://product-tech-reviews.herokuapp.com/" target="_blank" rel="noopener noreferrer"><img src={Reviews} alt="React Django Tech Reviews Screenshot" className="featured-img-thumb" /></a>
                        </Col>
                    </Row>
                </Fade>

                <Fade left>
                    <h3 className="sub-header featured-header">MDP JSON, jQuery and RESTful API Web App</h3>
                    <Row className="row-wrap">

                        <Col sm="6">
                            <a href="https://apps.planning.maryland.gov/reinvestmd/" target="_blank" rel="noopener noreferrer"><img src={MDP} alt="MDP Screenshot" className="featured-img-thumb" /></a>
                        </Col>
                        <Col sm="6">

                            <p>In 2014-2015, I worked on a couple of web applications using JSON and jQuery to pull and display RESTful API data for the Maryland Department of Planning.</p>

                            <p>This web app tool provides the public with access to information for 100 federal and state programs under the Reinvest Maryland initiative.</p>

                            <p><a href="https://apps.planning.maryland.gov/reinvestmd/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon="globe-americas" /> View Online</a> (Please click on the Toolbox tab)</p>

                        </Col>
                    </Row>
                </Fade>



            </div>
        </Container>
    )
}

export default CodePortfolio