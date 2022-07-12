import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import "./navigation.css";

export class Navigation extends Component {
  render() {
    return (
      <Navbar expand="lg" className="navStyle" bg="info">
        <Container>
          <div>
            <Navbar.Brand>
              <div className="logoContainer">
                <Image fluid rounded src="/images/Flag-Liberty.jpeg" />
              </div>
            </Navbar.Brand>
          </div>
          <div>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse
              id="basic-navbar-nav"
              className="justify-content-end"
            >
              <Nav activeKey="/home">
                <Nav.Item>
                  <Nav.Link href="/home">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="/inscription">Register</Nav.Link>
                </Nav.Item>
                {/*TODO: Remove this navigation if neccesary*/}
                {/* <Nav.Item>
              <Nav.Link href="/login">Login</Nav.Link>
            </Nav.Item> */}
                <Nav.Item>
                  <Nav.Link href="/members">Our Members</Nav.Link>
                </Nav.Item>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Container>
      </Navbar>
    );
  }
}

export default Navigation;
