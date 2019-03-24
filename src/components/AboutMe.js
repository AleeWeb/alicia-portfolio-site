import React from 'react';
import { UncontrolledCarousel, Container, Row, Col } from 'reactstrap';
import blueTop from '../images/me_bluetop.jpg';
import meTravels from '../images/me_travels.jpg';
import amyWineHouse from '../images/me_amywmural.jpg';

const items = [
    {
        src: blueTop,
        altText: 'Office cubicle',
        caption: '',
        header: 'From the Office Cubicle to...'
    },
    {
        src: meTravels,
        altText: 'Travel pic collage',
        caption: '',
        header: 'Remote Life and Travel!'
    },
    {
        src: amyWineHouse,
        altText: 'Amy Winehouse mural',
        caption: '',
        header: 'Amy WineHouse Mural Camden Town London'
    }
];

const AboutMe = () => {

    return (

        <Container id="me">

            <Row>
                <UncontrolledCarousel items={items} />
            </Row>

        <Row>
            <Col sm="12" align="center">
            <h3 className="sub-header featured-header">About Me</h3>

                <p>Hello. I have been working in web development since 2008. As technology has evolved, I have adapted and advanced with it.</p>

                <p>I primarily have experience working in the front-end over the years and I enjoy bringing design concepts to
                     life through code. I entered the world of full stack development in the Fall of 2017 where I gained new experience with the back-end.
                     My goal is to always keep growing as a professional.</p>

            </Col>
            </Row>

        </Container>

    )

};

export default AboutMe;