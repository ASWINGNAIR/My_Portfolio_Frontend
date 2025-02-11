import React from 'react';
import Img1 from '../assets/profImg1.jpg';
import Resume from '../assets/ASWIN_Feb_RESUME.pdf';
import Skills from '../Components/Skills'
import Education from '../Components/Education'
import Contact from '../Components/Contact'

function Home() {
  return (
    <>
      <div className="container-fluid">
        {/* Welcome Section */}
        <div className="row bg-primary d-flex align-items-center" style={{ minHeight: "600px" }}>

          <div className="col-lg-6 col-md-12 text-center text-lg-start px-4">
            <h1 className='text-light mt-5'>Welcome</h1>
            <p className='text-light mt-4' style={{ textAlign: "justify" }}>
              <span className='fw-bolder' style={{ fontSize: "22px" }}>Hi, I'm Aswin G Nair, a MERN Stack Developer from India.</span><br />
              I specialize in building dynamic, user-friendly web applications using MongoDB, Express.js, React.js, and Node.js.
              With hands-on experience in developing scalable and efficient solutions, I focus on crafting clean, intuitive interfaces
              that enhance user experience. Passionate about modern web technologies, I continuously explore innovative ways to optimize
              performance and functionality.
            </p>
          </div>

          <div className="col-lg-6 col-md-12 d-flex justify-content-center">
            <img src={Img1} alt="Profile" className='rounded-3 img-fluid' style={{ maxWidth: "80%", height: "auto" }} />
          </div>
        </div>

        {/* About Section */}

        <h1 className='text-center mt-5 fw-bolder' id='about'>About Me</h1>
        <div className="row d-flex align-items-center" style={{ minHeight: "600px" }}>

          <div className="col-lg-6 col-md-12 d-flex justify-content-center">
            <img
              src="https://aswingnair.github.io/Aswin_portfolio/images/ASWIN_IMAGE.JPG"
              alt="No Image"
              className="img-fluid rounded-3"
              style={{ maxWidth: "80%", height: "auto" }}
            />
          </div>


          <div className="col-lg-6 col-md-12 px-4">
            <h5 className='mt-4' style={{ textAlign: "justify", lineHeight: "35px" }}>
              I’m Aswin G Nair, a MERN Stack Developer passionate about building modern, scalable, and user-friendly web applications.
              With experience in MongoDB, Express.js, React.js, and Node.js, I specialize in creating interactive and responsive websites
              that provide seamless user experiences.
              <br /><br />
              I have a strong foundation in HTML, CSS, JavaScript, and Bootstrap, which helps me design clean and efficient front-end interfaces.
              My goal is to develop applications that are both visually appealing and highly functional.
              <br /><br />
              I enjoy solving problems, optimizing performance, and continuously learning new technologies to stay updated with the latest trends
              in web development. Whether it's front-end or back-end, I love turning ideas into real-world applications that make an impact.
            </h5>
          </div>
        </div>

        {/* Resume Download Button */}
        <div className='d-flex justify-content-center pb-5'>
          <a href={Resume} download className='btn btn-primary mt-4 p-3 rounded-4 text-white' style={{ textDecoration: "none" }}>
            Download Resume
          </a>
        </div>

      </div>

      <Skills />

      <Education />

      <Contact />

    </>
  )
}

export default Home;
