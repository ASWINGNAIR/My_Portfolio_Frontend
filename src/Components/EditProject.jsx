import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


function EditProject() {

    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
    <>
      <div>
      <FontAwesomeIcon icon={faPenToSquare} onClick={handleShow} className='text-info me-4' />

<Modal centered size='lg' show={show} onHide={handleClose}>
  <Modal.Header closeButton>
    <Modal.Title className='text-success'>Edit Project Details</Modal.Title>
  </Modal.Header>
  <Modal.Body>
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <label htmlFor="projectImage">
            <input  type="file" id='projectImage' className='d-none' />
            <img src='' alt="No image" className='w-100' />
          </label>
        </div>
        <div className="col-md-6">
          <div className='mt-3'><input  type="text" placeholder='Title' className='form-control' /></div>
          <div className='mt-3'><input  type="text" placeholder='Language' className='form-control' /></div>
          <div className='mt-3'><input  type="text" placeholder='Github' className='form-control' /></div>
          <div className='mt-3'><input  type="text" placeholder='Website' className='form-control' /></div>
          <div className='mt-3'><textarea  rows={5} placeholder='Overview' className='form-control' ></textarea></div>
        </div>
      </div>
    </div>
  </Modal.Body>
  <Modal.Footer>
    <Button variant="warning me-3" onClick={handleClose}>
      Cancel
    </Button>
    <Button variant="success" onClick={handleClose}>
      Update
    </Button>
  </Modal.Footer>
</Modal>
      </div>
    </>
  )
}

export default EditProject