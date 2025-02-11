import { faFacebook, faGithub, faInstagram, faLinkedinIn, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'


function Contact() {
  return (
    <>
      <div className='container-fluid mb-5' id='contact'>

        {/* Form */}

        <div className="row mt-4">
        <h1 className='text-center fw-bolder'>Contact Me</h1>
          <div className="col-lg-2"></div>
          <div className="col-lg-8 mt-5 rounded"  style={{backgroundColor:"rgb(23, 0, 40)" , height:"300px"}}>
            <form className='d-flex flex-column mt-5 px-5'>
              <input className='form-control mb-3 ' type="text" placeholder='Name' />
              <input className='form-control mb-3' type="tel"  placeholder='Mobile'/>
              <input className='form-control mb-3' type="email" placeholder='Email' />
              <button className='btn btn-primary w-50 mx-auto rounded-pill'>Submit</button>
            </form>
          </div>
          <div className="col-lg-2"></div>
        </div>

          {/* Social Media */ }
          <div className="row mt-5">
            <div className='d-flex mt-4 justify-content-around'>
                <a href=""  target="_blank" ><FontAwesomeIcon className='fa-3x' icon={faLinkedinIn} style={{color: "#0a5894",}} /></a>
                <a href=""  target="_blank" ><FontAwesomeIcon className='fa-3x' icon={faGithub} style={{color: "#0a5894",}} /></a>
                <a href=""  target="_blank" ><FontAwesomeIcon className='fa-3x' icon={faTwitter} style={{color: "#0a5894",}} /></a>
                <a href=""  target="_blank" ><FontAwesomeIcon className='fa-3x' icon={faWhatsapp} style={{color: "#0a5894",}} /></a>
                <a href=""  target="_blank" ><FontAwesomeIcon className='fa-3x' icon={faInstagram} style={{color: "#0a5894",}} /></a>
                <a href=""  target="_blank" ><FontAwesomeIcon className='fa-3x' icon={faFacebook} style={{color: "#0a5894",}} /></a>
            </div>
          </div>
      </div>
    </>
  )
}

export default Contact