import React from 'react';

function Education() {
  return (
    <div className="container-fluid py-5" style={{ backgroundColor: "silver" }} id='education'>
      <h1 className='text-center text-light fw-bolder' style={{ fontSize: "50px" }}>Education</h1>
      <hr />

      <div className="container">
        <div className="row justify-content-center pt-4">
      
          <div className='col-lg-8 col-md-10 col-sm-12 p-4 shadow rounded-3 bg-white mb-4'>
            <h3 className='fw-bold' style={{ fontSize: "30px" }}>Bachelor's Degree in Computer Science & Engineering</h3>
            <p style={{ fontSize: "20px" }}><strong>University:</strong> APJ Abdul Kalam Technological University</p>
            <p style={{ fontSize: "18px" }}>College Of Engineering And Management Punnapra</p>
            <p style={{ fontSize: "18px" }}><strong>CGPA:</strong> 7.03</p>
            <p className='fw-bold' style={{ fontSize: "20px" }}>2020 - 2024</p>
          </div>

          <div className='col-lg-8 col-md-10 col-sm-12 p-4 shadow rounded-3 bg-white mb-4'>
            <h3 className='fw-bold' style={{ fontSize: "30px" }}>Higher Secondary Education</h3>
            <p style={{ fontSize: "20px" }}><strong>Board:</strong> Directorate of Higher Secondary Education, Kerala</p>
            <p style={{ fontSize: "18px" }}>Nair Samajam Higher Secondary School, Nedumudy</p>
            <p style={{ fontSize: "18px" }}><strong>CGPA:</strong> 8.6</p>
            <p className='fw-bold' style={{ fontSize: "20px" }}>2018 - 2020</p>
          </div>

          <div className='col-lg-8 col-md-10 col-sm-12 p-4 shadow rounded-3 bg-white mb-4'>
            <h3 className='fw-bold' style={{ fontSize: "30px" }}>Matriculation</h3>
            <p style={{ fontSize: "20px" }}><strong>Board:</strong> Kerala Board Of Public Examinations</p>
            <p style={{ fontSize: "18px" }}>ST Xavier's High School, Mithrakary</p>
            <p style={{ fontSize: "18px" }}><strong>CGPA:</strong> 9.6</p>
            <p className='fw-bold' style={{ fontSize: "20px" }}>2017 - 2018</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Education;
