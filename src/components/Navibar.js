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

  import Home from './Home'
  import Premium from './Premium'
  import DevSchool from './DevScool'

const Example = (props) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => setIsOpen(!isOpen);

    const namaToko = {
        nama: `OXA`
    }
        return (
            <Router>
            <div>
                <Navbar light expand="md" className="layout-navbar">
                    <NavbarBrand>
                        <Link to="/" className="brand-logo">{namaToko.nama}</Link>
                    </NavbarBrand>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="justify-content-end" navbar style={{width:"100%"}}>
                            <NavItem>
                            <Link className="nav-link clr-white" to="/">Home</Link>
                            <Link className="nav-link clr-white" to="/premium">Premium</Link>
                            <Link className="nav-link clr-white" to="/devschool">DevSchool</Link> 
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
                <div>
                    <Route path="/" exact component={Home}></Route>
                    <Route path="/premium" component={Premium}></Route>
                    <Route path="/devschool" component={DevSchool}></Route>
                </div>
            </div>
            </Router>
        );
    
}

export default Example;