import React from 'react'
import "./Navbar.css";
import {connect} from "react-redux";
import PropTypes from 'prop-types';
const Navbar = ({isAuthenticated, isLoading, user}) => {
  const guestLinks = (
    <nav class="navbar navbar-expand-lg navBarBackground fixed-top">
  <div class="container-fluid">
    <a class="navbar-brand" href="#!">College Name</a>
    <button class="navbar-toggler navbar-dark bg-dark" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse " id="navbarNavDropdown">
      <ul class="navbar-nav innerNavBar">
        <li class="nav-item">
          <a class="nav-link nav_bar_link active" aria-current="page" href="#!">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link nav_bar_link" href="#!">Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link nav_bar_link" href="#!">Pricing</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link nav_bar_link dropdown-toggle" href="#!" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="true">
            Dropdown link
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a class="dropdown-item" href="#!">Action</a></li>
            <li><a class="dropdown-item" href="#!">Another action</a></li>
            <li><a class="dropdown-item" href="#!">Something else here</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )

  const authLinks = (
    <nav class="navbar navbar-expand-lg navBarBackground fixed-top">
  <div class="container-fluid">
    <a class="navbar-brand" href="#!">College Name</a>
    <button class="navbar-toggler navbar-dark bg-dark" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse " id="navbarNavDropdown">
      <ul class="navbar-nav innerNavBar">
        <li class="nav-item">
          <a class="nav-link nav_bar_link active" aria-current="page" href="#!">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link nav_bar_link" href="/viewAllStudents">View All Students</a>
        </li>
        
        <li class="nav-item">
          <a class="nav-link nav_bar_link" href="/previousYearPapers">Previous Year Papers</a>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
  )
  return (
    <>
    { isAuthenticated && user ? authLinks : guestLinks}
    </>
  )
}

Navbar.propTypes = {
  isAuthenticated : PropTypes.bool,
  isLoading : PropTypes.bool,
  user:PropTypes.object,
}

const mapStateToProps = ((state)=>({
  isAuthenticated:state.auth.isAuthenticated,
  isLoading:state.auth.isLoading,
  user : state.auth.user
}))
export default connect(mapStateToProps,null)(Navbar)