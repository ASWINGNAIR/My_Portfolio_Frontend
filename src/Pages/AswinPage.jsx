import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faGlobe, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import AddProject from '../Components/AddProject'
import EditProject from '../Components/EditProject'
import { Link } from 'react-router-dom'
import { adminProjectApi, deleteAdminProjectApi} from '../Services/allApi'


function AswinPage() {

  const [adminProject, setAdminProject] = useState([])

  const [deleteStatus, setDeleteStatus] = useState({})


  const getAdminProject = async () => {

    const reqHeader = {
      "Content-Type": "application/json",
    }
    const result = await adminProjectApi(reqHeader)
    // console.log(result.data);
    setAdminProject(result.data)
  }
  console.log(adminProject);


  const handleDelete=async(id)=>{

    const reqHeader = {
      "Content-Type": "application/json",
    }
    const result = await deleteAdminProjectApi(id,reqHeader)
    console.log(result);
    if(result.status == 200){
      setDeleteStatus(result)
      alert('Project Deleted successfully')
    }
    else{
      alert('Something Went Wrong')
    }
  }



  useEffect(() => {
    getAdminProject()
  }, [deleteStatus])

  return (
    <>

    
      <div className=' p-5 shadow mt-4'>
        <h1 className='text-center text-danger'>Welcome Aswin</h1>
        <AddProject />
        <div className="d-flex justify-content-between">
          <h3>My Project</h3>
        </div>
        {adminProject?.length > 0 ?
          adminProject?.map((item) => (
            <div className='p-3 bg-light mt-4 rounded d-flex align-item-center justify-content-between'>
              <h5>{item?.title}</h5>
              <div className='d-flex mt-2'>
                <EditProject projects={item} />
                <Link to={item?.github} target='_blank'><FontAwesomeIcon icon={faGithub} className='me-4 text-warning' /></Link>
                <Link to={item?.website} target='_blank'><FontAwesomeIcon icon={faGlobe} className='me-4 text-success' /></Link>
                <FontAwesomeIcon onClick={() => handleDelete(item?._id)} icon={faTrash} className='me-4 text-danger' />
              </div>
            </div>
          ))

          :

          <h4 className='text-center text-warning mt-5'>No Project added</h4>}

      </div>


    </>
  )
}

export default AswinPage