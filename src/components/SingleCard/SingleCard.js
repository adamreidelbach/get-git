import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardText, CardBody, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom'
import CodeImg from '../../images/code.svg'
import './SingleCard.scss'

const SingleCard = props => {
  const { cardTitle, cardText, link } = props;
  return (
    <Card className="SingleCard">
      <Link to={link}>
        <CardBody className="SingleCard__body">
          <img src={CodeImg} alt="command line" className="SingleCard__image" />
          <CardTitle className="SingleCard__title"><h3>{cardTitle}</h3></CardTitle>
          <CardText className="SingleCard__text"><span>{cardText}</span></CardText>
        </CardBody>
      </Link>
    </Card>
  );
}

SingleCard.propTypes = {
  cardTitle: PropTypes.string.isRequired,
  cardText: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
};

export default SingleCard
