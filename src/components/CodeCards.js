import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import { Row, Col } from "reactstrap";

const cards = [
  {
    id: 1,
    imageSrc:
      "https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180",
    link: "https://product-tech-reviews.herokuapp.com/",
    title: "React Fetch & Django RESTFramework",
    description: "Some quick example text for description.",
    textButton: "Contact"
  },
  {
    id: 2,
    imageSrc:
      "https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180",
    link: "https://django-hr-crudapp.herokuapp.com/",
    title: "Django C.R.U.D. HR Job Tool App",
    description: "Some quick example text for description.",
    textButton: "Contact"
  },
  {
    id: 3,
    imageSrc:
      "https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180",
    link: "https://apps.planning.maryland.gov/reinvestmd/",
    title: "MD Dept. of Planning ToolBox",
    description: "Some quick example text for description.",
    textButton: "Contact"
  },
  {
    id: 4,
    imageSrc:
      "https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180",
    title: "Text",
    description: "Some quick example text for description.",
    textButton: "Contact"
  }
];


const CodeCards = (props) => {
  const cardsList = cards.map(card => {
    return (

      <Col sm="3" key={card.id}>
        <a href={card.link} target="_blank" rel="noopener noreferrer" className="card-links">
          <Card className="hvr-shadow">
            <CardImg top width="100%" src={card.imageSrc} alt="Card image" />
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

        <Row>
          {cardsList}
        </Row>
      </div>

    </>
  );

}

export default CodeCards

