import React from 'react';
import logo from "../logo.svg";
import {NavItem, NavLink} from "reactstrap";



function Navigation() {
  return (
    <div>
      <header className="App-header">
        <Navigation>
          <img src={logo} className="App-logo" alt="logo"/>
          <NavItem><NavLink href="#">Upload</NavLink></NavItem>
          <NavItem><NavLink href="#">My Album</NavLink></NavItem>
          <NavItem><NavLink href="#">Photo Repair</NavLink></NavItem>
          <NavItem><NavLink href="#">Help</NavLink></NavItem>
        </Navigation>
      </header>
    </div>
  );
}
export default Navigation;
