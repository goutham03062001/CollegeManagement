import React,{ useEffect } from "react";
import "./left.css";
import AOS from "aos";
const Left = () => {
  useEffect( ()=>{
    AOS.init({
      duration:2000,
      offset:300
    })
  },[]);
  return (
    <div className="card my-3" data-aos="zoom-in-up">
      <div className="card-body">
        <p className="text text-muted text-justify company_desc px-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat Duis aute irure dolor in reprehenderit
          in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </p>
        <div className="quick_links">
        <button className="btn btn-md btn-primary px-5">Quick Links</button>
        </div>
        
      </div>
    </div>
  );
};

export default Left;
