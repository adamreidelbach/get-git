import React from 'react'
import { Col, Form, InputGroup, InputGroupAddon, Input } from 'reactstrap'
import './Console.scss'

const Console = ({ handleChange, handleSubmit, userAnswer, isCorrectAnswer, currentTerminal, previousTerminal }) => {
  return (
    <Col sm="4" className="Console">
      {previousTerminal &&
        <span className="Console__previous-terminal" dangerouslySetInnerHTML={{ __html: previousTerminal }}></span>
      }
      {isCorrectAnswer &&
        <span className="Console__previous-terminal" dangerouslySetInnerHTML={{ __html: currentTerminal }}></span>
      }
      <Form onSubmit={handleSubmit}>
        <InputGroup>
          <InputGroupAddon addonType="prepend">$</InputGroupAddon>
          <Input name="userAnswer" type="text" value={userAnswer} onChange={handleChange} /><i></i>
        </InputGroup>
      </Form>
    </Col>
  )
}

export default Console
