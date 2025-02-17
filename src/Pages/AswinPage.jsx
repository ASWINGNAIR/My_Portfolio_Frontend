import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faGlobe, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import AddProject from '../Components/AddProject'
import EditProject from '../Components/EditProject'
import { Link } from 'react-router-dom'



function AswinPage() {



  return (
    <>
      

      <div className=' p-5 shadow mt-4'>
        <h1 className='text-center text-danger'>Welcome Aswin</h1>
        <AddProject />
        <div className="d-flex justify-content-between">
          <h3>My Project</h3>
        </div>

        <div className='p-3 bg-light mt-4 rounded d-flex align-item-center justify-content-between'>
          <h5>Project Title</h5>
          <div className='d-flex mt-2'>
            <EditProject />
            <Link to='' target='_blank'><FontAwesomeIcon icon={faGithub} className='me-4 text-warning' /></Link>
            <Link to='' target='_blank'><FontAwesomeIcon icon={faGlobe} className='me-4 text-success' /></Link>
            <FontAwesomeIcon icon={faTrash} className='me-4 text-danger' />
          </div>
        </div>




        <h4 className='text-center text-warning mt-5'>No Project added</h4>

      </div>

    </>
  )
}

export default AswinPage