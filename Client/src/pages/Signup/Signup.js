import React, { useState } from "react";
import { Alert } from "@mui/material";
import "./Signup.css";
import {Navigate} from "react-router-dom"
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import {registration} from "../../actions/auth";
const Signup = ({registration, isAuthenticated,message, user,isLoading}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [address, setLocation] = useState("");

  //alerts
  const [customAlert, setCustomAlert] = useState("");

  const submitForm = (e) => {
    setCustomAlert('');
    e.preventDefault();
    console.log(name);
    console.log(email);
    console.log(password);
    console.log(confirmPassword);
    console.log(address);
    let temp = "registartion success";
    console.log("Your length ",temp.length)
    if (password !== confirmPassword) {
       setCustomAlert("Passwords do not match");
    }
    if(password===confirmPassword){
        //  setCustomAlert("registartion success");
        registration({name, email, password, address})
    }
    
    
    
  
    
  };
  if(isAuthenticated && user){
    // setCustomAlert(message);
    return <Navigate to="/WelcomePage"/>
  }
  
  const handleAlert = () => {
    setCustomAlert("");
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-7 col-12 col-sm-12 form">
          <form onSubmit={submitForm}>
            {customAlert.length > 3 ? (
              <Alert severity={isAuthenticated && user ? "success" : "warning"} onClose={handleAlert}>
                {customAlert}
              </Alert>
            ) : (
              <></> 
            )}
            <h3 className="text text-center my-5">College Registration Form</h3>
            <input
              type="text"
              name="collegeName"
              className="form-control my-3 input"
              placeholder="Enter your College Name"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <input
              type="email"
              name="collegeEmail"
              className="form-control my-3 input"
              placeholder="Enter your College Email id"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <input
              type="password"
              name="collegePassword"
              className="form-control my-3 input"
              placeholder="Enter your password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <input
              type="password"
              name="confirmPassword"
              className="form-control my-3 input"
              placeholder="Re Enter your password"
              onChange={(e) => {
                setConfirmPassword(e.target.value);
              }}
            />
            <input
              type="text"
              name="collegeLocation"
              className="form-control my-3 input"
              placeholder="Enter your location"
              onChange={(e) => {
                setLocation(e.target.value);
              }}
            />
            <div className="d-flex justify-content-center">
              <button className="btn btn-md btn-warning px-5" type="submit">
                Signup
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

Signup.propTypes={
  isAuthenticated : PropTypes.bool,
  isLoading : PropTypes.bool,
  user : PropTypes.object,
  message : PropTypes.string,
}

const mapStateToProps = ((state)=>({
  isAuthenticated:state.auth.isAuthenticated,
  isLoading : state.auth.isLoading,
  message : state.auth.message,
  user : state.auth.user
}));

export default connect(mapStateToProps, { registration })(Signup);
