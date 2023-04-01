/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState ,useEffect} from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getAllUsers } from "../../actions/auth";
import { getAllExamPapers } from "../../actions/ExamPapers";
import { createNewExamAnnouncement } from "../../actions/Announcements";
import "./WelcomePage.css";
import UploadExamPapers from "./UploadExamPapers";
import Classes from "./WelcomePage.module.css";
import ContactForm from "../ContactForm/ContactForm";
// import Editor from "./Editor"
import UploadedPhotos from "../../components/UploadedPhotos/UploadedPhotos";
import SocialAccounts from "../../components/SocialAccounts/SocialAccounts";
import Announcements from "./Announcements";

const WelcomePage = ({
  user,
  isLoading,
  isAuthenticated,
  getAllUsers,
  users,
  papers,
  getAllExamPapers,
  createNewExamAnnouncement
}) => {
  
  
  const [state, setState] = useState('Home');
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      console.log(latitude);
      console.log(longitude);
    });
  }
  return (
    <>
      {user && isAuthenticated ? (
        <>
          <div className={Classes.Maincontainer}>
            <div className={Classes.leftChild}>
              <ul>
              <li className="nav nav-item">
                  <a
                    className={Classes.navLink}
                    onClick={(e) => {
                      setState("Home");
                    }}
                  >
                    Home
                  </a>
                </li>
                <li className="nav nav-item">
                  <a
                    className={Classes.navLink}
                    onClick={(e) => {
                      setState("uploadPhotos");
                    }}
                  >
                    Uploaded Photos
                  </a>
                </li>

                <li className="nav nav-item">
                  <a
                    className={Classes.navLink}
                    onClick={(e) => {
                      setState("PreviousYearPapers");
                    }}
                  >
                    Upload Previous Year Papers
                  </a>
                </li>

                <li className="nav nav-item">
                  <a
                    className={Classes.navLink}
                    onClick={(e) => {
                      setState("Announcements");
                    }}
                  >
                    Announcements
                  </a>
                </li>

                <li className="nav nav-item">
                  <a
                    className={Classes.navLink}
                    onClick={(e) => {
                      setState("UploadCollegePhotos");
                    }}
                  >
                    Upload College Photos
                  </a>
                </li>

                <li className="nav nav-item">
                  <a
                    className={Classes.navLink}
                    onClick={(e) => {
                      setState("ContactForm");
                    }}
                  >
                    Contact Form
                  </a>
                </li>
              </ul>
            </div>
            <div className={Classes.rightChild}>
            {user && state ==="Home"  ? (
                    <>
                    
                      {user && (
                        <>
                        <p>Welcome To Dashboard</p>
                          <div className="card">
                            <div className="card-body">
                            <p>College Name : {user.name}</p>
                          <p>College Email : {user.email}</p>
                          <p>College Address : {user.address}</p>
                            </div>
                          </div>
                        </>
                      )}
                    </>
                  ) : (
                    <>
                      {user && state === "PreviousYearPapers" ? (
                        <>
                          <UploadExamPapers 
                            examPapers = {papers}
                          />
                        </>
                      ) : (
                        <>
                          {user && state === "uploadPhotos" ? (
                            <UploadedPhotos/>
                          ) : (
                            <>
                              {user && state === "Announcements" ? (
                                <Announcements/>
                              ) : (
                                <>
                                  {user && state === "UploadCollegePhotos" ? (
                                    <SocialAccounts/>
                                  ) : (
                                    <>
                                      {user && state === "ContactForm" ? <>
                                        <ContactForm/>
                                      </> : <div style={{display:"none"}}>hello</div>}
                                    </>
                                  )}
                                </>
                              )}
                            </>
                          )}
                        </>
                      )}
                    </>
                  )}
            </div>
          </div>
        </>
      ) : (
        <>
          <p>Please Login.. Your Session Expired</p>
          <button className="btn btn-outline-primary">
            <a href="/login">Login Now</a>
          </button>
        </>
      )}
    </>
  );
};

WelcomePage.propTypes = {
  user: PropTypes.object,
  isAuthenticated: PropTypes.bool,
  isLoading: PropTypes.bool,
  users: PropTypes.array,
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
  isLoading: state.auth.isLoading,
  isAuthenticated: state.auth.isAuthenticated,
  users: state.auth.users,
});

export default connect(mapStateToProps, { getAllUsers ,createNewExamAnnouncement})(WelcomePage);
