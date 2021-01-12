import React, { Component, useState } from 'react'
import { Container, Row, Col } from 'reactstrap'
import { BrowserRouter as Router,
    Switch,
    Route, Link } from 'react-router-dom'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
  } from 'reactstrap'

const Example = (props) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => setIsOpen(!isOpen);

    const namaToko = {
        nama: `OXA`
    }

    const copright = {
        tahun: 'Copyright 2020 OXA - All Right Reserved'
    }
        return (
            <Router>
            <div>
                <Navbar light expand="md" className="layout-navbar footbar">
                    <NavbarBrand>
                        <Link to="/" className="footer-copy">{copright.tahun}</Link>
                    </NavbarBrand>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="justify-content-start" navbar style={{width:"100%"}}>
                            <NavItem>
                            <NavLink href="/components/"></NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>

            </div>
            </Router>
        );
    
}

export default Example;