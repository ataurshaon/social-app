import React from 'react'
//import {NavLink} from 'react-router-dom'
import { Navbar, Nav, Container, NavDropdown, Form, FormControl, Button, Badge } from 'react-bootstrap'

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
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/login" className='text-light'>Login</Nav.Link>
            <Nav.Link href="/" className='text-light'>Home</Nav.Link>
            <Nav.Link href="/Profile" className='text-light'>Profile</Nav.Link>
            <NavDropdown title="Settings" id="navbarScrollingDropdown" bg="light">
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
            <Button variant="outline-success" className='text-light bg-info'>Search</Button>
          </Form>
        </Navbar.Collapse>

        {/* Notification */}
        <Button variant="primary" className='bg-info'>
          Notification <Badge bg="secondary">9</Badge>
          <span className="visually-hidden">unread messages</span>
        </Button>

      </Container>
    </Navbar>


  )
}

export default NavBar
