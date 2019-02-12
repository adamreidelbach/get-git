import React, { Component } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import NavFooter from '../../components/NavFooter/NavFooter';
import { Row, Col } from 'reactstrap';
import './Tutorial.scss'
import Learn from '../../components/Learn/Learn';
import Instructions from '../../components/Instructions/Instructions';
import Workflow from '../../components/Workflow/Workflow';
import Console from '../../components/Console/Console';

export class Tutorial extends Component {
  state = {
    arrCount: 0,
    counter: 1,
    totalSteps: 1,
    userAnswer: '',
    submittedAnswer: '',
    submitted: false,
    currentTutorial: {},
    currentStep: {},
    isCorrectAnswer: false,
    popoverOpen: false
  }

  togglePopup = () => {
    this.setState((prevState) => ({
      popoverOpen: !prevState.popoverOpen
    }))
  }

  nextStep = () => {
    this.setState((prevState) => ({
      userAnswer: '',
      submittedAnswer: '',
      submitted: false,
      counter: prevState.counter + 1,
      arrCount: prevState.arrCount + 1,
      currentStep: prevState.currentTutorial.steps[prevState.arrCount + 1],
      isCorrectAnswer: false
    }));
  }

  prevStep = () => {
    this.setState((prevState) => ({
      userAnswer: '',
      submittedAnswer: '',
      submitted: false,
      counter: prevState.counter - 1,
      arrCount: prevState.arrCount - 1,
      currentStep: prevState.currentTutorial.steps[prevState.arrCount - 1],
      isCorrectAnswer: false
    }));
  }

  handleChange = (e) => {
    // store the user's input
    this.setState({ userAnswer: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const answer = this.state.currentStep.instructions.map((instruction) => instruction.answer)
    const { userAnswer } = this.state;
    // store user's answer and clear the input field
    this.setState({
      submittedAnswer: userAnswer,
      submitted: true,
      userAnswer: ''
    })
    // if user's submitted answer matches the correct answer stored inside of instructions.json, set isCorrectAnswer to true
    if (userAnswer === answer.toString()) {
      this.setState({
        isCorrectAnswer: true
      })
    }
  }

  componentWillMount() {
    // get all instructions
    import('../../instructions.json')
      .then((res) => {
        // populate current tutorial where tutorial id matches url path
        const currentTutorial = res.exercises.filter(exercise => exercise.id === this.props.match.params.id);
        console.log('current tutorial', currentTutorial[0])
        console.log('current step', currentTutorial[0].steps[0])
        // set state with current tutorial, current step within that tutorial (starting with the first one), and the amount of total steps
        this.setState({
          currentTutorial: currentTutorial[0],
          currentStep: currentTutorial[0].steps[0],
          totalSteps: currentTutorial[0].steps.length
        })
      })
      .catch((error) => {
        console.error('json file not found', error)
      })
  }

  render() {
    const { instructions, learn, append, previousTerminal } = this.state.currentStep;
    const { submittedAnswer, isCorrectAnswer, popoverOpen } = this.state;
    const terminalText = instructions && instructions.map((instruction) => instruction.terminal)
    const currentHint = instructions && instructions.map((instruction) => instruction.hint)
    console.log("current step", instructions);

    return (
      <>
        <Navbar pageTitle={'Tutorial Name'} darkMode={true} isExercise={true} hint={currentHint} isOpen={popoverOpen} toggle={this.togglePopup} />
        <div className="Tutorial">
          <Row className="Tutorial__row Tutorial__main-row">
            <Col sm="4" className="Tutorial__text-content">
              {learn &&
                <Learn content={learn} />
              }

              {instructions &&
                <Instructions
                  instructions={instructions}
                  submittedAnswer={submittedAnswer}
                  append={append}
                />
              }
            </Col>

            <Console
              handleSubmit={this.handleSubmit}
              handleChange={this.handleChange}
              userAnswer={this.state.userAnswer}
              terminalText={terminalText}
              isCorrectAnswer={isCorrectAnswer}
              previousTerminal={previousTerminal}
            />

            <Workflow />
          </Row>
        </div>
        <NavFooter nextStep={this.nextStep} prevStep={this.prevStep} count={this.state.counter} totalSteps={this.state.totalSteps} />
      </>
    )
  }
}

export default Tutorial
