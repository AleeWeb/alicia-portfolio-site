import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import { Row, Col } from "reactstrap";
import NgMap from '../../images/cardthumb_angular_googlemaps.png';
import JobHR from '../../images/cardthumb_djangohr.png';
import CustomerRest from '../../images/cardthumb_customerapi.png';
import OpenWeather from '../../images/cardthumb_openweather.png';
import Flip from 'react-reveal/Flip';


const cards = [
  {
    id: 1,
    imageSrc: NgMap,
    link: "https://github.com/AleeWeb/ang-google-maps",
    title: "Angular IP API & Google Maps",
    description: "A simple Angular 7 and ipapi.co API app that displays user location on Google maps."
  },
  {
    id: 2,
    imageSrc: JobHR,
    link: "https://github.com/AleeWeb/django_hrjobapp",
    title: "Django H.R. Job Management App",
    description: "This is the basic C.R.U.D. app for managing job postings."

  },
  {
    id: 3,
    imageSrc: CustomerRest,
    link: "https://restapi-customer-log.herokuapp.com/customers/",
    title: "Django REST API Customer Log Demo",
    description: "This is custom API data that I created!"
  },
  {
    id: 4,
    imageSrc: OpenWeather,
    link: "https://codepen.io/Aleeweb/full/qjYRBN/",
    title: "Open Weather Map API web app",
    description: "Converts temperature from Celsius to Fahrenheit. getJSON used to retrieve data."
  }
];


const CodeCards = (props) => {
  const cardsList = cards.map(card => {
    return (
      <Col sm="3" lg="3" key={card.id}>
        <a href={card.link} target="_blank" rel="noopener noreferrer" className="card-links">
          <Card className="hvr-shadow">
            <CardImg top width="100%" src={card.imageSrc} alt="Card image" className="hvr-shadow" />
            <CardBody>
              <CardTitle className="card-main-title">{card.title}</CardTitle>
              <CardText className="card-text">{card.description}</CardText>
            </CardBody>
          </Card>
        </a>
      </Col>
    )

  })

  return (
    <>
      <div id="slantbg"></div>
      <div className="card-wrap">
        <Flip top>
          <Row>
            {cardsList}
          </Row>
        </Flip>
      </div>

    </>
  );

}

export default CodeCards

