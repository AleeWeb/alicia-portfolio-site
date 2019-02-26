import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from "reactstrap";
import UIcon from '../images/ui_mockup.png';
import UXicon from '../images/ux_click.png';
import Codeicon from '../images/code.png';



const Block = styled.div`
    width: 100%;
    height: 373px;
    padding: .8em;
    text-align: center; 
    box-shadow: 0px 7px 13px 5px rgba(158, 91, 248, 0.1);
    -webkit-box-shadow: 0px 7px 13px 5px rgba(158, 91, 248, 0.1); 
    border-radius: 5px;
    margin-bottom: 30px;
`;

const services = [
    {
        id: 1,
        headline: 'User Interface',
        icon: UIcon,
        summary: 'To capture the apps purpose and visuals, I create wireframe and mock-ups.'
    },

    {
        id: 2,
        headline: 'User Experience',
        icon: UXicon,
        summary: 'User research, interactive prototypes and animations are my tools for User Experience.'
    },
    {
        id: 3,
        headline: 'Production Code',
        icon: Codeicon,
        summary: 'Then I transform the approved design into live production code.'
    }
]

const ServiceBlocks = (props) => {
    const serviceList = services.map(service => {

        return (

            <Col sm="4" key={service.id} className="hvr-grow">
                <Block>
                    <div className="inner-block-wrap">
                        <h4 className="block-headline">{service.headline}</h4>

                        <img className="icon-blocks hvr-wobble-skew" src={service.icon} alt="Service Icon" />

                        <p className="block-text">{service.summary}</p>
                    </div>
                </Block>
            </Col>


        )

    })

    return (
        <>

            <Container>
                <div className="summary-wrap" id="summary">
                    <Row>
                        {serviceList}
                    </Row>
                </div>
            </Container>

        </>

    )

}

export default ServiceBlocks