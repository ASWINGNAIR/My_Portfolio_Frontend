import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function Header() {
  return (
    <>
      <div>
      <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="/" className='ms-3'>My Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll >
            <Nav.Link href="/" className='ms-3'>Home</Nav.Link>
            <Nav.Link href="#about" className='ms-3'>About</Nav.Link>
            <Nav.Link href="#skill" className='ms-3'>Skills</Nav.Link>
            <Nav.Link href="#education" className='ms-3'>Education</Nav.Link>
            <Nav.Link href="/project" className='ms-3'>Projects</Nav.Link>
            <Nav.Link href="#contact" className='ms-3'>Contact</Nav.Link>
          </Nav>
          <Form className="d-flex me-4">
            <Form.Control type="search"  placeholder="Search" className="me-2" aria-label="Search" />
            <Button variant="outline-success">Search</Button>
          </Form>
           <div>
            <button className='me-3'><FontAwesomeIcon icon={faAngleDown} /></button>
           </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      </div>
    </>
  )
}

export default Header