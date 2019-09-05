import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from "reactstrap";
import laptop from '../../images/header_laptop.svg';
import rightShape from '../../images/header_rightblob1.png';
import leftShape from '../../images/header_leftblob.png';

const HeaderBlock = styled.div`
    min-height: 600px;
`
const leftBlob = {
    float: 'left',
    position: 'absolute',
    left: '0'
};

const rightBlob = {
    float: 'right',
    position: 'absolute',
    top: '0',
    right: '0'
}

const laptopStyle = {
    position: 'relative',
    top: '-100px'
}

const headerTxtwrap = {
    position: 'relative',
    left: '19%',
    top: '100px',
}

const mainHeader = {
    fontWeight: '700',
    color: '#000'
}

const bannerSubheader = {
    fontWeight: '400',
    fontSize: '1.3em',
    color: '#000'
}



const Header = () => {
    return (
        <Container>
            <HeaderBlock>
                <img src={leftShape} style={leftBlob}  alt="Left Shape" />
                <Row>
                    <Col xs="9" sm="6" lg="5" style={headerTxtwrap}>
                        <h2 style={mainHeader}>Alicia Alexander</h2>
                        <h3 style={bannerSubheader}>Front-End Developer and Designer</h3>
                        <h5 className="phrase-header">I love to design and code!</h5>
                    </Col>

                    <Col sm="6" lg="7">
                        <img src={laptop} style={laptopStyle} className="laptopsvg" alt="Laptop SVG" />
                    </Col>
                </Row>

                <img src={rightShape} style={rightBlob} className="right-shape" alt="Right Shape" />

            </HeaderBlock>
        </Container>
    )
}

export default Header
