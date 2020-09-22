import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

import {Button, Col, Container, Dropdown, Form, FormGroup, Input, Label, Nav, NavItem, NavLink, Row} from 'reactstrap';
import logo from "./logo.svg";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCalendarAlt, faCameraRetro, faCompass} from "@fortawesome/free-solid-svg-icons";

function App() {
    return (
      <div className="App">
        <header className="App-header">
          <Nav>
            <img src={logo} className="App-logo" alt="logo"/>
            <NavItem><NavLink href="#">Upload</NavLink></NavItem>
            <NavItem><NavLink href="#">My Album</NavLink></NavItem>
            <NavItem><NavLink href="#">Photo Repair</NavLink></NavItem>
            <NavItem><NavLink href="#">Help</NavLink></NavItem>
          </Nav>
        </header>
        <body>
        <Container>

          <Row>
            <Col xs={4} className="p-2"><FontAwesomeIcon icon={faCompass}/>Quick search by location</Col>
            <Col xs={4} className="p-2"><FontAwesomeIcon icon={faCalendarAlt}/>Choose between a duration</Col>
            <Col xs={4} className="p-2"><FontAwesomeIcon icon={faCameraRetro}/>View photo of your choice</Col>
          </Row>

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

          <Row>
            <Col sm="4">
              <img alt="group of friends picnic"/>
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

        </Container>
        </body>
      </div>
    );
}

export default App;
