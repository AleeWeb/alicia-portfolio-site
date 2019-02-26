import React from 'react';
import { Container, Row, Col } from "reactstrap";
import Reviews from '../images/techreview.gif';
import MDP from '../images/mdptoolbox.gif';


const CodePortfolio = () => {
    return (
        <Container>
            <div id="code">

            <h3 className="sub-header featured-header">React and Django REST Tech Product Reviews Demo</h3>

                <Row className="row-wrap">

                    <Col sm="6">
                    <a href="https://product-tech-reviews.herokuapp.com/" target="_blank" rel="noopener noreferrer"><img src={Reviews} alt="React Django Tech Reviews Screenshot" className="featured-img-thumb" /></a>
                    </Col>
                    <Col sm="6">

                    <p>The React front-end uses the Fetch API to retrieve the data from the Django REST API Endpoint that I created. 
                        The React app points to the Django REST API Endpoint app.</p>

                        <p><a href="https://product-tech-reviews.herokuapp.com/" target="_blank" rel="noopener noreferrer">View in the Browser</a></p>

                        <p><a href="https://user-tech-review.herokuapp.com/reviews/" target="_blank" rel="noopener noreferrer">The Django REST Framework API</a></p>


                        <p><a href="https://github.com/AleeWeb/review_react_frontend_ui" target="_blank" rel="noopener noreferrer">View React and Fetch API Front-End Code</a></p>

                        <p><a href="https://github.com/AleeWeb/review_django_api_backend" target="_blank" rel="noopener noreferrer">Check out the Django REST Framework API Back-End Code</a></p>

                    </Col>
                </Row>

            
                <Row>

                    <Col sm="6">
                    <h3 className="sub-header featured-header">React and Django REST Tech Product Reviews Demo</h3>

                        <p>In 2014-2015, I worked on a couple of web applications using JSON and jQuery to pull and display RESTFUL API data for the Maryland Department of Planning.</p>

                        <p>This web app tool provides the public with access to information for 100 federal and state programs under the Reinvest Maryland initiative.</p>

                        <p><a href="https://apps.planning.maryland.gov/reinvestmd/" target="_blank" rel="noopener noreferrer">View in the Browser</a> (Click on the Toolbox tab)</p>

                    </Col>
                    <Col sm="6">
                    <a href="https://apps.planning.maryland.gov/reinvestmd/" target="_blank" rel="noopener noreferrer"><img src={MDP} alt="MDP Toolbox" className="featured-img-thumb" /></a>
                    </Col>
                </Row>

            </div>
        </Container>
    )


}

export default CodePortfolio