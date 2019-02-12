import React from 'react'
import { Button } from 'reactstrap';
import './NavFooter.scss'

export default function NavFooter(props) {
  return (
    <div className="NavFooter">
      <Button onClick={props.prevStep} disabled={props.count <= 1}>Back</Button>
      <span className="NavFooter__counter">{props.count} / {props.totalSteps}</span>
      <Button onClick={props.nextStep} disabled={props.count === props.totalSteps}>Next</Button>
    </div>
  )
}