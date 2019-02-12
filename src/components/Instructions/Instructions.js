import React from 'react'
import Task from './childComponents/Task/Task';
import './Instructions.scss'

const Instructions = ({ instructions, submittedAnswer, append }) => {
  const lastAnswer = instructions[instructions.length - 1].answer
  return (
    <div className="Instructions">
      <h3 className="Instructions__header">Instructions</h3>
      {instructions.map((task) =>
        <Task
          key={task.id}
          instructions={task.instruction}
          command={task.command}
          submittedAnswer={submittedAnswer}
          answer={task.answer}
        />)}
      {/* get the last correct answer, check it against the user's answer (or last user answer if more than one question) and show the appended text, if applicable */}
      {submittedAnswer === lastAnswer && append && (
        <div>
          <p className="Instructions__append"><strong>{append}</strong></p>
        </div>)}
    </div>
  )
}

export default Instructions;
