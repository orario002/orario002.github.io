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
          <Col xs={4} className="p-2"><span className="number-circle">1</span>Quick search by location<FontAwesomeIcon
            icon={faCompass} size="lg"/></Col>
          <Col xs={4} className="p-2"><span className="number-circle">2</span>Choose between a desired
            time<FontAwesomeIcon
              icon={faCalendarAlt} size="lg"/></Col>
          <Col xs={4} className="p-2"><span className="number-circle">3</span>View photo of your choice<FontAwesomeIcon
            icon={faCameraRetro} size="lg"/></Col>
        </Row>

        <Form className="search">
          <Row>
            <FormGroup>
              <Label for="searchLocation">Search</Label>
              <Input type="location" name="location" id="searchLocation"
                     placeholder="CITY,  TOWN, AREA NAME, POSTCODE"/>
            </FormGroup>
          </Row>

          <Row>
            <FormGroup>
              <Label for="searchDistance">Distance</Label>
              <select type="distance" name="distance" id="searchDistance">
                <option>This area only</option>
                <option>Under 1 mile</option>
                <option>Under 3 miles</option>
                <option>Under 5 miles</option>
                <option>Under 10 miles</option>
                <option>Under 50 miles</option>
              </select>
            </FormGroup>
          </Row>

          <Row>
              <FormGroup>
                <Label for="searchFrom">From</Label>
                <Input type="from" name="from" id="searchFrom" placeholder="YEAR"/>
                <Label for="searchTo">To</Label>
                <Input type="to" name="to" id="searchTo" placeholder="YEAR"/>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="checkbox"/>{' '}
                  Black and white only
                </Label>
              </FormGroup>
          </Row>

          <Button>Submit</Button>
        </Form>

        <Row className="cards">
          <Col md={4} xs={6}>
            <div className="card__item">
              <div className="card">
                <div className="card__image card__image--upload"></div>
                <div className="card__content">
                  <h3 className="card__title">SHARE YOU OWN</h3>
                  <p className="text-left card__text">Take part of our historic photo community and start sharing
                    today!</p>
                  <Button>Upload</Button>
                </div>
              </div>
            </div>
          </Col>
          <Col md={4} xs={6}>
            <div className="card__item">
              <div className="card">
                <div className="card__image card__image--register"></div>
                <div className="card__content">
                  <h3 className="card__title">JOIN THE COMMUNITY</h3>
                  <p className="text-left card__text">Take part of our historic photo community and start sharing
                    today!</p>
                  <Button>Register</Button>
                </div>
              </div>
            </div>
          </Col>
          <Col md={4} xs={6}>
            <div className="card__item">
              <div className="card">
                <div className="card__image card__image--pricing"></div>
                <div className="card__content">
                  <h3 className="card__title">PHOTO REPAIR</h3>
                  <p className="text-left card__text">Do you have any old photo that requires restoration?</p>
                  <Button>Pricing</Button>
                </div>
              </div>
            </div>
          </Col>

        </Row>

      </Container>
      </body>
    </div>
  );
}

export default App;
