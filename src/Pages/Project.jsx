import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import ProjectCard from '../Components/ProjectCard';
import { getAllProjectApi } from '../Services/allApi';


function Project({ projects }) {

  const [allProject, setAllProject] = useState([])

  const [searchKey, setSearchKey] = useState("")


  const getAllProject = async () => {

    const reqHeader = {
      "Content-Type": "application/json",
    }
    const result = await getAllProjectApi(searchKey , reqHeader)
    // console.log(result.data);
    setAllProject(result.data)
  }
  console.log(allProject);

  console.log(searchKey);


  useEffect(() => {
    getAllProject()
  }, [searchKey])



  return (
    <>
      <div>
        <h3 className='text-center mt-4'>All Projects</h3>

        <div className="mt-5">
          <div className="container">
            <div className="row">
              <div className="col-md-4"></div>
              <div className="col-md-4 d-flex">
                <input type="text" onChange={(e) => setSearchKey(e.target.value)} placeholder='Technologies' className='form-control shadow' />
                <FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: "lightgray", marginTop: "10px", marginLeft: "30px" }} />
              </div>
              <div className="col-md-4"></div>
            </div>
          </div>
        </div>



        <div className="container mt-5 p-1">

          <div className="row">
            {allProject?.length > 0 ?
              allProject?.map((item) => (
                <div className="col-md-3 my-3"  >
                  <ProjectCard projects={item} />
                </div>
              ))

              :
              <h4 className='text-center text-warning mt-5'>No Project added</h4>
            }
          </div>

        </div>




      </div>
    </>
  )
}

export default Project














// import { faGithub } from '@fortawesome/free-brands-svg-icons';
// import { faGlobe, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import React, { useEffect, useState } from 'react';
// import Card from 'react-bootstrap/Card';
// import Modal from 'react-bootstrap/Modal';
// import { Link } from 'react-router-dom';
// import Project1 from '../assets/AnaSteel.png';
// import { getAllProjectApi } from '../Services/allApi';

// function Project() {
//   const [show, setShow] = useState(false);
//   const [selectedProject, setSelectedProject] = useState(null); // Track selected project

//   const handleClose = () => {
//     setShow(false);
//     setSelectedProject(null);
//   };

//   const handleShow = (project) => {
//     setSelectedProject(project);
//     setShow(true);
//   };

//   const [project, setProject] = useState([]);

//   const getProject = async () => {
//     try {
//       const result = await getAllProjectApi();
//       if (result.status === 200) {
//         setProject(result.data);
//       }
//     } catch (error) {
//       console.error('Error fetching projects:', error);
//     }
//   };
//   console.log(project);

//   useEffect(() => {
//     getProject();
//   }, []);

//   return (
//     <>
//       <div>
//         <h3 className="text-center mt-4">All Projects</h3>

//         <div className="mt-5">
//           <div className="container">
//             <div className="row">
//               <div className="col-md-4"></div>
//               <div className="col-md-4 d-flex">
//                 <input
//                   type="text"
//                   placeholder="Technologies"
//                   className="form-control shadow"
//                 />
//                 <FontAwesomeIcon
//                   icon={faMagnifyingGlass}
//                   style={{ color: 'lightgray', marginTop: '10px', marginLeft: '30px' }}
//                 />
//               </div>
//               <div className="col-md-4"></div>
//             </div>
//           </div>
//         </div>

//         <div className="container mt-5 p-1">
//           <div className="row">
//             {project?.length > 0 ? (
//               project.map((item) => (
//                 <div className="col-md-3 my-3" key={item._id}>
//                   {/* Card */}
//                   <Card
//                     style={{ width: '100%' }}
//                     className="shadow border-0 mt-5 mt-md-0"
//                   >
//                     <Card.Img
//                       onClick={() => handleShow(item)}
//                       style={{ height: '200px', cursor: 'pointer' }}
//                       variant="top"
//                       src={Project1}
//                       className="w-100"
//                     />
//                     <Card.Body>
//                       <Card.Title className="text-center">{item.title}</Card.Title>
//                     </Card.Body>
//                   </Card>
//                 </div>
//               ))
//             ) : (
//               <h4 className="text-center text-warning mt-5">No Project added</h4>
//             )}
//           </div>
//         </div>

//         {/* Modal */}
//         <Modal show={show} onHide={handleClose} centered size="lg">
//           <Modal.Header closeButton>
//             <Modal.Title>{selectedProject?.title}</Modal.Title>
//           </Modal.Header>
//           <Modal.Body>
//             <div className="container-fluid">
//               <div className="row">
//                 <div className="col-md-6">
//                   <img
//                     style={{ height: '200px' }}
//                     src={Project1}
//                     alt="No image"
//                     className="w-100"
//                   />
//                 </div>
//                 <div className="col-md-6">
//                   <h3>Description</h3>
//                   <p>{selectedProject?.description || 'No description available.'}</p>
//                   <h4>Technologies</h4>
//                   <p>{selectedProject?.technologies || 'Not specified'}</p>
//                 </div>
//               </div>
//             </div>
//           </Modal.Body>
//           <Modal.Footer>
//             <Link to={selectedProject?.github} target="_blank">
//               <FontAwesomeIcon icon={faGithub} className="fa-2x me-3 ms-3" />
//             </Link>
//             <Link to={selectedProject?.website} target="_blank">
//               <FontAwesomeIcon icon={faGlobe} className="fa-2x me-3" />
//             </Link>
//           </Modal.Footer>
//         </Modal>
//       </div>
//     </>
//   );
// }

// export default Project;
