import React from 'react'
import { Col, Row } from 'reactstrap'
import folderImg from '../../images/folder.png'
import './Workflow.scss'

const Workflow = () => {
  return (
    <Col sm="4" className="Workflow">
      <Row className="Workflow__row">
        <Col sm="6" className="Workflow__workflow-card">
          <span>GitHub Master</span>
          <img className="Workflow__folder-img" alt="folder" src={folderImg} />
        </Col>
        <Col sm="6" className="Workflow__workflow-card">
          <span>GitHub Branch</span>
          <img className="Workflow__folder-img" alt="folder" src={folderImg} />
        </Col>
      </Row>
      <Row className="Workflow__row">
        <Col sm="6" className="Workflow__workflow-card">
          <span>Local Master</span>
          <img className="Workflow__folder-img" alt="folder" src={folderImg} />
        </Col>
        <Col sm="6" className="Workflow__workflow-card">
          <span>Local Branch</span>
          <img className="Workflow__folder-img" alt="folder" src={folderImg} />
        </Col>
      </Row>
    </Col>
  )
}

export default Workflow
