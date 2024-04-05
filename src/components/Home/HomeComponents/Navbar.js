import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Home-CSS/AdminNav.css';

const Navbar = () => {
  function handleLogout() {
    
  }
  
  return (
    <body>
    <nav className="navbar navbar-expand-lg fixed-top">
    <div className="container-fluid">
          <Link to="/home" className="navbar-brand me-auto" >PlaceX</Link>
          <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">PlaceX</h5>
              <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item">
                  <Link className="nav-link mx-lg-2" to="/home">Home</Link>
                </li>
              <li className="nav-item">
                  <Link className="nav-link mx-lg-2" to="/companylisting">Company Listing</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link mx-lg-2" to="/scheduledInterview">Scheduled Interviews</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link mx-lg-2" to="/faq">FAQ</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link mx-lg-2" to="/interviewexperience">Interview Experience</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link mx-lg-2" to="/" onClick={handleLogout}>Logout</Link>
                </li>
                </ul>
              </div>
        </div>
        </div>
      </nav>


    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" 
      integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" 
      crossOrigin="anonymous">
    </script>
  </body>
  );
};

export default Navbar;