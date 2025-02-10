import React from 'react';

function Skills() {
  return (
    <div className='container-fluid mb-5' id='skill'>
      {/* My Skills Section */}
      <div>
        <h1 className='text-center fw-bolder'>My Skills</h1>
        <div className='row mt-5 justify-content-center gap-4'>
         
          <div className='col-lg-4 col-md-6 col-sm-12'>
            <div className='shadow p-4 rounded-3 text-center' style={{ height: "100%" }}>
              <h3 className='text-primary'>Web Design</h3>
              <p className='px-3'>I love designing. It's the first step before creating any website, allowing me to bring my imagination to life.</p>
            </div>
          </div>
          <div className='col-lg-4 col-md-6 col-sm-12'>
            <div className='shadow p-4 rounded-3 text-center' style={{ height: "100%" }}>
              <h3 className='text-primary'>Web Development</h3>
              <p className='px-3'>I am a Full Stack Web Developer (MERN) with hands-on experience in building dynamic web applications.</p>
            </div>
          </div>
          <div className='col-lg-4 col-md-6 col-sm-12'>
            <div className='shadow p-4 rounded-3 text-center' style={{ height: "100%" }}>
              <h3 className='text-primary'>Problem Solving</h3>
              <p className='px-3'>I enjoy solving problems, whether they are programming-related or real-life challenges.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Technologies */}
      <div className="mt-5">
        <h3 className='text-center'>Tech I'm Familiar With</h3>
        <hr />
        <div className="row mt-5">
          
          <div className="col-lg-4 col-md-6 col-sm-12 text-center">
            <h5>HTML5</h5>
            <h5 className='mt-3'>CSS3</h5>
            <h5 className='mt-3'>Bootstrap</h5>
            <h5 className='mt-3'>Tailwind</h5>
            <h5 className='mt-3'>Git</h5>
            <h5 className='mt-3'>Vercel</h5>
          </div>
          
          <div className="col-lg-4 col-md-6 col-sm-12 text-center">
            <h5>Javascript</h5>
            <h5 className='mt-3'>Typescript</h5>
            <h5 className='mt-3'>Python</h5>
            <h5 className='mt-3'>SQL</h5>
            <h5 className='mt-3'>MySQL</h5>
            <h5 className='mt-3'>Render</h5>
          </div>
          
          <div className="col-lg-4 col-md-12 col-sm-12 text-center">
            <h5>React.js</h5>
            <h5 className='mt-3'>Express.js</h5>
            <h5 className='mt-3'>Node.js</h5>
            <h5 className='mt-3'>MongoDB</h5>
            <h5 className='mt-3'>Axios</h5>
            <h5 className='mt-3'>Redux</h5>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills;
