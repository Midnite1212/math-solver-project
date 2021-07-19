import React, { Component } from 'react';
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import '../styles/navigation-bar.scss'

class NavigationBar extends Component {
    render() {
        return (
            <Navbar collapseOnSelect expand="lg" className="navigation-bar" variant="dark">
                <Navbar.Brand href="/">USThing Math Solver</Navbar.Brand>
                <Navbar.Toggle className="navigation-bar-menu-button" aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto navigation-bar-link">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/formula-sets-list">My Formulas</Nav.Link>
                </Nav>
                </Navbar.Collapse>
          </Navbar>
        );
    }
}
export default NavigationBar