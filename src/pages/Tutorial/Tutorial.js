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
    // simply used to navigate between steps of each tutorial
    arrCount: 0,
    // keep track of steps in NavFooter
    stepCounter: 1,
    // keep track of steps in NavFooter
    totalSteps: 1,
    // inside of the current step, keep track of which task the user is on
    taskPosition: 0,
    // user's answer, as they type it
    userAnswer: '',
    // collect user answer after submitted
    submittedAnswer: '',
    // of all the tutorials, which one is the user seeing?
    currentTutorial: {},
    // which step within that tutorial
    currentStep: {},
    // which task within that step
    currentTask: {},
    isCorrectAnswer: false,
    // for question mark popup
    popoverOpen: false
  }

  // @todo: add logic for incorrect answer, and append to terminal
  // @todo: add logic to handle styling in Workflow component
  // @todo: add logic to handle inactive attribute to help popup

  togglePopup = () => {
    // use setState as function, setState may be batched together, this.state can be unreliable. "Subsequent calls will override values from previous calls in the same cycle, so the quantity will only be incremented once. If the next state depends on the previous state, we recommend using the updater function form, instead"
    this.setState((prevState) => ({
      popoverOpen: !prevState.popoverOpen
    }))
  }

  nextStep = () => {
    this.setState((prevState) => ({
      userAnswer: '',
      submittedAnswer: '',
      stepCounter: prevState.stepCounter + 1,
      arrCount: prevState.arrCount + 1,
      currentStep: prevState.currentTutorial.steps[prevState.arrCount + 1],
      currentTask: prevState.currentTutorial.steps[prevState.arrCount + 1].instructions === undefined ? {} : prevState.currentTutorial.steps[prevState.arrCount + 1].instructions[prevState.taskPosition],
      isCorrectAnswer: false
    }));
  }

  prevStep = () => {
    this.setState((prevState) => ({
      userAnswer: '',
      submittedAnswer: '',
      stepCounter: prevState.stepCounter - 1,
      arrCount: prevState.arrCount - 1,
      currentStep: prevState.currentTutorial.steps[prevState.arrCount - 1],
      currentTask: prevState.currentTutorial.steps[prevState.arrCount - 1].instructions[0],
      isCorrectAnswer: false
    }));
  }

  handleChange = (e) => {
    // store the user's input
    this.setState({ userAnswer: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // store user's answer and clear the input field
    this.setState({
      submittedAnswer: this.state.userAnswer,
      userAnswer: ''
    })
    // if user's submitted answer matches the correct answer stored inside of instructions.json, set isCorrectAnswer to true
    if (this.state.userAnswer === this.state.currentTask.answer) {
      this.setState({
        isCorrectAnswer: true
      })
    }
    // if the instructions array equals the task position, then reset it back to 0
    if (this.state.currentStep.instructions.length !== this.state.taskPosition) {
      this.setState({
        taskPosition: 0
      })
    }
    // if there are more than one tasks inside of the instructions array and the user answers with the correct answer, move to the next task inside of the array
    if (this.state.currentStep.instructions.length > 1 && (this.state.userAnswer === this.state.currentTask.answer)) {
      this.setState((prevState) => ({
        taskPosition: prevState.taskPosition + 1,
        currentTask: prevState.currentTutorial.steps[prevState.arrCount].instructions[prevState.taskPosition + 1]
      }))
    }
  }

  componentWillMount() {
    // get all instructions
    import('../../instructions.json')
      .then((res) => {
        // populate current tutorial where tutorial id matches url path
        const currentTutorial = res.exercises.filter(exercise => exercise.id === this.props.match.params.id);
        // set state with current tutorial, current step within that tutorial (starting with the first one), and the amount of total steps
        this.setState({
          currentTutorial: currentTutorial[0],
          currentStep: currentTutorial[0].steps[0],
          totalSteps: currentTutorial[0].steps.length,
          currentTask: currentTutorial[0].steps[0].instructions === undefined ? {} : currentTutorial[0].steps[0].instructions[0]
        })
      })
      .catch((error) => {
        console.error(error)
      })
  }

  render() {
    const { instructions, learn, append, previousTerminal } = this.state.currentStep;
    const { submittedAnswer, popoverOpen, isCorrectAnswer } = this.state;
    const hint = this.state.currentTask === undefined ? '' : this.state.currentTask.hint;
    const terminal = this.state.currentTask === undefined ? '' : this.state.currentTask.terminal;
    const lastAnswer = instructions === undefined ? '' : [instructions.length - 1].answer;
    console.log(this.state.currentTask === undefined ? '' : this.state.currentTask)

    return (
      <>
        <Navbar pageTitle={this.state.currentTutorial.id} darkMode={true} isExercise={true} hint={hint} isOpen={popoverOpen} toggle={this.togglePopup} />

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
                  lastAnswer={lastAnswer}
                />
              }
            </Col>

            <Console
              handleSubmit={this.handleSubmit}
              handleChange={this.handleChange}
              userAnswer={this.state.userAnswer}
              terminalText={terminal}
              previousTerminal={previousTerminal}
              isCorrectAnswer={isCorrectAnswer}
            />

            <Workflow />
          </Row>
        </div>
        <NavFooter nextStep={this.nextStep} prevStep={this.prevStep} count={this.state.stepCounter} totalSteps={this.state.totalSteps} />
      </>
    )
  }
}

export default Tutorial
