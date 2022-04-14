import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.png';

const Header = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/home">
                    <img src={logo} height="30px" alt="" />
                </Navbar.Brand>
                <Nav className="ms-auto">
                    <Link className='nav-link' to="/">Home</Link>
                    <Link className='nav-link' to="/about">About</Link>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Header;