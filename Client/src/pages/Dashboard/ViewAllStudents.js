import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getAllUsers, viewStudentById } from "../../actions/auth";
// import ViewSingleStudent from "./ViewSingleStudent";
// import { Modal, Typography, Box } from "@mui/material";
const style = {
  position: "fixed",
  top: "50%",
  left: "40%",
  zIndex: 1,
};
const myStyle = {
  backgroundColor: "#c2c5c8",
  opacity: 0.9,
};
const normalStyle = {
  backgroundColor: "none",
};
const ViewAllStudents = ({ users, student, getAllUsers, viewStudentById }) => {
  useEffect(() => {
    getAllUsers();
  }, [getAllUsers]);

  const [showModal, handleModal] = useState(false);
  const viewStudentDetails = (id) => {
    viewStudentById(id);
    // handleOpen();
    handleModal(true);
    console.log("Modal activate");
  };
  const closeModal = () => {
    handleModal(false);
  };
  return (
    <div
      className="mt-5 students-table"
      style={showModal && student ? myStyle : normalStyle}
    >
      <table class="table table-bordered mt-3">
        <thead class="thead-light">
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Address</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody className="mx-5">
          {users &&
            users.map((eachUser) => (
              <tr className="px-2 mx-2">
                <td className="">{eachUser.name}</td>
                <td>{eachUser.email}</td>
                <td>{eachUser.address}</td>
                <td>
                  <button
                    data-toggle="modal"
                    data-target="#exampleModal"
                    className="btn btn-sm btn-outline-warning"
                    onClick={(e) => viewStudentDetails(eachUser._id)}
                  >
                    View More
                    {/* <a className='nav-link' href={`/viewStudent/${eachUser._id}`}>View More</a> */}
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <div className="card " style={style}>
        {showModal && student ? (
          <>
            <div className="card-body">
              <p className="text text-bold">Name : {student && student.name}</p>
              <p>Email : {student && student.email}</p>
              <p>Address : {student && student.address}</p>

              <div className="d-flex flex-row justify-content-around mt-3">
              <button className="btn btn-outline-danger" onClick={closeModal}>Close</button>
                
              <button className="btn btn-outline-primary">Send Mail</button>
              </div>
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};
ViewAllStudents.propTypes = {
  user: PropTypes.object,
  users: PropTypes.array,
  student: PropTypes.object,
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
  users: state.auth.users,
  student: state.auth.student,
});
export default connect(mapStateToProps, { getAllUsers, viewStudentById })(
  ViewAllStudents
);
