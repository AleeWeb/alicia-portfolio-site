import React from 'react';
import { Row, Col } from "reactstrap";
import laptop from '../images/header_laptop.svg';
import rightShape from '../images/header_rightblob.png';
import leftShape from '../images/header_leftblob.png';



export class Header extends React.Component {
    render() {
        return (
            <div>

                <img src={leftShape} className="left-shape" alt="Left Shape" />

                <Row>

                    <Col xs="8" sm="6" lg="5" className="header-txtwrap">
                        <h2 className="main-header">Alicia Alexander</h2>
                        <h3 className="sub-header">Software Developer and UI/UX Designer</h3>
                        <h5 className="small-header">I love to design and code apps!</h5>
                    </Col>

                    <Col sm="6" lg="7">
                        <img src={laptop} className="laptopsvg" alt="Laptop SVG" />
                    </Col>

                </Row>


                <img src={rightShape} className="right-shape" alt="Right Shape" />



            </div>

        );
    }
}
