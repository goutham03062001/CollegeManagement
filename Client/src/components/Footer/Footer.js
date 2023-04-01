import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <>
      <div className="jumbotron bg-dark text-white py-3 footer">
        <div className="container">
        <div className="footer_background"></div>
        <div className="row my-5">
        <div className="col-lg-4 col-12 col-sm-12 col-md-4">
         <ul className="">
            <h5 className="text text-success">Follow us</h5>
         <li className="nav nav-item my-3">Instagram</li>
          <li className="nav nav-item my-3">Twitter</li>
          <li className="nav nav-item my-3">Youtube</li>
         </ul>
        </div>
        <div className="col-lg-4 col-12 col-sm-12 col-md-4">

          <ul>
          <h5 className="text text-success">More From Us</h5>

          <li className="nav nav-item my-3">Results</li>
          <li className="nav nav-item my-3">Achievements</li>
          <li className="nav nav-item my-3">Faculty</li>
          </ul>

        </div>
        <div className="col-lg-4 col-12 col-sm-12 col-md-4">
            <ul>
            <h5 className="text text-success">Let's Connect</h5>

            <li className="nav nav-item my-3">About </li>
            <li className="nav nav-item my-3">Contact </li>
            <li className="nav nav-item my-3">Email </li>
            </ul>
        </div>
        
      </div>
        
        <p className="text text-center my-3">Designed and developed by ValueTech &copy; 2023</p>
       
        
        </div>
      </div>
    </>
  );
};

export default Footer;
