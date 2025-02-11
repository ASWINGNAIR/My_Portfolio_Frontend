import React from 'react'

function PageNotFound() {
  return (
    <>
      <div className="container-fluid p-5">
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8 d-flex justify-content-center align-items-center flex-column">
            <img className='w-50' src="https://cdn.svgator.com/images/2024/04/electrocuted-caveman-animation-404-error-page.gif" alt="Page Not Found" />
            <h1>Look like you're lost</h1>
            <h4 className='mt-3'>The page you are looking is unavailable</h4>
          </div>
          <div className="col-md-2"></div>
        </div>
      </div>
    </>
  )
}

export default PageNotFound