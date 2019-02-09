import React from 'react'
import { Button } from 'reactstrap';
import './NavFooter.scss'

export default function NavFooter() {
  return (
    <div className="NavFooter">
      <Button>Back</Button>
      <span className="NavFooter__counter">1 / 1</span>
      <Button>Next</Button>
    </div>
  )
}