import React from 'react'
//import {NavLink} from 'react-router-dom'
import { Navbar, Nav, Container, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'

const NavBar = () => {
  return (
    // <nav>
    //   <ul>
    //     <li>
    //       <NavLink exact to="/login" activeStyle={
    //         {
    //           fontWeight:'bold',
    //           color: 'red'
    //         }
    //       }>Login</NavLink>
    //     </li>
    //     <li>
    //       <NavLink exact to="/" activeStyle={
    //         {
    //           fontWeight:'bold',
    //           color: 'red'
    //         }
    //       }>Home</NavLink>
    //     </li>
    //     <li>
    //       <NavLink exact to="/profile" activeStyle={
    //         {
    //           fontWeight:'bold',
    //           color: 'red'
    //         }
    //       }>Profile</NavLink>
    //     </li>
    //   </ul>
    // </nav>
<Navbar bg="primary" expand="lg">
  <Container fluid>
    <Navbar.Brand href="/">Social App</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0 text-white"
        style={{ maxHeight: '100px'}}
        navbarScroll
      >
        <Nav.Link href="/login">Login</Nav.Link>
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/Profile">Profile</Nav.Link>
        <NavDropdown title="Settings" id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">
            Something else here
          </NavDropdown.Item>
        </NavDropdown>
      </Nav>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success" className='text-light'>Search</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>


  )
}

export default NavBar
