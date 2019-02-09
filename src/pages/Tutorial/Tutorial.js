import React, { Component } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import NavFooter from '../../components/NavFooter/NavFooter';
import { Row, Col, FormGroup, Label, Input, InputGroup, InputGroupAddon } from 'reactstrap';
import folderImg from '../../images/folder.png'
import './Tutorial.scss'

export class Tutorial extends Component {
  render(props) {
    return (
      <>
        <Navbar pageTitle={'Tutorial Name'} darkMode={true} isExercise={true} />
        <div className="Tutorial">
          <Row className="Tutorial__row Tutorial__main-row">
            <Col sm="4" className="Tutorial__text-content">
              <div>
                <h3 className="Tutorial__learn-header">Learn</h3>
                <p className="Tutorial__learn-content">Test Learn Content</p>
              </div>
              <div>
                <h3 className="Tutorial__instructions-header">Instructions</h3>
                <FormGroup check className="Tutorial__instructions-content">
                  <Label check>
                    <Input type="checkbox" checked />{' '}
                    Test Learn Instructions
                  </Label>
                </FormGroup>
              </div>
            </Col>

            <Col sm="4" className="Tutorial__console">
              <InputGroup>
                <InputGroupAddon addonType="prepend">$</InputGroupAddon>
                <Input /><i></i>
              </InputGroup>
            </Col>

            <Col sm="4" className="Tutorial__workflow">
              <Row className="Tutorial__row">
                <Col sm="6" className="Tutorial__workflow-card">
                  <span>GitHub Master</span>
                  <img className="Tutorial__folder-img" alt="folder" src={folderImg} />
                </Col>
                <Col sm="6" className="Tutorial__workflow-card">
                  <span>GitHub Branch</span>
                  <img className="Tutorial__folder-img" alt="folder" src={folderImg} />
                </Col>
              </Row>
              <Row className="Tutorial__row">
                <Col sm="6" className="Tutorial__workflow-card">
                  <span>Local Master</span>
                  <img className="Tutorial__folder-img" alt="folder" src={folderImg} />
                </Col>
                <Col sm="6" className="Tutorial__workflow-card">
                  <span>Local Branch</span>
                  <img className="Tutorial__folder-img" alt="folder" src={folderImg} />
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
        <NavFooter />
      </>
    )
  }
}

export default Tutorial
