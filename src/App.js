import React from 'react';

import {Container} from 'reactstrap';

import './App.scss';
import Search from './components/Search.js';
import Navigation from './components/Navigation.js';
import Feature from './components/Feature.js';
import Intro from './components/Intro.js';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Container>
        <Intro/>
        <Search/>
        <Feature/>
      </Container>
    </div>
  );
}

export default App;
