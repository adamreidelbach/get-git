import React from 'react'
import { FormGroup, Label, Input } from 'reactstrap';
import './Task.scss'

const Task = ({ instructions, submittedAnswer, answer, command }) => {
  return (
    <div className="Task">
      <FormGroup check className="Task__content">
        <Label check key={instructions}>
          {/* @ToDo - add logic to keep previously correct answer checked */}
          <Input type="checkbox" readOnly checked={submittedAnswer === answer ? true : false} />{' '}
          {instructions}
        </Label>
      </FormGroup>
      {command && (
        <div>
          <p className="Task__command">{command}</p>
        </div>)}
    </div>
  )
}

export default Task
