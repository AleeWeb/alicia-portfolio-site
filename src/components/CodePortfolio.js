import React from 'react';
import { Container, Row, Col } from "reactstrap";


const CodePortfolio = () => {
    return (
        <Container>
            <div id="code">
                <h5>Featured Code Portfolio Sections </h5>

                <Row>
                    <Col sm="6">
                        <p>Pic</p>
                    </Col>
                    <Col sm="6">
                        <p>Text</p>
                    </Col>
                </Row>


                <Row>
                    <Col sm="6">
                        <p>Text</p>
                    </Col>
                    <Col sm="6">
                        <p>Pic</p>
                    </Col>
                </Row>

            </div>
        </Container>
    )


}

export default CodePortfolio