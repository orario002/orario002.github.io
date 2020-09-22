import React from 'react';
import {Button, Col, Dropdown, Form, FormGroup, Input, Label, Row} from "reactstrap";


function Search() {
  return (
    <div>
      <Row>
        <Form className="search">
          <Row>
            <FormGroup>
              <Label for="searchLocation">Search</Label>
              <Input type="location" name="location" id="searchLocation"
                     placeholder="CITY,  TOWN, AREA NAME, POSTCODE"/>
            </FormGroup>
          </Row>
          <Row>
            <Col xs={4}>
              <FormGroup>
                <Label for="searchFrom">From</Label>
                <Input type="from" name="from" id="searchFrom" placeholder="YEAR"/>
              </FormGroup>
              <FormGroup>
                <Label for="searchTo">To</Label>
                <Input type="to" name="to" id="searchTo" placeholder="YEAR"/>
              </FormGroup>
            </Col>
            <Col xs={4}>
              <FormGroup>
                <Label for="searchDistance">Distance</Label>
                <Dropdown type="distance" name="distance" id="searchDistance">
                  <option>This area only</option>
                  <option>Under 1 mile</option>
                  <option>1-3 miles</option>
                  <option>3-5 miles</option>
                  <option>5-10 miles</option>
                  <option>10-50 miles</option>
                </Dropdown>
              </FormGroup>
              <FormGroup>
                <Label for="searchTimeBack">Time Back</Label>
                <Dropdown type="timeBack" name="timeBack" id="searchTimeBack">
                  <option>10 year2 ago</option>
                  <option>20 years ago</option>
                  <option>30 years ago</option>
                  <option>50 years ago</option>
                  <option>100 years ago</option>
                  <option>200 years ago</option>
                </Dropdown>
              </FormGroup>
            </Col>
            <Col xs={4}>
              <FormGroup check>
                <Label check>
                  <Input type="checkbox"/>{' '}
                  Black and white only
                </Label>
              </FormGroup>
            </Col>
          </Row>
          <Button>Submit</Button>
        </Form>
      </Row>
    </div>
  );
}
export default Search;
