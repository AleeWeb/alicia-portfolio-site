import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import meTravels from '../images/me_travels.jpg';


const AboutMe = () => {
    return (
        <Container id="me">
            <Row>
                <Col sm="12" className="text-center">

                <h3 className="sub-header featured-header">About Me</h3>

                <img id="collagepic" src={meTravels} alt="Travel collage" />

                    <p>Hello. I have been working in design and tech since 2008. As technology has evolved, I have adapted and advanced with it.</p>

                    <p>I primarily have experience with design and I enjoy bringing design concepts to
                        life. My goal is to always keep growing as a professional.</p>

                </Col>
                </Row>
        </Container>

    )

};

export default AboutMe;
