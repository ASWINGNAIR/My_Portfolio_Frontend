import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGlobe, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';
import Project1 from '../assets/AnaSteel.png'
import Project2 from '../assets/explorer_img.png'

function Project() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  

  return (
    <>
      <div>
        <h3 className='text-center mt-4'>All Projects</h3>

        <div className="mt-5">
          <div className="container">
            <div className="row">
              <div className="col-md-4"></div>
              <div className="col-md-4 d-flex">
                <input type="text" placeholder='Technologies' className='form-control shadow' />
                <FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: "lightgray", marginTop: "10px", marginLeft: "30px" }} />
              </div>
              <div className="col-md-4"></div>
            </div>
          </div>
        </div>


        <div className="container mt-5 p-1">
          <div className="row">

            <div className="col-md-3 my-3">
              {/* Card */}
              <Card style={{ width: '100%' }} className='shadow border-0 mt-5 mt-md-0'>
                <Card.Img  onClick={handleShow} style={{ height: "200px" }} variant="top" src={Project1} className='w-100' />
                <Card.Body>
                  <Card.Title className='text-center'>AnaSteel Portfolio</Card.Title>
                </Card.Body>
              </Card>

              {/* Modal */}

              <Modal show={show} onHide={handleClose} centered size='lg'>
                <Modal.Header closeButton>
                  <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-6">
                                <img style={{ height: "200px" }} src={Project1} alt="No image" className='w-100' />
                            </div>
                            <div className="col-md-6">
                                <h3>Description</h3>
                                <p>It is a simple portfolio website frontpage.</p>
                                <h4>Technologies</h4>
                                <p>HTML , CSS</p>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                <Link to='https://github.com/ASWINGNAIR/AnasteelPortfolio.git' target='_blank'><FontAwesomeIcon icon={faGithub} className='fa-2x me-3 ms-3' /></Link>
                <Link to='https://aswingnair.github.io/AnasteelPortfolio/' target='_blank'><FontAwesomeIcon icon={faGlobe} className='fa-2x me-3' /></Link>
                </Modal.Footer>
              </Modal>

            </div>


          </div>
        </div>




      </div>
    </>
  )
}

export default Project