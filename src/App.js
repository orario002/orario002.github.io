import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

import {
  Button,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Navbar,
  Nav,
  NavbarBrand,
  NavItem,
  NavLink,
  Row
} from 'reactstrap';
import logo from "./logo.svg";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHistory, faCameraRetro, faThumbtack, faUser} from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar role="navigation" aria-label="Main">
          <NavbarBrand href="/"><img src={logo} className="App-logo" alt="logo"/></NavbarBrand>
          <Nav>
            <NavItem><NavLink href="#">Upload</NavLink></NavItem>
            <NavItem><NavLink href="#">My Album</NavLink></NavItem>
            <NavItem><NavLink href="#">Photo Repair</NavLink></NavItem>
            <NavItem><NavLink href="#">Help</NavLink></NavItem>
            <NavItem><NavLink href="#"><FontAwesomeIcon
              icon={faUser} size="lg"/></NavLink></NavItem>
          </Nav>
        </Navbar>
      </header>
      <body>
      <Container>

        <h1>Walk down memory lane with Good Times Photo</h1>

        <div className="blocks">
          <div className="block"><span className="number-circle">1</span><p className="block--text">Quick search
            by location</p><FontAwesomeIcon
            icon={faThumbtack} size="lg"/></div>
          <div className="block"><span className="number-circle">2</span><p className="block--text">Choose
            between a desired
            time</p><FontAwesomeIcon
            icon={faHistory} size="lg"/></div>
          <div className="block"><span className="number-circle">3</span><p className="block--text">View photo of
            your choice</p><FontAwesomeIcon
            icon={faCameraRetro} size="lg"/></div>
        </div>

        <Form className="search">
          <Row>
            <FormGroup>
              <Label for="searchLocation">Location</Label>
              <Input type="location" name="location" id="searchLocation"
                     placeholder="CITY,  TOWN, AREA NAME, POSTCODE"/>
            </FormGroup>
          </Row>

          <Row>
            <Col md={4}>
              <FormGroup>
                <Label for="searchDistance">Distance</Label>
                <select type="distance" name="distance" id="searchDistance">
                  <option>Select</option>
                  <option>This area only</option>
                  <option>Within 1 mile</option>
                  <option>Within 3 miles</option>
                  <option>Within 5 miles</option>
                  <option>Within 10 miles</option>
                  <option>Within 50 miles</option>
                </select>
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label for="searchTime">Time</Label>
                <select type="time" name="time" id="searchTime">
                  <option>Select</option>
                  <option>2000's till now</option>
                  <option>1990's</option>
                  <option>1980's</option>
                  <option>1970's</option>
                  <option>1960's</option>
                  <option>1950's</option>
                  <option>1940's</option>
                  <option>1930's</option>
                  <option>1920's</option>
                  <option>Before 1920's</option>
                </select>
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup check>
                <Label check for="checkboxBlackAndWhite">
                  <Input type="checkbox" name="checkbox" id="checkboxBlackAndWhite"/>
                  Black and white only
                </Label>
              </FormGroup>
            </Col>
          </Row>

          <Button>Search</Button>
        </Form>

        <Row className="cards">
          <Col md={4} xs={6}>
            <div className="card__item">
              <div className="card">
                <div className="card__image card__image--upload"></div>
                <div className="card__content">
                  <h2 className="card__title">SHARE YOU OWN</h2>
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
                  <h2 className="card__title">JOIN THE COMMUNITY</h2>
                  <p className="text-left card__text">You can save your favourite photo and share with other members.</p>
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
                  <h2 className="card__title">PHOTO REPAIR</h2>
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
