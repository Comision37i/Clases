import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

export const NavbarMenu = ({logIn, logOut, auth}) => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink className='nav-link' to='/'>Home</NavLink>
            <NavLink className='nav-link' to='/about'>About</NavLink>            
            {
              auth && (<NavLink className='nav-link' to='/admin'>Admin</NavLink>)
            }
            {/* <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link> */}
          </Nav>
          <Button variant="primary" onClick={() => auth ? logOut() : logIn()}>{auth ? 'Log Out' : 'Log In'}</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
