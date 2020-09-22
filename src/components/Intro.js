import React from 'react';
import {Col, Row} from "reactstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCalendarAlt, faCameraRetro, faCompass} from "@fortawesome/free-solid-svg-icons";

function Intro() {
  return (
    <div>
      <Row>
        <Col xs={4} className="p-2"><FontAwesomeIcon icon={faCompass}/>Quick search by location</Col>
        <Col xs={4} className="p-2"><FontAwesomeIcon icon={faCalendarAlt}/>Choose between a duration</Col>
        <Col xs={4} className="p-2"><FontAwesomeIcon icon={faCameraRetro}/>View photo of your choice</Col>
      </Row>
    </div>
  );
}

export default Intro;








