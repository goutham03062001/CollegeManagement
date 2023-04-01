import React, { useState } from "react";
import Classes from "./ContactForm.module.css";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { sendIssue } from "../../actions/ContactForm";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
const ContactForm = ({ sendIssue, isLoading, isSubmitted }) => {
  const [problem, setProblemTitle] = useState("");
  const [description, setDescription] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  const [success, setSuccess] = useState(false);

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      let latitude = position.coords.latitude;
      let longitude = position.coords.longitude;
      setLatitude(latitude);
      setLongitude(longitude);
    });
  }

  const submitForm = (e) => {
    e.preventDefault();
    console.log(problem);
    console.log(description);
    sendIssue({ problem, description, latitude, longitude });

    if (isSubmitted && !isLoading) {
      setSuccess(true);
      console.log("showing alert");
    }
  };

  return (
    <div>
      {isSubmitted && success ? (
        <>
          <div className="my-3">
            <Alert severity="success" onClose={() => setSuccess(false)}>
              <AlertTitle>Submitted Your Issue Successfully</AlertTitle>
            </Alert>
          </div>
        </>
      ) : (
        <></>
      )}
      <form onSubmit={(e) => submitForm(e)}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Enter problem "
            className={Classes.input}
            onChange={(e) => {
              setProblemTitle(e.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <textarea
            className={Classes.textarea}
            placeholder="Describe the problem"
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          ></textarea>
        </div>
        <button className="btn btn-outline-secondary btn-md">Submit</button>
      </form>
    </div>
  );
};
ContactForm.propTypes = {
  isLoading: PropTypes.bool,
  isSubmitted: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isLoading: state.Contact.isLoading,
  isSubmitted: state.Contact.isSubmitted,
});

export default connect(mapStateToProps, { sendIssue })(ContactForm);
