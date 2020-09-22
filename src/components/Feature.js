import React from "react";
import {Button, Col, Row} from "reactstrap";

function Feature() {
  return (
    <div>
      <Row>
        <Col sm="4">
          <img alt="group of friends picnic" />
          <h3>SHARE YOU OWN</h3>
          <p className="text-left">Take part of our historic photo community and start sharing today!</p>
          <Button>Upload</Button>
        </Col>
        <Col sm="4">
          <img alt="going through old album"/>
          <h3>JOIN THE COMMUNITY</h3>
          <p className="text-left">Take part of our historic photo community and start sharing today!</p>
          <Button>Register</Button>
        </Col>
        <Col sm="4">
          <img alt="display on the table"/>
          <h3>PHOTO REPAIR</h3>
          <p className="text-left">Do you have any old photo that requires restoration? We can do that with a small
            fee.</p>
          <Button>Pricing</Button></Col>
      </Row>
    </div>
  );
}

export default Feature;



