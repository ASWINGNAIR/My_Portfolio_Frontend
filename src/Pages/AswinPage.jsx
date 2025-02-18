import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faGlobe, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import AddProject from '../Components/AddProject'
import EditProject from '../Components/EditProject'
import { Link } from 'react-router-dom'
import { getAllProjectApi } from '../Services/allApi'
import Project from './Project'


function AswinPage() {

  const [allProject, setAllProject] = useState([])


  const getAllProject = async () => {

    const reqHeader = {
      "Content-Type": "application/json",
    }
    const result = await getAllProjectApi(reqHeader)
    // console.log(result.data);
    setAllProject(result.data)
  }
  console.log(allProject);


  useEffect(() => {
    getAllProject()
  }, [])

  return (
    <>

    
      <div className=' p-5 shadow mt-4'>
        <h1 className='text-center text-danger'>Welcome Aswin</h1>
        <AddProject />
        <div className="d-flex justify-content-between">
          <h3>My Project</h3>
        </div>
        {allProject?.length > 0 ?
          allProject?.map((item) => (
            <div className='p-3 bg-light mt-4 rounded d-flex align-item-center justify-content-between' key={item._id}>
              <h5>{item?.title}</h5>
              <div className='d-flex mt-2'>
                <EditProject />
                <Link to={item?.github} target='_blank'><FontAwesomeIcon icon={faGithub} className='me-4 text-warning' /></Link>
                <Link to={item?.website} target='_blank'><FontAwesomeIcon icon={faGlobe} className='me-4 text-success' /></Link>
                <FontAwesomeIcon icon={faTrash} className='me-4 text-danger' />
              </div>
            </div>
          ))

          :

          <h4 className='text-center text-warning mt-5'>No Project added</h4>}

      </div>

        
     {allProject?.map((item)=>(
      <Project projects={item} />
     ))
    }


    </>
  )
}

export default AswinPage