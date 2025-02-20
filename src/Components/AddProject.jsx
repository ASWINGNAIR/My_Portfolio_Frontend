import React, { useEffect } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { addProjectApi } from '../Services/allApi';

function AddProject() {

  const [show, setShow] = useState(false);

  const [preview, setPreview] = useState("")

  const [key, setKey] = useState("")


  const [projectDetails, setProjectDetails] = useState({
    title: "",
    language: "",
    github: "",
    website: "",
    overview: "",
    projectImage: ""
  })
  console.log(projectDetails);

  const handleFile = (e) => {
    setProjectDetails({ ...projectDetails, projectImage: e.target.files[0] })
  }
  useEffect(() => {
    if (projectDetails.projectImage) {
      setPreview(URL.createObjectURL(projectDetails.projectImage))
    }
  }, [projectDetails.projectImage])


  const handleClose = () => {
    setShow(false)
    handleCancel()
  }

  const handleShow = () => setShow(true);


  const handleCancel = () => {
    setProjectDetails({
      title: "",
      language: "",
      github: "",
      website: "",
      overview: "",
      projectImage: ""
    })
    setPreview("")
    if (key == 1) {
      setKey(0)
    }
    else {
      setKey(1)
    }
  }


  const handleAdd=async()=>{
    const { title, language, github, website, overview, projectImage } = projectDetails
    if (!title || !language || !github || !website || !overview || !projectImage) {
      alert('Please fill the form completely')
    }
    else {
      const reqBody = new FormData
      reqBody.append("title", title)
      reqBody.append("language", language)
      reqBody.append("github", github)
      reqBody.append("website", website)
      reqBody.append("overview", overview)
      reqBody.append("projectImage", projectImage)


      const reqHeader = {
        "Content-Type": "multipart/form-data",
      }
      const result = await addProjectApi(reqBody , reqHeader)
      console.log(result);

      if (result.status == 200) {
        alert('Project added successfully')
        setTimeout(() => {
          handleClose()
          window.location.reload()
        }, 2000)


      }
      else if (result.status == 406) {
        alert(result.response.data)
        handleCancel()
      }
      else {
        alert('Something went wrong')
        handleClose()
      }
      
    }
  }


  return (
    <>
        <div className='d-flex justify-content-center align-item-center my-5'>
          <button onClick={handleShow} className='btn btn-success rounded-0'>Add Projects</button>

          <Modal centered size='lg' show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title className='text-success'>Add Project Details</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="container">
                <div className="row">
                  <div className="col-md-6">
                    <label htmlFor="projectImage">
                      <input  onChange={(e) => handleFile(e)} key={key} type="file" id='projectImage' className='d-none' />
                      <img src={preview ? preview : "https://media.istockphoto.com/id/1436405248/vector/upload-document-file-transfer-concept-backup-data-document-save-on-storage-technology-cloud.jpg?s=612x612&w=0&k=20&c=bvSNTz6L2WDldZiTFTMwxaL4X3Z7JflBbvkELlCcLEw="} alt="No image" className='w-100' />
                      </label>
                  </div>
                  <div className="col-md-6">
                    <div className='mt-3'><input value={projectDetails.title} onChange={(e) => setProjectDetails({ ...projectDetails, title: e.target.value })} type="text" placeholder='Title' className='form-control' /></div>
                    <div className='mt-3'><input value={projectDetails.language} onChange={(e) => setProjectDetails({ ...projectDetails, language: e.target.value })} type="text" placeholder='Language' className='form-control' /></div>
                    <div className='mt-3'><input value={projectDetails.github} onChange={(e) => setProjectDetails({ ...projectDetails, github: e.target.value })} type="text" placeholder='Github' className='form-control' /></div>
                    <div className='mt-3'><input value={projectDetails.website} onChange={(e) => setProjectDetails({ ...projectDetails, website: e.target.value })} type="text" placeholder='Website' className='form-control' /></div>
                    <div className='mt-3'><textarea value={projectDetails.overview} onChange={(e) => setProjectDetails({ ...projectDetails, overview: e.target.value })} rows={5} placeholder='Overview' className='form-control' ></textarea></div>
                  </div>
                </div>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="warning me-3" onClick={handleCancel}>
                Cancel
              </Button>
              <Button variant="success" onClick={handleAdd}>
                Add Project
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
    </>
  )
}

export default AddProject