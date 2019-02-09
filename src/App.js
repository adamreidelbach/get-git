import React, { Component } from 'react'
import Navbar from './components/Navbar/Navbar'
import SingleCard from './components/SingleCard/SingleCard';
import { Row, Col, CardDeck, Container } from 'reactstrap';
import './App.scss'

class App extends Component {
  render() {
    const tutorialCards = [
      {
        cardTitle: 'What is git?',
        cardText: 'A basic overview of working with git.',
        link: '/tut1',
        key: '/tut1'
      },
      {
        cardTitle: 'Getting Started',
        cardText: 'Getting started using git, a step by step tutorial.',
        link: '/tut2',
        key: '/tut2'
      },
      {
        cardTitle: 'Tutorial 1 - Github Workflow',
        cardText: 'Here\'s a tutorial to practice using the Github workflow.',
        link: '/tut3',
        key: '/tut3'
      },
      {
        cardTitle: 'Challenge 1 - Github Workflow',
        cardText: 'Let\'s test your knowledge of the Github workflow.',
        link: '/tut4',
        key: '/tut4'
      },
      {
        cardTitle: 'Tutorial 2 - Checkout',
        cardText: 'A tutorial to cover using git checkout and how it works.',
        link: '/tut5',
        key: '/tut5'
      },
      {
        cardTitle: 'Challenge 2 - Checkout',
        cardText: 'Let\'s test your knowledge of using git checkout in a real life situation.',
        link: '/tut6',
        key: '/tut6'
      },
      {
        cardTitle: 'Tutorial 3 - Testing A Teammates Code',
        cardText: 'A tutorial to learn how to run your teammate\'s code.',
        link: '/tut7',
        key: '/tut7'
      },
      {
        cardTitle: 'Challenge 3 - Testing A Teammates Code Challenge',
        cardText: 'Test your knowledge of how to run a teammate\'s code.',
        link: '/tut8',
        key: '/tut8'
      }
    ];

    return (
      <div className="App">
        <Navbar pageTitle="Choose An Exercise" isExercise={false} />
        <Container>
          <Row>
            <CardDeck className="App__cards">
              {tutorialCards.map((card, i) => (
                <Col sm="6">
                  <SingleCard key={i} cardTitle={card.cardTitle} cardText={card.cardText} link={card.link} />
                </Col>
              ))}
            </CardDeck>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
