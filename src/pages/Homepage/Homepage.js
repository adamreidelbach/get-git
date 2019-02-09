import React, { Component } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import SingleCard from '../../components/SingleCard/SingleCard'
import { Row, Col, CardDeck, Container } from 'reactstrap'
import './Homepage.scss'

class Homepage extends Component {
  render() {
    const tutorialCards = [
      {
        cardTitle: 'What is git?',
        cardText: 'A basic overview of working with git.',
        link: 'what-is-git',
        key: '/tut1'
      },
      {
        cardTitle: 'Getting Started',
        cardText: 'Getting started using git, a step by step tutorial.',
        link: 'getting-started',
        key: '/tut2'
      },
      {
        cardTitle: 'Tutorial 1 - Github Workflow',
        cardText: 'Here\'s a tutorial to practice using the Github workflow.',
        link: 'workflow-tutorial',
        key: '/tut3'
      },
      {
        cardTitle: 'Challenge 1 - Github Workflow',
        cardText: 'Let\'s test your knowledge of the Github workflow.',
        link: 'workflow-challenge',
        key: '/tut4'
      },
      {
        cardTitle: 'Tutorial 2 - Checkout',
        cardText: 'A tutorial to cover using git checkout and how it works.',
        link: 'checkout-tutorial',
        key: '/tut5'
      },
      {
        cardTitle: 'Challenge 2 - Checkout',
        cardText: 'Let\'s test your knowledge of using git checkout in a real life situation.',
        link: 'checkout-challenge',
        key: '/tut6'
      },
      {
        cardTitle: 'Tutorial 3 - Running A Teammate\'s Code',
        cardText: 'A tutorial to learn how to run your teammate\'s code.',
        link: 'teammate-code-tutorial',
        key: '/tut7'
      },
      {
        cardTitle: 'Challenge 3 - Running A Teammate\'s Code Challenge',
        cardText: 'Test your knowledge of how to run a teammate\'s code.',
        link: 'teammate-code-challenge',
        key: '/tut8'
      }
    ];

    return (
      <div className="Homepage">
        <Navbar pageTitle="Choose An Exercise" isExercise={false} />
        <Container>
          <Row>
            <CardDeck className="Homepage__cards">
              {tutorialCards && tutorialCards.map((card) => (
                <Col sm="6" key={card.key}>
                  <SingleCard cardTitle={card.cardTitle} cardText={card.cardText} link={card.link} />
                </Col>
              ))}
            </CardDeck>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Homepage;
