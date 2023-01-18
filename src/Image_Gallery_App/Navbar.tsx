import React from 'react'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
      <div className="container-fluid">
        <div>
        
            <a className="navbar-brand" href="dfgdf">
           
              <span className="fs-2 ms-3 fw-bold">Image Gallery App</span>
            </a>
         
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse grow" id="navbarNav">
          {/* <ul className="navbar-nav fs-5 align-items-center">


           
        
                <a className="nav-link active" href="sd">
                  <span className="fontsm fw-bold">Add Post</span>
                </a>
        
          
              <p></p>
           
            <li className="nav-item me-5">
     
                <a className="nav-link active" href="sd">
                  <span className="fontsm fw-bold ">Sign Up</span>
                </a>
              
            </li>

        
              <li className="nav-item me-5">
             
                  <a className="nav-link active" href="sd">
                    <span className="fontsm fw-bold ">Sign In</span>
                  </a>
         
              </li>
         
              <li className="nav-item ">
              
                  <a className="nav-link active" href="sd">
                    <span className="fontsm fw-bold ">
                      Log Out
                    </span>
                  </a>
                
              </li>
            

            <li className="nav-item me-5"></li>
          </ul> */}
        </div>
      </div>
    </nav>
  )
}

export default Navbar