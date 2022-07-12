import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./navigation.css";

export class Navigation extends Component {
  render() {
    return (
      <Navbar expand="lg" className="navStyle">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav activeKey="/home">
            <Nav.Item>
              <Nav.Link href="/home">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/inscription">Register</Nav.Link>
            </Nav.Item>
            {/*TODO: Add l*/}
            {/* <Nav.Item>
              <Nav.Link href="/login">Login</Nav.Link>
            </Nav.Item> */}
            <Nav.Item>
              <Nav.Link href="/members">Our Members</Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Navigation;
