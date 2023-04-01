import React,{ useEffect } from "react";
import "./intro.css";
import welcomeImage from "../../Assets/welcomeImage.png";
import Greetings from "./Greetings";
import AOS from "aos";
import GitHubIcon from '@mui/icons-material/GitHub';
import PeopleIcon from '@mui/icons-material/People';
import ArticleIcon from '@mui/icons-material/Article';
const Intro = () => {
  useEffect(() => {
    AOS.init({
      offset:200,
      duration: 3000,
    });
  });
  return (
    <>
      <div className="intro_background"></div>
      <div className="container intro_ctn">
        <div className="row">
          <div className="col-lg-6 col-12 col-sm-11 col-md-6 my-3">
            {/* <h3 className="text text-center text-muted py-5 brand " data-aos="fade-up">
              Welcome To ValueTech
            </h3> */}
              <Greetings/>
            <img
              src={welcomeImage}
              className="img img-fluid welcome"
              alt="welcomepic"
              data-aos = "zoom-in"
            />
          </div>
          <div className="col-lg-6 col-12 col-sm-11 col-md-6 my-3 intro_right">
            <h3 className="text text-center  mt-5" data-aos="fade-up">Get Start with Us</h3>
            <div className="intro_right_bottom">
            <p className="text text-justify right-intro-text mt-5" data-aos="fade-up">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
            <div className="intro_btns">
              <button className="btn btn-dark btn-sm into_social_btn" data-aos="fade-up">View our blogs &nbsp; <ArticleIcon/></button>
              <button className="btn btn-warning btn-sm into_social_btn" data-aos="fade-up">View Results &nbsp; <PeopleIcon/></button>
              <button className="btn btn-info btn-sm into_social_btn" data-aos="fade-up">Follow us &nbsp; <GitHubIcon/></button>
            </div>
            </div>

            
          </div>
        </div>
      </div>
    </>
  );
};

export default Intro;
