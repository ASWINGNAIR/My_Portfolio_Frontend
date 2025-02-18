import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';
import Project1 from '../assets/AnaSteel.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';


function ProjectCard({projects}) {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Card style={{ width: '100%' }} className='shadow border-0 mt-5 mt-md-0' >
                <Card.Img onClick={handleShow} style={{ height: "200px" }} variant="top" src={Project1} className='w-100' />
                <Card.Body>
                    <Card.Title className='text-center' >{projects.title}</Card.Title>
                </Card.Body>
            </Card>

            {/* Modal */}

            <Modal show={show} onHide={handleClose} centered size='lg' >
                <Modal.Header closeButton>
                    <Modal.Title>{projects.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-6">
                                <img style={{ height: "200px" }} src={Project1} alt="No image" className='w-100' />
                            </div>
                            <div className="col-md-6">
                                <h3>Description</h3>
                                <p>{projects.overview}</p>
                                <h4>Technologies</h4>
                                <p>{projects.language}</p>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Link to={projects.github} target='_blank'><FontAwesomeIcon icon={faGithub} className='fa-2x me-3 ms-3' /></Link>
                    <Link to={projects.website} target='_blank'><FontAwesomeIcon icon={faGlobe} className='fa-2x me-3' /></Link>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ProjectCard