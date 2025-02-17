import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';


function Header() {

  const navigate = useNavigate()

  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => {
    setShow(false)
    setAdminDetails({
      email: "",
      password: ""
    })
  }
  const [adminDetails, setAdminDetails] = useState({
    email: "",
    password: ""
  })
  console.log(adminDetails);

  const handleLogin=()=>{
    const { email, password } = adminDetails
    if (!email || !password) {
      alert('Please fill the form completely')
    }
    else{
      if(email=='aswin@gmail.com' && password=='aswin123'){
        alert('Welcome To Aswin Page')

        handleClose()

        setTimeout(() => {
          navigate('/aswin');
        }, 2000);

      }
    }
  }

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
                <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" />
                <Button variant="outline-success">Search</Button>
              </Form>
              <div>

                <Button variant="primary" onClick={handleShow}><FontAwesomeIcon icon={faAngleDown} /></Button>

                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title style={{color:"blue"}}>Admin Login</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <div className='my-3'>
                      <input type="text" name='email' placeholder='Email' className='form-control' onChange={(e) => setAdminDetails({ ...adminDetails, email: e.target.value })} />
                    </div>
                    <div className='my-3'> 
                      <input type="password" name='password' placeholder='Password' className='form-control' onChange={(e) => setAdminDetails({ ...adminDetails, password: e.target.value })} />
                    </div>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="primary" onClick={handleLogin}>Login</Button>
                  </Modal.Footer>
                </Modal>

              </div>


            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>

  )
}

export default Header