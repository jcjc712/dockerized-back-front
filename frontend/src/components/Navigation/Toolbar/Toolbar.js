import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Toolbar.css';
class Toolbar extends Component {

    render() {
        let items = [
            {
                name: 'Log in',
                path: '/log-in'
            },
            {
                name: 'Sign up',
                path:'/sign-up'
            }
        ];
        let authNavLinks;
        if(!this.props.isLogged){
             authNavLinks = items.map(function(item) {
                return <Nav.Link><NavLink key={item.name} to={item.path}>{item.name}</NavLink></Nav.Link>;
            }, this);
        }
        else {
            authNavLinks = <Nav.Link><NavLink to="/log-out">Log out</NavLink></Nav.Link>
        }
    return <div className="Toolbar">
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="/">CheckList</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                 <Nav.Link><NavLink to="/" exact>Home</NavLink></Nav.Link>
                {authNavLinks}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
    </div>
    }
}


export default Toolbar;
